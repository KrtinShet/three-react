import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Button from "./Components/Button";

function Box(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  console.log("box");
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Cylinder(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  console.log("cylinder");
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[3, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Model(model) {
  switch (model) {
    case 0:
      return <Box />;
    case 1:
      return <Cylinder />;
  }
}

export default function App() {
  const [model, setModel] = useState(0);

  const btnPress = () => {
    if (model === 0) setModel(1);
    else setModel(0);
  };

  return (
    <div className="bdy">
      <Button
        text="Change Model"
        style={{
          position: "absolute",
          top: "75%",
          zIndex: 10,
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={btnPress}
      />

      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          {Model(model)}
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
