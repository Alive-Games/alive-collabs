import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
} from "@react-three/drei";

// 🚨 This is an example of the skeleton in three.js
export const Viewer = () => {
  const ref = useRef();

  return (
    <Canvas
      camera={{
        position: [100, 0, 0],
        fov: 50,
      }}
      frameloop="demand"
      gl={{
        antialias: true,
        autoClear: true,
        failIfMajorPerformanceCaveat: true,
      }}
    >
      <gridHelper />
      <OrbitControls
        enablePan
        enableZoom
        enableRotate
        enableDamping={false}
        camera={ref.current}
        makeDefault
      />
    </Canvas >
  );
};
