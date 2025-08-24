import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const backgroundRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setMousePosition({ x: mouseX, y: mouseY });
      setIsMoving(true);
      setIsActive(true);
      
      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set timeout to deactivate cursor after 2 seconds of no movement
      timeoutRef.current = setTimeout(() => {
        setIsActive(false);
      }, 2000);
      
      setTimeout(() => setIsMoving(false), 150);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Smooth animation loop
    const animate = () => {
      // Smooth cursor movement with different speeds
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      // Faster dot movement
      dotX += (mouseX - dotX) * 0.4;
      dotY += (mouseY - dotY) * 0.4;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX - 20}px`;
        cursorRef.current.style.top = `${cursorY - 20}px`;
        // No scaling or movement - cursor stays exactly where it should be
        cursorRef.current.style.transform = `scale(1)`;
        cursorRef.current.style.opacity = isActive ? 1 : 0.4;
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX - 3}px`;
        dotRef.current.style.top = `${dotY - 3}px`;
        // No scaling - dot stays exactly where it should be
        dotRef.current.style.transform = `scale(1)`;
        dotRef.current.style.opacity = isActive ? 1 : 0.6;
      }

      // Update background animation position
      if (backgroundRef.current) {
        backgroundRef.current.style.left = `${mouseX - 100}px`;
        backgroundRef.current.style.top = `${mouseY - 100}px`;
        backgroundRef.current.style.transform = `scale(${isMoving ? 1.1 : 0.9})`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover effects for interactive elements (excluding text areas)
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .surface, .btn-primary, .btn-outline');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovering(true));
      el.addEventListener('mouseleave', () => setIsHovering(false));
    });

    // Special handling for text areas to prevent cursor jumping
    const textElements = document.querySelectorAll('input, textarea');
    textElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        setIsHovering(false); // Don't scale cursor on text areas
      });
      el.addEventListener('mouseleave', () => {
        setIsHovering(false);
      });
    });

    // Start animation
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsHovering(true));
        el.removeEventListener('mouseleave', () => setIsHovering(false));
      });

      textElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsHovering(false));
        el.removeEventListener('mouseleave', () => setIsHovering(false));
      });

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isHovering]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Dynamic Background Animation */}
      <div
        ref={backgroundRef}
        className="fixed pointer-events-none z-20 transition-all duration-300 ease-out"
        style={{
          left: 0,
          top: 0,
          width: '200px',
          height: '200px',
        }}
      >
        {/* Flowing particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${2 + Math.random() * 3}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Ripple effect */}
        <div
          className="absolute inset-0 rounded-full border border-pink-400/20"
          style={{
            animation: isMoving ? 'ripple 1s infinite' : 'none',
          }}
        />
        
        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/10 to-purple-500/10 blur-xl"
          style={{
            animation: isMoving ? 'pulse 2s infinite' : 'none',
          }}
        />
      </div>

      {/* Main cursor - No movement or scaling */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          left: 0,
          top: 0,
        }}
      >
        {/* Outer ring */}
        <div
          className="w-10 h-10 rounded-full border-2 border-pink-400/80 bg-gradient-to-r from-pink-400/20 to-purple-500/20 backdrop-blur-sm"
          style={{
            boxShadow: `0 0 30px rgba(236, 72, 153, 0.5), 
                        inset 0 0 20px rgba(147, 51, 234, 0.2)`,
            filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.4))',
          }}
        />
        
        {/* Inner ring */}
        <div
          className="absolute inset-1 rounded-full border border-purple-400/60 bg-gradient-to-r from-purple-400/30 to-pink-400/30"
          style={{
            animation: isMoving ? 'spin 1s linear infinite' : 'none',
          }}
        />
      </div>

      {/* Inner dot - No movement or scaling */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          left: 0,
          top: 0,
        }}
      >
        <div
          className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
          style={{
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.8), 0 0 40px rgba(147, 51, 234, 0.6)',
          }}
        />
      </div>

      {/* Hover effect ring - Only shows visual effect, no movement */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-40 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
          }}
        >
          <div
            className="w-24 h-24 rounded-full border border-pink-400/40 bg-pink-400/5"
            style={{
              animation: 'expand 0.6s ease-out forwards',
            }}
          />
        </div>
      )}

      {/* CSS animations */}
      <style jsx>{`
        @keyframes expand {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.4;
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
