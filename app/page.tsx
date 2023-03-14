"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import { Canvas } from '@react-three/fiber'
import Model3d from './model3d'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (


    <main className="h-full">
                  <Canvas>

      <Model3d />
      </Canvas>
    </main>

  )
}
