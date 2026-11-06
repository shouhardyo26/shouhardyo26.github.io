import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const carRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100, currentX: -100, currentY: -100, angle: 0 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      // Check if hovering interactive target
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.closest('button, a, input, textarea, [role="button"], label, select') !== null;
        setHovered(isClickable);
      }
    };

    const handleMouseDown = () => setActive(true);
    const handleMouseUp = () => setActive(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    let animationFrameId: number;

    const render = () => {
      const p = posRef.current;
      const dx = p.x - p.currentX;
      const dy = p.y - p.currentY;

      // Smooth lerp follow
      p.currentX += dx * 0.22;
      p.currentY += dy * 0.22;

      // Steer the car along the trajectory if moving significantly
      const speed = Math.hypot(dx, dy);
      if (speed > 1.2) {
        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Normalize angle delta for smooth rotation
        let angleDiff = (targetAngle - p.angle) % 360;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        p.angle += angleDiff * 0.28;
      }

      if (carRef.current) {
        carRef.current.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px, 0) translate(-50%, -50%) rotate(${p.angle}deg)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={carRef}
      className="custom-car-cursor pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-75 ease-out select-none"
      style={{ willChange: 'transform' }}
    >
      <div
        className={`relative transition-all duration-200 ${
          hovered ? 'scale-115' : active ? 'scale-95' : 'scale-100'
        }`}
      >
        {/* Headlight beams emitting forward from nose */}
        <div
          className={`absolute left-[30px] top-[-8px] w-[38px] h-[32px] pointer-events-none transition-opacity duration-300 ${
            hovered ? 'opacity-90' : 'opacity-40'
          }`}
          style={{
            background:
              'radial-gradient(ellipse at left, rgba(80, 191, 255, 0.7) 0%, rgba(80, 191, 255, 0.25) 45%, transparent 80%)',
            clipPath: 'polygon(0% 30%, 100% 0%, 100% 100%, 0% 70%)',
          }}
        />

        {/* BMW-inspired M-Coupe sports car top-view silhouette (36px x 18px) */}
        <svg
          width="36"
          height="18"
          viewBox="0 0 36 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          {/* Main Sports Car Body (Metallic Slate / Obsidian) */}
          <path
            d="M2 5 C2 3, 5 2, 9 2 L27 2 C31 2, 34 4, 35 7 L36 9 L35 11 C34 14, 31 16, 27 16 L9 16 C5 16, 2 15, 2 13 L1 9 Z"
            fill="url(#carBodyGrad)"
            stroke="#3b4252"
            strokeWidth="0.75"
          />

          {/* Aerodynamic Front Bumper & Twin Kidney Grille Indentations */}
          <path d="M33 7 L34.5 9 L33 11" stroke="#50BFFF" strokeWidth="0.8" strokeLinecap="round" />
          <path d="M32 7.5 H33.5" stroke="#94a3b8" strokeWidth="0.5" />
          <path d="M32 10.5 H33.5" stroke="#94a3b8" strokeWidth="0.5" />

          {/* Hood Power Dome Crease lines */}
          <path d="M23 5 L31 7.2" stroke="#475569" strokeWidth="0.5" />
          <path d="M23 13 L31 10.8" stroke="#475569" strokeWidth="0.5" />

          {/* Windshield (Dark Tinted Glass) */}
          <path
            d="M22 4.5 C23 6, 23 12, 22 13.5 L19 13 C18 10, 18 8, 19 5 Z"
            fill="#0b0f19"
            stroke="#38bdf8"
            strokeWidth="0.5"
            strokeOpacity="0.8"
          />

          {/* Curved Roof with Carbon Fiber Finish */}
          <rect x="12" y="4.5" width="7" height="9" rx="1.5" fill="#151b26" stroke="#2e3846" strokeWidth="0.5" />

          {/* Rear Window */}
          <path d="M12 5 C10 6, 10 12, 12 13 L9.5 12.5 C8.5 10, 8.5 8, 9.5 5.5 Z" fill="#0b0f19" />

          {/* Rear Ducktail Spoiler */}
          <path d="M2 4 L1.2 9 L2 14" stroke="#64748b" strokeWidth="0.75" strokeLinecap="round" />

          {/* BMW Iconic Dual Corona Laser Headlights (Glowing Cyan-Blue) */}
          <circle cx="34" cy="5.8" r="1.3" fill="#50BFFF" />
          <circle cx="34" cy="12.2" r="1.3" fill="#50BFFF" />

          {/* Inner headlight halos */}
          <circle cx="32.5" cy="5.2" r="0.9" fill="#e0f2fe" />
          <circle cx="32.5" cy="12.8" r="0.9" fill="#e0f2fe" />

          {/* Dual LED Rear Taillights (Red) */}
          <line x1="2" y1="4.2" x2="3.5" y2="4.2" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" />
          <line x1="2" y1="13.8" x2="3.5" y2="13.8" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" />

          {/* Side aero mirrors */}
          <ellipse cx="20.5" cy="2" rx="1" ry="0.6" fill="#334155" />
          <ellipse cx="20.5" cy="16" rx="1" ry="0.6" fill="#334155" />

          {/* Gradients */}
          <defs>
            <linearGradient id="carBodyGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="40%" stopColor="#1e293b" />
              <stop offset="70%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
        </svg>

        {/* Small subtle speed dust or neon accent when hovered */}
        {hovered && (
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-1 bg-[#A1E342] rounded-full blur-[1px] opacity-75" />
        )}
      </div>
    </div>
  );
}
