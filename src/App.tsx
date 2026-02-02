import { Canvas } from '@react-three/fiber'
import { Scene } from './scene/Scene'
import { Nav } from './components/ui/Nav'

export default function App() {
  return (
    <>
      <Nav />
      <Canvas
        camera={{ fov: 50, near: 0.1, far: 100, position: [0, 1.5, 8] }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#0a0a0a']} />
        <Scene />
      </Canvas>
    </>
  )
}
