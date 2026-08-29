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
    accentColor?: string; // e.g. '56, 189, 248' (Sky Cyan / Blue)
    nodeColor?: string; // e.g. '255, 255, 255'
    bgColor?: string;
    overlayText?: boolean;
    embedded?: boolean;
    opacity?: number;
    spacing?: number;
    customLabels?: string[];
}

export default function ConstellationGrid({
    className = '',
    accentColor = '56, 189, 248', // Electric Sky Cyan / Blue
    nodeColor = '255, 255, 255',
    bgColor,
    overlayText = false,
    embedded = false,
    opacity = 1,
    spacing = 52,
    customLabels,
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
        if (!canvas) return;

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
            radius: 240,
        };

        let nodes: Node[] = [];

        const handleResize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            if (embedded && containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                width = rect.width || window.innerWidth;
                height = rect.height || window.innerHeight;
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
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x >= -80 && x <= width + 80 && y >= -80 && y <= height + 80) {
                mouse.x = x;
                mouse.y = y;
            } else {
                mouse.x = -1000;
                mouse.y = -1000;
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                const rect = canvas.getBoundingClientRect();
                mouse.x = touch.clientX - rect.left;
                mouse.y = touch.clientY - rect.top;
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
                        radius: Math.random() * 1.3 + 1.2,
                        label: assignedLabel,
                        pulse: Math.random() * Math.PI * 2,
                    });
                }
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchstart', handleTouchMove, { passive: true });

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
                const defaultBg = isDarkMode ? '#030407' : '#f8fafc';
                ctx.fillStyle = defaultBg;
                ctx.fillRect(0, 0, width, height);
            } else {
                ctx.clearRect(0, 0, width, height);
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
                    const force = power * (1600 + speed * 160);
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
                        const alpha = (1 - nDist / MAX_CONN_DIST) * (embedded ? 0.18 : (isDarkMode ? 0.22 : 0.1));

                        ctx.strokeStyle = `rgba(${nodeColor}, ${alpha})`;
                        ctx.lineWidth = 0.75;
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
                const baseAlpha = isNear ? 0.98 : (embedded ? 0.25 : 0.28) + Math.sin(n.pulse) * 0.1;

                ctx.fillStyle = isNear
                    ? `rgba(${accentColor}, ${baseAlpha})`
                    : `rgba(${nodeColor}, ${baseAlpha})`;

                const currentRadius = isNear
                    ? n.radius * 2.3
                    : n.radius + Math.sin(n.pulse) * 0.3;

                ctx.beginPath();
                ctx.arc(n.x, n.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
                ctx.fill();

                // High-tech Spatial Radar Rings on active proximity
                if (dist < 95) {
                    const pulseRing = ((n.pulse * 20) % 30) + 4;
                    const ringAlpha = (1 - pulseRing / 34) * 0.55;

                    ctx.strokeStyle = `rgba(${accentColor}, ${ringAlpha})`;
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, pulseRing, 0, Math.PI * 2);
                    ctx.stroke();

                    // Hex / Coordinate Readout in vibrant cyan/blue
                    ctx.font = '9px var(--font-mono), ui-monospace, SFMono-Regular, Consolas, monospace';
                    ctx.fillStyle = `rgba(${accentColor}, 0.95)`;
                    ctx.fillText(n.label, n.x + 10, n.y - 10);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchMove);
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
