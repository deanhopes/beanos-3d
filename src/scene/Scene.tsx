import { Environment } from './Environment'
import { Camera } from './Camera'
import { Landing } from '../sections/Landing'
import { Projects } from '../sections/Projects'
import { About } from '../sections/About'

export function Scene() {
  return (
    <>
      <Camera />
      <Environment />
      <Landing />
      <Projects />
      <About />
    </>
  )
}
