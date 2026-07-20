"use client";

import { useEffect, useRef, useState } from "react";
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

export function NexusDigitalFlower({ nodes, activeIndex, onSelect }: NexusDigitalFlowerProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rootRef.current?.style.setProperty("--tilt-x", `${(-y * 14).toFixed(2)}deg`);
    rootRef.current?.style.setProperty("--tilt-y", `${(x * 18).toFixed(2)}deg`);
    rootRef.current?.style.setProperty("--grav-x", `${(x * 22).toFixed(2)}px`);
    rootRef.current?.style.setProperty("--grav-y", `${(y * 18).toFixed(2)}px`);
  };

  const resetPointer = () => {
    rootRef.current?.style.setProperty("--tilt-x", "0deg");
    rootRef.current?.style.setProperty("--tilt-y", "0deg");
    rootRef.current?.style.setProperty("--grav-x", "0px");
    rootRef.current?.style.setProperty("--grav-y", "0px");
  };

  return (
    <div
      ref={rootRef}
      className={`nexus-flower-canvas ${open ? "is-open" : ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="nexus-circuit-flower" aria-hidden="true" />
      <div className="nexus-flower-depth">
        {nodes.map((node, index) => {
          const angle = (index / nodes.length) * 360 - 90;
          const active = index === activeIndex;
          const NodeIcon = node.icon;

          return (
            <button
              key={node.id}
              type="button"
              aria-label={node.label}
              onClick={() => onSelect(index)}
              onPointerEnter={() => onSelect(index)}
              className={`nexus-flower-petal ${active ? "is-active" : ""}`}
              style={{
                ["--angle" as string]: `${angle}deg`,
                ["--delay" as string]: `${index * 70}ms`,
              }}
            >
              <span className="nexus-flower-energy" />
              <span className="nexus-petal-shape" />
              <span className="nexus-petal-content">
                <NodeIcon size={28} aria-hidden="true" />
                <span>{node.label}</span>
              </span>
            </button>
          );
        })}

        <div className="nexus-flower-core">
          <span className="nexus-core-orbit orbit-a" />
          <span className="nexus-core-orbit orbit-b" />
          <strong>NEXUS CORE</strong>
          <small>Inteligencia Adaptativa</small>
          <em>ONLINE</em>
        </div>
      </div>
    </div>
  );
}
