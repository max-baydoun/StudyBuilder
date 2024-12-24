import { useEffect, useRef, useState } from 'react';

function StarryCanvas({ noOfStars }) {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Define function to update canvas size based on window size
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Generate stars data
    const stars = Array.from({ length: noOfStars }).map(() => ({
      x: Math.random() * canvasSize.width,
      y: (1 - 1/2*Math.log10(100*Math.random())) * canvasSize.height, // More stars towards the top of the page
      size: Math.random() * 2,
      speed: Math.random() * 0.8,
      baseGlowRadius: Math.random() * 100, // Base glow radius
      glowRadius: Math.random() * 50, // Animated glow radius
      glowIntensity: Math.random() * 10 + 0.3, // Glow intensity, adjusted for more visible glow
      glowDirection: Math.random() > 0.5 ? 1 : -1, // Direction of glow change
    }));

    // Render function
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        // Animate glow
        star.glowRadius += star.glowDirection * 0.2;
        if (star.glowRadius > star.baseGlowRadius + 5 || star.glowRadius < star.baseGlowRadius - 5) {
          star.glowDirection *= -1; // Reverse direction
        }

        // Draw star with glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

        // Apply glow effect
        ctx.shadowColor = 'white';
        ctx.shadowBlur = star.glowRadius;
        ctx.fillStyle = "white";
        ctx.fill();

        // Move the star
        star.x += star.speed;
        if (star.x > canvas.width) {
          star.x = 0;
          star.y = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(render);
    };

    render();
  }, [noOfStars, canvasSize]); // Depend on the canvas size and number of stars

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
      id='stars'
    />
  );
}

export default StarryCanvas;
