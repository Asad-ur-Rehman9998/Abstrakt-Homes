import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function WindowFrame() {
  const groupRef = useRef<THREE.Group>(null);
  const glassRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (glassRef.current) {
      glassRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.02;
    }
  });

  const frameColor = '#c9a962';

  return (
    <group ref={groupRef}>
      {/* Outer frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 4, 0.15]} />
        <meshStandardMaterial color="#1a2332" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Frame accents - top */}
      <mesh position={[0, 2, 0.08]}>
        <boxGeometry args={[3.4, 0.12, 0.08]} />
        <meshStandardMaterial color={frameColor} metalness={0.9} roughness={0.1} />
      </mesh>
      {/* bottom */}
      <mesh position={[0, -2, 0.08]}>
        <boxGeometry args={[3.4, 0.12, 0.08]} />
        <meshStandardMaterial color={frameColor} metalness={0.9} roughness={0.1} />
      </mesh>
      {/* left */}
      <mesh position={[-1.55, 0, 0.08]}>
        <boxGeometry args={[0.12, 4.1, 0.08]} />
        <meshStandardMaterial color={frameColor} metalness={0.9} roughness={0.1} />
      </mesh>
      {/* right */}
      <mesh position={[1.55, 0, 0.08]}>
        <boxGeometry args={[0.12, 4.1, 0.08]} />
        <meshStandardMaterial color={frameColor} metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Center mullion */}
      <mesh position={[0, 0, 0.08]}>
        <boxGeometry args={[0.08, 3.8, 0.06]} />
        <meshStandardMaterial color={frameColor} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0, 0.08]}>
        <boxGeometry args={[2.9, 0.08, 0.06]} />
        <meshStandardMaterial color={frameColor} metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Glass panels */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh ref={glassRef} position={[-0.75, 0.95, 0.02]}>
          <planeGeometry args={[1.35, 1.75]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.2}
            chromaticAberration={0.02}
            anisotropy={0.3}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.1}
            color="#a8d4f0"
            opacity={0.85}
          />
        </mesh>
        <mesh position={[0.75, 0.95, 0.02]}>
          <planeGeometry args={[1.35, 1.75]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.2}
            chromaticAberration={0.02}
            anisotropy={0.3}
            color="#a8d4f0"
            opacity={0.85}
          />
        </mesh>
        <mesh position={[-0.75, -0.95, 0.02]}>
          <planeGeometry args={[1.35, 1.75]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.2}
            color="#b8e0f5"
            opacity={0.8}
          />
        </mesh>
        <mesh position={[0.75, -0.95, 0.02]}>
          <planeGeometry args={[1.35, 1.75]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.2}
            color="#b8e0f5"
            opacity={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

function Particles() {
  const count = 80;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#c9a962" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#c9a962" />
      <pointLight position={[0, 3, 4]} intensity={0.8} color="#a8d4f0" />
      <Environment preset="city" />
      <WindowFrame />
      <Particles />
    </Canvas>
  );
};

export default HeroScene;
