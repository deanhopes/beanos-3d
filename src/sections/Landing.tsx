import { Float, Text } from '@react-three/drei'

export function Landing() {
  return (
    <group position={[0, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Text
          fontSize={1.2}
          color="#fafafa"
          anchorX="center"
          anchorY="middle"
          position={[0, 1.5, 0]}
          letterSpacing={0.1}
        >
          BEANOS
        </Text>
        <Text
          fontSize={0.2}
          color="#a78bfa"
          anchorX="center"
          anchorY="middle"
          position={[0, 0.6, 0]}
          letterSpacing={0.15}
        >
          CREATIVE DEVELOPER
        </Text>
      </Float>

      {/* Ground reference */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#0a0a0a" transparent opacity={0.5} />
      </mesh>
    </group>
  )
}
