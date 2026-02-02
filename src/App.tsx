import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function App() {
  return (
    <Canvas
      camera={{ fov: 50, near: 0.1, far: 100, position: [3, 3, 3] }}
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 2]}
    >
      <color attach="background" args={['#0a0a0a']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
      <gridHelper args={[10, 10, '#333', '#222']} />
      <OrbitControls />
    </Canvas>
  )
}
