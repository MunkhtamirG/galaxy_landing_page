import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const points = [];
    for (let i = 0; i < 10000; i++) {
      const star = new THREE.Vector3();
      star.x = points.push(
        new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(2000),
          THREE.MathUtils.randFloatSpread(2000),
          THREE.MathUtils.randFloatSpread(2000)
        )
      );
      star.y = points.push(
        new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(2000),
          THREE.MathUtils.randFloatSpread(2000),
          THREE.MathUtils.randFloatSpread(2000)
        )
      );
      star.z = points.push(
        new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(2000),
          THREE.MathUtils.randFloatSpread(2000),
          THREE.MathUtils.randFloatSpread(2000)
        )
      );
    }

    const starsGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const starsMaterial = new THREE.PointsMaterial({
      color: 0x999999,
      size: [0.1, 24, 24],
    });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 5;

    const render = () => {
      requestAnimationFrame(render);
      starField.rotation.y += 0.0005;
      starField.rotation.z += 0.0007;
      starField.rotation.x += 0.0003;
      renderer.render(scene, camera);
    };
    render();
  }, []);

  return <canvas ref={canvasRef} className="fixed left-0 top-0 -z-10" />;
}

export default Stars;
