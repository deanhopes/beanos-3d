import { Float, Text } from '@react-three/drei'

export function About() {
  return (
    <group position={[-12, 0, -3]}>
      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.2}>
        <Text
          fontSize={0.6}
          color="#fafafa"
          anchorX="center"
          anchorY="middle"
          position={[0, 2, 0]}
          letterSpacing={0.15}
        >
          ABOUT
        </Text>
      </Float>

      {/* Placeholder bio area */}
      <mesh position={[0, 0.8, -1]}>
        <planeGeometry args={[4, 2]} />
        <meshStandardMaterial color="#1a1a2e" emissive="#8b5cf6" emissiveIntensity={0.05} transparent opacity={0.6} />
      </mesh>
    </group>
  )
}
