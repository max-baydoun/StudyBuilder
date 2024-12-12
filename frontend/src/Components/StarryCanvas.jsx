import { useEffect, useRef } from 'react';

function StarryCanvas({noOfStars}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = Array.from({ length: noOfStars }).map(() => ({
      x: Math.random() * canvas.width,
      y: (1 - 1/2*Math.log10(100*Math.random())) * canvas.height, // More stars towards the top of the page than the bottom
      size: Math.random() * 2,
      speed: Math.random() * 0.8,
      baseGlowRadius: Math.random() * 100, // Base glow radius
      glowRadius: Math.random() * 20 + 10, // Animated glow radius
      glowIntensity: Math.random() * 0.5 + 0.3, // Glow intensity, adjusted for more visible glow
      glowDirection: Math.random() > 0.5 ? 1 : -1, // Direction of glow change
    }));
    console.log(stars[0].y)

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
  }, [noOfStars]);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
    />
  );
}

export default StarryCanvas;
