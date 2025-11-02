import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(index) {
        this.index = index;
        this.baseX = Math.random() * canvas.width;
        this.baseY = Math.random() * canvas.height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.radius = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = Math.random() * 0.02 - 0.01;
        this.floatRadius = Math.random() * 50 + 20;
      }

      update(time) {
        this.angle += this.angleSpeed;
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        // Wrap around edges
        if (this.baseX < -50) this.baseX = canvas.width + 50;
        if (this.baseX > canvas.width + 50) this.baseX = -50;
        if (this.baseY < -50) this.baseY = canvas.height + 50;
        if (this.baseY > canvas.height + 50) this.baseY = -50;

        // Floating motion
        this.x = this.baseX + Math.sin(this.angle) * this.floatRadius;
        this.y = this.baseY + Math.cos(this.angle) * this.floatRadius;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Glowing effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 2
        );
        
        if (theme === 'light') {
          gradient.addColorStop(0, 'rgba(14, 165, 233, 0.8)');
          gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
        } else {
          gradient.addColorStop(0, 'rgba(56, 189, 248, 0.8)');
          gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius / 2, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'light' 
          ? 'rgba(14, 165, 233, 1)' 
          : 'rgba(56, 189, 248, 1)';
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push(new Particle(i));
    }

    // Animation loop
    const animate = () => {
      time += 0.01;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(time);
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            const opacity = (1 - distance / 150) * 0.4;
            
            if (theme === 'light') {
              ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`;
            } else {
              ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            }
            
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      <div 
        className={`absolute inset-0 z-0 pointer-events-none ${
          theme === 'light' 
            ? 'bg-gradient-to-b from-white/70 via-white/30 to-white'
            : 'bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950'
        }`}
      />
    </>
  );
};

export default AnimatedBackground;