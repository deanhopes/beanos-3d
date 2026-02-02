import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import * as THREE from 'three'
import { useStore, type Zone } from '../store/useStore'

const ZONE_POSITIONS: Record<Zone, [number, number, number]> = {
  landing: [0, 1.5, 8],
  projects: [12, 1.5, 0],
  about: [-12, 1.5, 0],
}

const ZONE_TARGETS: Record<Zone, [number, number, number]> = {
  landing: [0, 0, 0],
  projects: [12, 0, -6],
  about: [-12, 0, -6],
}

export function Camera() {
  const posRef = useRef(new THREE.Vector3(...ZONE_POSITIONS.landing))
  const targetRef = useRef(new THREE.Vector3(...ZONE_TARGETS.landing))
  const currentZone = useStore((s) => s.currentZone)
  const setTransitioning = useStore((s) => s.setTransitioning)

  useFrame((state, delta) => {
    const goalPos = ZONE_POSITIONS[currentZone]
    const goalTarget = ZONE_TARGETS[currentZone]

    easing.damp3(posRef.current, goalPos, 0.4, delta)
    easing.damp3(targetRef.current, goalTarget, 0.4, delta)

    state.camera.position.copy(posRef.current)
    state.camera.lookAt(targetRef.current)

    const dist = posRef.current.distanceTo(new THREE.Vector3(...goalPos))
    setTransitioning(dist > 0.05)
  })

  return null
}

export { ZONE_POSITIONS, ZONE_TARGETS }
