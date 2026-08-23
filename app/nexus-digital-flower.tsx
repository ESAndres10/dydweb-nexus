"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

type FlowerNode = {
  id: string;
  label: string;
  icon: LucideIcon;
};

type NexusDigitalFlowerProps = {
  nodes: FlowerNode[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

type PetalParticle = {
  x: number;
  y: number;
  r: number;
  opacity: number;
  delay: number;
  white: boolean;
};

type PetalShape = {
  angle: number;
  length: number;
  halfWidth: number;
  opacity: number;
  particles: PetalParticle[];
};

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value |= 0;
    value = (value + 0x6d2b79f5) | 0;
    let next = Math.imul(value ^ (value >>> 15), 1 | value);
    next = (next + Math.imul(next ^ (next >>> 7), 61 | next)) ^ next;
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function petalWidthAt(progress: number, halfWidth: number) {
  return halfWidth * Math.sin(Math.PI * Math.pow(progress, 0.62));
}

export function NexusDigitalFlower({ nodes, activeIndex, onSelect }: NexusDigitalFlowerProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  const petals = useMemo<PetalShape[]>(() => {
    return nodes.map((_, index) => {
      const rand = seededRandom(index * 47 + 11);
      const baseAngle = (index / nodes.length) * 360 - 90;
      const angle = baseAngle + (rand() - 0.5) * 5;
      const length = 178 + rand() * 30;
      const halfWidth = 38 + rand() * 10;
      const opacity = 0.64 + rand() * 0.18;
      const particles = Array.from({ length: 26 }, (_item, particleIndex) => {
        const progress = rand();
        const width = petalWidthAt(progress, halfWidth) * 0.9;
        return {
          x: (rand() - 0.5) * 2 * width,
          y: -progress * length,
          r: 0.55 + rand() * 1.05,
          opacity: 0.32 + rand() * 0.5,
          delay: rand() * 3.4,
          white: particleIndex % 5 === 0,
        };
      });

      return { angle, length, halfWidth, opacity, particles };
    });
  }, [nodes]);

  const rays = useMemo(() => {
    const rand = seededRandom(97);
    return Array.from({ length: 32 }, (_item, index) => {
      const long = index % 5 === 0;
      const angle = (360 / 32) * index + (rand() - 0.5) * 4;
      const length = long ? 82 + rand() * 38 : 28 + rand() * 28;
      const radians = (angle * Math.PI) / 180;
      return {
        x2: 300 + Math.cos(radians) * length,
        y2: 300 + Math.sin(radians) * length,
        long,
        delay: rand() * 2.6,
      };
    });
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rootRef.current?.style.setProperty("--tilt-x", `${(-y * 8).toFixed(2)}deg`);
    rootRef.current?.style.setProperty("--tilt-y", `${(x * 10).toFixed(2)}deg`);
  };

  const resetPointer = () => {
    rootRef.current?.style.setProperty("--tilt-x", "0deg");
    rootRef.current?.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={rootRef}
      className={`nexus-flower-canvas nexus-svg-flower ${open ? "is-open" : ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="nexus-flower-depth">
        <svg className="nexus-flower-svg" viewBox="0 0 600 600" role="img" aria-label="Nexus Core, ecosistema digital de servicios DYDWEB">
          <defs>
            <radialGradient id="nexus-petal-fill" cx="50%" cy="15%" r="90%">
              <stop offset="0%" stopColor="#f4fbff" stopOpacity="0.5" />
              <stop offset="34%" stopColor="#00eaff" stopOpacity="0.3" />
              <stop offset="68%" stopColor="#0077ff" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#003b80" stopOpacity="0.04" />
            </radialGradient>
            <radialGradient id="nexus-core-fill" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#bdf7ef" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#00eaff" stopOpacity="0.36" />
              <stop offset="100%" stopColor="#0077ff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="nexus-ray-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#f4fbff" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#00eaff" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g className="nexus-svg-back-orbits" aria-hidden="true">
            <ellipse cx="300" cy="300" rx="184" ry="72" />
            <ellipse cx="300" cy="300" rx="226" ry="88" />
            <ellipse cx="300" cy="300" rx="142" ry="214" />
          </g>

          <g className="nexus-svg-petals">
            {nodes.map((node, index) => {
              const petal = petals[index];
              const Icon = node.icon;
              const selected = index === activeIndex;
              const path = `M 0,0 C ${-petal.halfWidth * 0.9},${-petal.length * 0.2} ${-petal.halfWidth * 1.1},${-petal.length * 0.72} 0,${-petal.length} C ${petal.halfWidth * 1.1},${-petal.length * 0.72} ${petal.halfWidth * 0.9},${-petal.length * 0.2} 0,0 Z`;

              return (
                <g
                  key={node.id}
                  className={`nexus-svg-petal ${selected ? "is-active" : ""}`}
                  transform={`translate(300 300) rotate(${petal.angle})`}
                  style={{ ["--delay" as string]: `${index * 85}ms`, opacity: petal.opacity }}
                  onClick={() => onSelect(index)}
                  onPointerEnter={() => onSelect(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={node.label}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onSelect(index);
                    }
                  }}
                >
                  <line className="nexus-svg-energy" x1="0" y1="0" x2="0" y2={-petal.length * 0.72} />
                  <path className="nexus-svg-petal-path" d={path} />
                  {petal.particles.map((particle, particleIndex) => (
                    <circle
                      key={`${node.id}-${particleIndex}`}
                      className="nexus-svg-particle"
                      cx={particle.x}
                      cy={particle.y}
                      r={particle.r}
                      fill={particle.white ? "#ffffff" : "#8fe9e0"}
                      style={{
                        ["--o" as string]: particle.opacity,
                        animationDelay: `${particle.delay}s`,
                      }}
                    />
                  ))}
                  <foreignObject x="-14" y={-petal.length * 0.55 - 14} width="28" height="28" className="nexus-svg-badge">
                    <div className="nexus-svg-badge-inner">
                      <Icon size={15} aria-hidden="true" />
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </g>

          <g className="nexus-svg-rays" aria-hidden="true">
            {rays.map((ray, index) => (
              <line
                key={index}
                x1="300"
                y1="300"
                x2={ray.x2}
                y2={ray.y2}
                stroke="url(#nexus-ray-fill)"
                strokeWidth={ray.long ? 1.1 : 0.6}
                style={{ animationDelay: `${ray.delay}s` }}
              />
            ))}
          </g>

          <g className="nexus-svg-core" aria-hidden="true">
            <circle cx="300" cy="300" r="74" />
            <circle cx="300" cy="300" r="42" fill="url(#nexus-core-fill)" />
            <circle cx="300" cy="300" r="7" />
          </g>
        </svg>

        <div className="nexus-svg-core-label">
          <strong>NEXUS CORE</strong>
          <small>AI POWERED</small>
          <em>ONLINE</em>
        </div>
      </div>
    </div>
  );
}
