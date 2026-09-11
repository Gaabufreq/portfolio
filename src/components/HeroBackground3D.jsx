import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center, MeshDistortMaterial } from '@react-three/drei';

const Floating3DLetterN = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Subtle continuous rotation
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2}>
      <Center>
        <Text3D
          ref={meshRef}
          // Public CDN Google font for 3D Geometry mesh
          font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
          size={2.8}
          height={0.6}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.08}
          bevelSize={0.04}
          bevelOffset={0}
          bevelSegments={5}
        >
          N
          <MeshDistortMaterial
            color="#00f0ff"
            attach="material"
            distort={0.25} // Liquid/glow waving distortion effect
            speed={2}
            roughness={0.1}
            wireframe={true} // High-tech futuristic cyberpunk wireframe
          />
        </Text3D>
      </Center>
    </Float>
  );
};

const HeroBackground3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} color="#7000ff" intensity={2} />
        <Floating3DLetterN />
      </Canvas>
    </div>
  );
};

export default HeroBackground3D;