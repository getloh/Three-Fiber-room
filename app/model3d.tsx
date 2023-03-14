"use client"

import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, ScrollControls, Scroll } from '@react-three/drei'
import { RoomModel } from './RoomModel'

export default function Model3d()
{

    const test = useRef();

    useFrame((state, delta) =>
    {
        // console.log(test)
        // test.current.rotation.y += delta;
    })

    return (
        <>

            <ambientLight intensity={0.1} />
            <ScrollControls pages={3} damping={0.1}>
                {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
                <RoomModel ref={test} scale={2} position={[0, -1, 5]} />
                <Scroll>
                    {/* Canvas contents in here will scroll along */}
                    {/* <Foo position={[0, 0, 0]} />
                    <Foo position={[0, viewport.height, 0]} />
                    <Foo position={[0, viewport.height * 1, 0]} /> */}
                    {/* <RoundedBox
                        args={[1, 1, 1]}
                        radius={0.05}
                        smoothness={4}
                        ref={test}
                    /> */}

                </Scroll>
                <Scroll html>
                    {/* DOM contents in here will scroll along */}
                    <h1>html in here (optional)</h1>
                    <h1 style={{ top: '100vh' }}>second page</h1>
                    <h1 style={{ top: '200vh' }}>third page</h1>
                </Scroll>
            </ScrollControls>


        </>

    )
}