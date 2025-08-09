import React, { useRef, useEffect } from "react";

const Background = () => {
  const canvasRef = useRef(null);
  const particleCount = 60;
  const maxDistance = 120;
  const repelDistance = 100;
  let particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 1.2; // faster base drift
        this.vy = (Math.random() - 0.5) * 1.2;
        this.size = 2;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "#4dd0e1";
        ctx.fill();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // light damping for smoother motion
        this.vx *= 0.995;
        this.vy *= 0.995;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Ensure always moving
        if (Math.abs(this.vx) < 0.05) {
          this.vx += (Math.random() - 0.5) * 0.5;
        }
        if (Math.abs(this.vy) < 0.05) {
          this.vy += (Math.random() - 0.5) * 0.5;
        }
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        let safe = false;
        let x, y;
        while (!safe) {
          x = Math.random() * canvas.width;
          y = Math.random() * canvas.height;
          safe = particles.every(
            (p) => Math.hypot(p.x - x, p.y - y) > 10
          );
        }
        particles.push(new Particle(x, y));
      }
    }

    const mouse = { x: null, y: null };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        if (mouse.x && mouse.y) {
          const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
          if (dist < repelDistance) {
            const angle = Math.atan2(p.y - mouse.y, p.x - mouse.x);
            p.vx += Math.cos(angle) * 0.05; // faster repel
            p.vy += Math.sin(angle) * 0.05;
          }
        }

        p.update();
        p.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y
          );
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(0, 255, 255, 0.2)";
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "black",
      }}
    />
  );
};

export default Background;
