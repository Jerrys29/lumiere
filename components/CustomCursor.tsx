import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const mouseMoveHandler = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }

      // Check for hoverable elements
      const target = event.target as HTMLElement;
      const isPointer = window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a');

      const isImage = target.tagName.toLowerCase() === 'img' && target.closest('.product-card');

      if (isImage) {
        setIsHovering(true);
        setHoverText('Voir');
      } else if (isPointer) {
        setIsHovering(true);
        setHoverText('');
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    const animateRing = () => {
      // Linear interpolation for smooth delay
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    const animationFrame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          background: 'linear-gradient(135deg, #C9A962 0%, #B76E79 100%)',
          boxShadow: '0 0 10px rgba(201, 169, 98, 0.5)'
        }}
      />
      {/* Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 border rounded-full pointer-events-none z-[100] transition-all duration-300 flex items-center justify-center
          ${isHovering ? 'w-16 h-16 backdrop-blur-sm border-gold-rose' : 'w-8 h-8 opacity-50 border-gold-champagne'}
        `}
        style={{
          background: isHovering ? 'radial-gradient(circle, rgba(201, 169, 98, 0.15), rgba(183, 110, 121, 0.1))' : 'transparent',
          boxShadow: isHovering ? '0 0 20px rgba(201, 169, 98, 0.4), 0 0 40px rgba(183, 110, 121, 0.2)' : 'none'
        }}
      >
        {isHovering && hoverText && (
          <span className="text-[10px] text-white font-medium uppercase tracking-widest">{hoverText}</span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
