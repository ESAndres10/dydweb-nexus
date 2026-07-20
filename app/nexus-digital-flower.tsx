"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, type MutableRefObject } from "react";
import * as THREE from "three";

type FlowerNode = {
  id: string;
  label: string;
};

type NexusDigitalFlowerProps = {
  nodes: FlowerNode[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

function EnergyLine({ angle, radius, active }: { angle: number; radius: number; active: boolean }) {
  const material = useRef<THREE.MeshBasicMaterial>(null);
  const length = radius - 0.58;
  const middle = 0.58 + length / 2;

  useFrame(({ clock }) => {
    if (!material.current) return;
    material.current.opacity = active ? 0.82 + Math.sin(clock.elapsedTime * 4) * 0.16 : 0.22;
  });

  return (
    <mesh position={[Math.cos(angle) * middle, Math.sin(angle) * middle, -0.03]} rotation={[0, 0, angle - Math.PI / 2]}>
      <cylinderGeometry args={[active ? 0.018 : 0.01, active ? 0.018 : 0.01, length, 10]} />
      <meshBasicMaterial
        ref={material}
        color={active ? "#9ff7ff" : "#12c7e8"}
        transparent
        opacity={active ? 0.9 : 0.26}
      />
    </mesh>
  );
}

function Petal({
  index,
  total,
  active,
  open,
  onSelect,
}: {
  index: number;
  total: number;
  active: boolean;
  open: MutableRefObject<number>;
  onSelect: () => void;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const radius = 2.18;
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const color = active ? "#d8fbff" : index % 2 ? "#12c7e8" : "#0b4dff";

  useFrame(({ clock, pointer }) => {
    if (!mesh.current) return;
    const bloom = open.current;
    const breathe = 1 + Math.sin(clock.elapsedTime * 1.35 + index * 0.55) * 0.035;
    const magnet = active ? 1.16 : 1;
    const gravityX = pointer.x * 0.16;
    const gravityY = pointer.y * 0.12;
    const r = radius * bloom * magnet;

    mesh.current.position.set(Math.cos(angle) * r + gravityX, Math.sin(angle) * r + gravityY, active ? 0.22 : 0);
    mesh.current.rotation.z = angle;
    mesh.current.rotation.x = pointer.y * 0.18 + Math.sin(clock.elapsedTime + index) * 0.04;
    mesh.current.rotation.y = -pointer.x * 0.18;
    mesh.current.scale.set(0.52 * breathe * magnet, 1.25 * breathe * magnet, 0.16);
  });

  return (
    <mesh ref={mesh} onClick={onSelect} onPointerOver={onSelect}>
      <sphereGeometry args={[1, 40, 16]} />
      <meshPhysicalMaterial
        color={color}
        emissive={active ? "#12c7e8" : "#063e8f"}
        emissiveIntensity={active ? 1.75 : 0.55}
        roughness={0.2}
        metalness={0.35}
        transmission={0.25}
        thickness={0.8}
        transparent
        opacity={active ? 0.78 : 0.54}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function CircuitStem({ angle }: { angle: number }) {
  return (
    <mesh position={[Math.cos(angle) * 1.65, Math.sin(angle) * 1.65, 0]} rotation={[0, 0, angle - Math.PI / 2]}>
      <cylinderGeometry args={[0.006, 0.006, 3.1, 6]} />
      <meshBasicMaterial color="#12c7e8" transparent opacity={0.1} />
    </mesh>
  );
}

function CircuitFlowerSilhouette() {
  const ring = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ring.current) return;
    ring.current.rotation.z = Math.sin(clock.elapsedTime * 0.25) * 0.08;
  });

  return (
    <group ref={ring} position={[0, 0, -0.78]}>
      {Array.from({ length: 14 }).map((_, index) => {
        const angle = (index / 14) * Math.PI * 2;
        return <CircuitStem key={index} angle={angle} />;
      })}
    </group>
  );
}

function FlowerScene({ nodes, activeIndex, onSelect }: NexusDigitalFlowerProps) {
  const flower = useRef<THREE.Group>(null);
  const open = useRef(0.05);

  useEffect(() => {
    gsap.to(open, {
      current: 1,
      duration: 2.4,
      ease: "power3.out",
    });
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!flower.current) return;
    flower.current.rotation.z = clock.elapsedTime * 0.045;
    flower.current.rotation.x = pointer.y * 0.16;
    flower.current.rotation.y = pointer.x * 0.18;
    flower.current.position.y = Math.sin(clock.elapsedTime * 1.2) * 0.05;
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[0, 0.5, 4]} intensity={8} color="#12c7e8" />
      <pointLight position={[-3, 2, 3]} intensity={3} color="#d8e2ee" />
      <CircuitFlowerSilhouette />
      <group ref={flower}>
        {nodes.map((node, index) => {
          const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const active = index === activeIndex;
          return (
            <group key={node.id}>
              <EnergyLine angle={angle} radius={2.15} active={active} />
              <Petal
                index={index}
                total={nodes.length}
                active={active}
                open={open}
                onSelect={() => onSelect(index)}
              />
            </group>
          );
        })}
        <mesh>
          <sphereGeometry args={[0.62, 48, 28]} />
          <meshPhysicalMaterial
            color="#091a34"
            emissive="#12c7e8"
            emissiveIntensity={1.6}
            roughness={0.16}
            metalness={0.55}
            clearcoat={1}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.76, 0.028, 16, 96]} />
          <meshBasicMaterial color="#9ff7ff" transparent opacity={0.82} />
        </mesh>
        <mesh rotation={[Math.PI / 2.2, 0.6, 0.25]}>
          <torusGeometry args={[1.02, 0.012, 12, 120]} />
          <meshBasicMaterial color="#0b4dff" transparent opacity={0.5} />
        </mesh>
      </group>
    </>
  );
}

export function NexusDigitalFlower({ nodes, activeIndex, onSelect }: NexusDigitalFlowerProps) {
  return (
    <div className="nexus-flower-canvas">
      <Canvas
        camera={{ position: [0, 0, 6.6], fov: 44 }}
        dpr={[1, 1.35]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <FlowerScene nodes={nodes} activeIndex={activeIndex} onSelect={onSelect} />
      </Canvas>
      <div className="nexus-flower-label">
        <strong>NEXUS</strong>
        <span>DIGITAL FLOWER</span>
      </div>
    </div>
  );
}
