---
name: responsive-design
description: "Design and review resilient responsive interfaces across content sizes, viewport ranges, input modes, localization, zoom, and reduced-motion preferences."
---


# Responsive design

1. Start from content constraints and component boundaries instead of device-specific screenshots.
2. Use fluid sizing, intrinsic layout, container queries when appropriate, and the fewest evidence-based breakpoints.
3. Test narrow, intermediate, wide, tall, short, zoomed, and long-localized-content states.
4. Prevent horizontal overflow, clipped focus rings, unusable fixed elements, layout shifts, and hidden essential actions.
5. Support keyboard, touch, mouse, coarse pointers, safe areas, virtual keyboards, and reduced motion.
6. Keep images responsive and correctly sized; reserve dimensions and avoid downloading oversized assets.
7. Verify the hero and navigation first, then representative dense and interactive components.

Do not add heavy animation or rendering dependencies unless the user approves the dependency and performance cost.
