import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Button, Flex } from 'antd';
import * as THREE from 'three';
import styles from './WelcomePage.module.scss';

const Model: React.FC = () => {
    const { scene } = useGLTF('../models/panda.glb');
    return (
        <group rotation={[-Math.PI / -2, 0, 0]}>
            {scene.children.map((child) => {
                const mesh = child as THREE.Mesh;

                if (!mesh.geometry) return null;

                return (
                    <mesh key={child.uuid} geometry={mesh.geometry}>
                        <meshStandardMaterial
                            color="gray"
                            opacity={0.7}
                            transparent={true}
                        />
                        <lineSegments>
                            <edgesGeometry attach="geometry" args={[mesh.geometry]} />
                            <lineBasicMaterial attach="material" color="cyan" />
                        </lineSegments>
                    </mesh>
                );
            })}
        </group>
    );
};

const WelcomePage: React.FC = () => {
    const [buttonLoading, setButtonLoading] = useState(true);
    const [buttonText, setButtonText] = useState("Loading...");

    useEffect(() => {
        setTimeout(() => {
            setButtonLoading(false);
            setButtonText("Get Started");
        }, 2000)
    }, []);

    return (
        <>
            <div className={styles['model-container']}>
                <div className={styles.model}>
                    <Canvas
                        camera={{
                            fov: 32,
                        }}
                    >
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        <Model />
                        <OrbitControls />
                    </Canvas>
                </div>
            </div>
            <Flex justify='center'>
                <Button 
                    className={styles.button}
                    loading={buttonLoading}
                    style={{
                        backgroundColor: buttonLoading ? 'white' : '#1A1A1A',
                        color: buttonLoading ? 'black' : 'white',
                        border: buttonLoading ? '1px solid black' : 'none',
                    }}
                >
                        {buttonText}
                </Button>
            </Flex>
        </>
    );
};

export default WelcomePage;