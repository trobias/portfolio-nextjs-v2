'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseX: number;
    baseY: number;
    radius: number;
    label: string;
    pulse: number;
}

export interface ConstellationGridProps {
    className?: string;
    accentColor?: string; // e.g. '255, 90, 54' (Signal Orange)
    nodeColor?: string; // e.g. '255, 255, 255'
    bgColor?: string;
    overlayText?: boolean;
    embedded?: boolean;
    opacity?: number;
    spacing?: number;
    customLabels?: string[];
}

const DEFAULT_STACK_LABELS = [
    'N8N:WEBHOOK',
    'ARDUINO:I2C',
    'DOCKER:UP',
    'PG:5432',
    'OPENAI:EMBED',
    'GEMINI:PROMPT',
    'PIN:13_HIGH',
    'SYS:RUNNING',
    'GNS3:VLAN10',
    'REST:200_OK',
    'MQTT:PUB',
    'LAT:27.36S',
    'NODE:ONLINE',
    'FLOW:SYNC',
    'SENSOR:TMP36',
    'ADC:1024',
];

export default function ConstellationGrid({
    className = '',
    accentColor = '255, 90, 54', // Signal orange default (#ff5a36)
    nodeColor = '255, 255, 255',
    bgColor,
    overlayText = false,
    embedded = false,
    opacity = 1,
    spacing = 55,
    customLabels = DEFAULT_STACK_LABELS,
}: ConstellationGridProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    // Sync theme preference
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current || canvas?.parentElement;
        if (!canvas) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;

        // Mouse velocity & inertial tracking
        const mouse = {
            x: -1000,
            y: -1000,
            prevX: -1000,
            prevY: -1000,
            vx: 0,
            vy: 0,
            radius: 220,
        };

        let nodes: Node[] = [];

        const handleResize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            if (embedded && container) {
                const rect = container.getBoundingClientRect();
                width = rect.width;
                height = rect.height;
            } else {
                width = window.innerWidth;
                height = window.innerHeight;
            }

            if (width === 0 || height === 0) return;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);
            initNodes();
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (embedded && container) {
                const rect = container.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            } else {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            }
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const initNodes = () => {
            nodes = [];
            const gridSpacing = spacing;
            const cols = Math.ceil(width / gridSpacing) + 1;
            const rows = Math.ceil(height / gridSpacing) + 1;

            let labelIdx = 0;
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * gridSpacing;
                    const y = j * gridSpacing;
                    const assignedLabel =
                        customLabels && customLabels.length > 0
                            ? customLabels[labelIdx % customLabels.length]
                            : `${(i * 7).toString(16).toUpperCase()}:${(j * 11).toString(16).toUpperCase()}`;
                    labelIdx++;

                    nodes.push({
                        x,
                        y,
                        vx: 0,
                        vy: 0,
                        baseX: x,
                        baseY: y,
                        radius: Math.random() * 1.1 + 1.1,
                        label: assignedLabel,
                        pulse: Math.random() * Math.PI * 2,
                    });
                }
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Attach mouse listeners to window or container
        const targetElement = embedded && container ? container : window;
        targetElement.addEventListener('mousemove', handleMouseMove as EventListener);
        targetElement.addEventListener('mouseleave', handleMouseLeave as EventListener);

        let lastTime = performance.now();

        const render = (now: number) => {
            // Normalize dt across high-refresh displays
            const dt = Math.min((now - lastTime) / 1000, 0.05);
            lastTime = now;

            // Mouse velocity calculation
            mouse.vx = (mouse.x - mouse.prevX) / (dt * 1000 || 1);
            mouse.vy = (mouse.y - mouse.prevY) / (dt * 1000 || 1);
            mouse.prevX = mouse.x;
            mouse.prevY = mouse.y;

            const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

            // Clear canvas
            if (bgColor) {
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, width, height);
            } else if (!embedded) {
                const defaultBg = isDarkMode ? '#0b0b0b' : '#f8fafc';
                ctx.fillStyle = defaultBg;
                ctx.fillRect(0, 0, width, height);
            } else {
                ctx.clearRect(0, 0, width, height);
            }

            // If user prefers reduced motion, draw calm static node mesh without spring shockwaves
            if (prefersReducedMotion) {
                const effectiveNodeColor = nodeColor;
                for (let i = 0; i < nodes.length; i++) {
                    const n = nodes[i];
                    ctx.fillStyle = `rgba(${effectiveNodeColor}, 0.25)`;
                    ctx.beginPath();
                    ctx.arc(n.baseX, n.baseY, n.radius, 0, Math.PI * 2);
                    ctx.fill();
                }
                return;
            }

            // Node Physics Engine (Hooke's Law Spring-Mass-Damping system)
            const SPRING_K = 18; // Spring stiffness
            const DAMPING = 0.82; // Velocity resistance

            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                n.pulse += dt * 3;

                // Mouse distance vectors
                const dx = mouse.x - n.x;
                const dy = mouse.y - n.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Dynamic shockwave repulsion based on cursor speed
                if (dist < mouse.radius && dist > 0) {
                    const power = (1 - dist / mouse.radius);
                    const force = power * (1500 + speed * 150);
                    const angle = Math.atan2(dy, dx);

                    // Impulse force pushing node away from cursor
                    n.vx -= Math.cos(angle) * force * dt;
                    n.vy -= Math.sin(angle) * force * dt;
                }

                // Calculate restoring force back to home anchor point (baseX, baseY)
                const homeDx = n.baseX - n.x;
                const homeDy = n.baseY - n.y;

                n.vx += homeDx * SPRING_K * dt;
                n.vy += homeDy * SPRING_K * dt;

                // Apply Damping
                n.vx *= DAMPING;
                n.vy *= DAMPING;

                // Integrate position
                n.x += n.vx * dt * 60;
                n.y += n.vy * dt * 60;
            }

            // Draw Connections (Optimized Distance Culling)
            const MAX_CONN_DIST = 75;
            const MAX_CONN_DIST_SQ = MAX_CONN_DIST * MAX_CONN_DIST;

            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];

                for (let j = i + 1; j < nodes.length; j++) {
                    const n2 = nodes[j];
                    const ndx = n.x - n2.x;
                    const ndy = n.y - n2.y;
                    const distSq = ndx * ndx + ndy * ndy;

                    if (distSq < MAX_CONN_DIST_SQ) {
                        const nDist = Math.sqrt(distSq);
                        const alpha = (1 - nDist / MAX_CONN_DIST) * (embedded ? 0.12 : (isDarkMode ? 0.18 : 0.08));

                        ctx.strokeStyle = `rgba(${nodeColor}, ${alpha})`;
                        ctx.lineWidth = 0.7;
                        ctx.beginPath();
                        ctx.moveTo(n.x, n.y);
                        ctx.lineTo(n2.x, n2.y);
                        ctx.stroke();
                    }
                }
            }

            // Render Node Points & Interactive Highlights
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                const dx = mouse.x - n.x;
                const dy = mouse.y - n.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const isNear = dist < mouse.radius;

                // Node base opacity pulse
                const baseAlpha = isNear ? 0.95 : (embedded ? 0.22 : 0.25) + Math.sin(n.pulse) * 0.08;

                ctx.fillStyle = isNear
                    ? `rgba(${accentColor}, ${baseAlpha})`
                    : `rgba(${nodeColor}, ${baseAlpha})`;

                const currentRadius = isNear
                    ? n.radius * 2.1
                    : n.radius + Math.sin(n.pulse) * 0.25;

                ctx.beginPath();
                ctx.arc(n.x, n.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
                ctx.fill();

                // High-tech Spatial Radar Rings on active proximity
                if (dist < 90) {
                    const pulseRing = ((n.pulse * 20) % 30) + 4;
                    const ringAlpha = (1 - pulseRing / 34) * 0.45;

                    ctx.strokeStyle = `rgba(${accentColor}, ${ringAlpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, pulseRing, 0, Math.PI * 2);
                    ctx.stroke();

                    // Hex / Telemetry Coordinate Readout
                    ctx.font = '9px var(--font-mono), monospace, Consolas';
                    ctx.fillStyle = `rgba(${accentColor}, 0.9)`;
                    ctx.fillText(n.label, n.x + 10, n.y - 10);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            targetElement.removeEventListener('mousemove', handleMouseMove as EventListener);
            targetElement.removeEventListener('mouseleave', handleMouseLeave as EventListener);
        };
    }, [isDarkMode, embedded, accentColor, nodeColor, bgColor, spacing, customLabels]);

    const containerStyle: React.CSSProperties = embedded
        ? { opacity, pointerEvents: 'auto' }
        : {};

    return (
        <div
            ref={containerRef}
            style={containerStyle}
            className={`constellationGrid ${embedded ? 'constellationEmbedded' : 'relative w-full h-screen overflow-hidden select-none bg-slate-950'} ${className}`}
        >
            <canvas ref={canvasRef} className="constellationCanvas" />

            {overlayText && (
                <div className="constellationOverlay">
                    <h1 className="constellationTitle">
                        Constellation
                    </h1>
                    <p className="constellationDescription">
                        High-velocity dynamic mesh. Sweep your cursor quickly across the grid to unleash kinetic shockwaves.
                    </p>
                </div>
            )}
        </div>
    );
}
