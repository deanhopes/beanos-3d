import { Sparkles, Stars } from '@react-three/drei'

export function Environment() {
  return (
    <>
      <fog attach="fog" args={['#0a0a0a', 10, 50]} />
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#6366f1" />
      <pointLight position={[10, 5, -10]} intensity={0.3} color="#8b5cf6" />
      <Stars radius={80} depth={60} count={2000} factor={3} saturation={0} fade speed={0.5} />
      <Sparkles count={100} scale={20} size={1.5} speed={0.3} opacity={0.4} color="#a78bfa" />
    </>
  )
}
