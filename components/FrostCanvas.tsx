"use client";

import { useEffect, useRef } from "react";

type Branch = {
  x: number;
  y: number;
  angle: number;
  len: number;
  depth: number;
  progress: number;
  spawned?: boolean;
};

export default function FrostCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let branches: Branch[] = [];
    let raf = 0;

    function seed(x: number, y: number, angle: number, len: number, depth: number) {
      branches.push({ x, y, angle, len, depth, progress: 0 });
    }

    function resize() {
      if (!canvas) return;
      const w = canvas.parentElement?.clientWidth ?? window.innerWidth;
      const h = canvas.parentElement?.clientHeight ?? window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      branches = [];
      seed(0, 0, Math.PI / 4, 100, 4);
      seed(w, 0, (Math.PI * 3) / 4, 100, 4);
      seed(0, h, -Math.PI / 4, 100, 4);
      seed(w, h, (-Math.PI * 3) / 4, 100, 4);
    }

    function drawBranch(b: Branch) {
      if (b.depth <= 0 || !canvas) return;
      const grown = b.len * b.progress;
      const ex = b.x + Math.cos(b.angle) * grown;
      const ey = b.y + Math.sin(b.angle) * grown;
      ctx!.strokeStyle = `rgba(207,239,251,${0.14 * (b.depth / 4)})`;
      ctx!.lineWidth = Math.max(0.6, b.depth * 0.4);
      ctx!.beginPath();
      ctx!.moveTo(b.x, b.y);
      ctx!.lineTo(ex, ey);
      ctx!.stroke();

      if (b.progress >= 1 && !b.spawned) {
        b.spawned = true;
        seed(ex, ey, b.angle - 0.6, b.len * 0.62, b.depth - 1);
        seed(ex, ey, b.angle + 0.6, b.len * 0.62, b.depth - 1);
      }
    }

    function frame() {
      if (!canvas) return;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx!.clearRect(0, 0, w, h);
      for (const b of branches) {
        if (b.progress < 1) b.progress = Math.min(1, b.progress + 0.02);
        drawBranch(b);
      }
      raf = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduce) {
      branches.forEach((b) => (b.progress = 1));
      for (let pass = 0; pass < 3; pass++) {
        branches.slice().forEach(drawBranch);
      }
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-55"
    />
  );
}
