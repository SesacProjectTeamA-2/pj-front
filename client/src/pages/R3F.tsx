import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Suspense } from 'react';
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, CameraControls } from '@react-three/drei';

const myWidth: number = window.innerWidth;
const Scene = () => {
    const fbx = useLoader(FBXLoader, '/asset/images/Power_up.fbx');
    return <primitive object={fbx} scale={5} />;
};

export default function R3F() {
    return (
        <>
            <Canvas
                style={{
                    width: '100%',
                    height: '70vh',
                    background: 'hotpink',
                }}
                camera={{ position: [myWidth / 2, 300, 400] }}
            >
                <CameraControls
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 0.5}
                />
                <ambientLight intensity={0.1} />
                <directionalLight color="#FFF" position={[0, 1, 0]} />

                <PerspectiveCamera
                    fov={40}
                    near={10}
                    far={1000}
                    position={[10, 0, 50]}
                />
                <group dispose={null}>
                    <Suspense fallback={null}>
                        <Scene />
                        <OrbitControls />
                    </Suspense>
                </group>
            </Canvas>
            <button>d</button>
        </>
    );
}
