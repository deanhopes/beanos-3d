import { Float, Text } from '@react-three/drei'

export function Projects() {
  return (
    <group position={[12, 0, -3]}>
      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.2}>
        <Text
          fontSize={0.6}
          color="#fafafa"
          anchorX="center"
          anchorY="middle"
          position={[0, 2, 0]}
          letterSpacing={0.15}
        >
          PROJECTS
        </Text>
      </Float>

      {/* Placeholder cards */}
      {[-2, 0, 2].map((x, i) => (
        <mesh key={i} position={[x, 0.8, -1]}>
          <boxGeometry args={[1.4, 1, 0.05]} />
          <meshStandardMaterial color="#1a1a2e" emissive="#6366f1" emissiveIntensity={0.1} />
        </mesh>
      ))}
    </group>
  )
}
