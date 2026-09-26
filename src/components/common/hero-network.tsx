import { useEffect, useRef } from "react";

export function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (
      !canvas ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    let stopped = false;
    let frame = 0;
    let dispose = () => {};

    void import("three").then((THREE) => {
      if (stopped) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
      camera.position.z = 8;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setClearAlpha(0);

      const world = new THREE.Group();
      world.position.x = window.innerWidth < 768 ? 0 : 2.4;
      scene.add(world);

      const count = window.innerWidth < 768 ? 72 : 140;
      const basePositions = new Float32Array(count * 3);
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);
      for (let index = 0; index < count; index += 1) {
        const y = 1 - (index / Math.max(count - 1, 1)) * 2;
        const radius = Math.sqrt(Math.max(0, 1 - y * y));
        const angle = index * Math.PI * (3 - Math.sqrt(5));
        const shell = 2.2 + (index % 7) * 0.045;
        basePositions[index * 3] = Math.cos(angle) * radius * shell;
        basePositions[index * 3 + 1] = y * shell;
        basePositions[index * 3 + 2] = Math.sin(angle) * radius * shell;
      }
      positions.set(basePositions);

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3),
      );
      const styles = getComputedStyle(document.documentElement);
      const primary = styles.getPropertyValue("--three-primary").trim();
      const muted = styles.getPropertyValue("--three-muted").trim();
      const material = new THREE.PointsMaterial({
        color: new THREE.Color(primary),
        size: 0.065,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true,
        depthWrite: false,
      });
      const points = new THREE.Points(geometry, material);
      world.add(points);

      const hullGeometry = new THREE.IcosahedronGeometry(2.22, 2);
      const hullMaterial = new THREE.MeshBasicMaterial({
        color: muted,
        wireframe: true,
        transparent: true,
        opacity: 0.14,
      });
      const hull = new THREE.Mesh(hullGeometry, hullMaterial);
      world.add(hull);

      const coreGeometry = new THREE.IcosahedronGeometry(0.7, 1);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: primary,
        wireframe: true,
        transparent: true,
        opacity: 0.38,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      world.add(core);

      const pointer = new THREE.Vector2();
      const targetPointer = new THREE.Vector2();
      let impulse = 0;
      const onPointerMove = (event: PointerEvent) => {
        targetPointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        targetPointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };
      const onPointerDown = () => {
        impulse = 1;
      };
      const resize = () => {
        const parent = canvas.parentElement;
        if (!parent) return;
        const width = parent.clientWidth;
        const height = parent.clientHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
      };
      let previousTime = performance.now();
      const animate = (time: number) => {
        const delta = Math.min((time - previousTime) / 1000, 0.05);
        previousTime = time;
        const damping = Math.exp(-4.5 * delta);
        pointer.lerp(targetPointer, 1 - Math.exp(-7 * delta));
        impulse *= Math.exp(-3.5 * delta);

        const positionAttribute = geometry.attributes["position"];
        if (!positionAttribute) return;
        for (let index = 0; index < count; index += 1) {
          const offset = index * 3;
          const bx = basePositions[offset] ?? 0;
          const by = basePositions[offset + 1] ?? 0;
          const bz = basePositions[offset + 2] ?? 0;
          let vx = velocities[offset] ?? 0;
          let vy = velocities[offset + 1] ?? 0;
          let vz = velocities[offset + 2] ?? 0;
          let px = positions[offset] ?? 0;
          let py = positions[offset + 1] ?? 0;
          let pz = positions[offset + 2] ?? 0;
          const screenX = bx / 3.25 + (window.innerWidth < 768 ? 0 : 0.42);
          const screenY = by / 3.25;
          const dx = screenX - pointer.x;
          const dy = screenY - pointer.y;
          const distanceSq = dx * dx + dy * dy;
          const force = Math.max(0, 1 - distanceSq / 0.2);
          const wave = Math.sin(time * 0.003 + index * 0.7) * 0.018;
          vx =
            (vx +
              (bx - px) * 4.6 * delta +
              dx * force * 5.2 * delta +
              bx * impulse * 0.6 * delta) *
            damping;
          vy =
            (vy +
              (by - py) * 4.6 * delta +
              dy * force * 5.2 * delta +
              by * impulse * 0.6 * delta) *
            damping;
          vz =
            (vz + (bz + wave - pz) * 4.6 * delta + impulse * 1.2 * delta) *
            damping;
          px += vx;
          py += vy;
          pz += vz;
          velocities[offset] = vx;
          velocities[offset + 1] = vy;
          velocities[offset + 2] = vz;
          positions[offset] = px;
          positions[offset + 1] = py;
          positions[offset + 2] = pz;
        }
        positionAttribute.needsUpdate = true;

        world.rotation.y += delta * 0.11;
        world.rotation.x +=
          (-pointer.y * 0.16 - world.rotation.x) * (1 - Math.exp(-3 * delta));
        world.rotation.z +=
          (-pointer.x * 0.08 - world.rotation.z) * (1 - Math.exp(-3 * delta));
        core.rotation.x -= delta * 0.34;
        core.rotation.y += delta * 0.48;
        core.scale.setScalar(1 + impulse * 0.45);
        const scrollShift = Math.min(
          window.scrollY / Math.max(window.innerHeight, 1),
          1,
        );
        world.position.y = scrollShift * 0.65;
        renderer.render(scene, camera);
        frame = window.requestAnimationFrame(animate);
      };

      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerdown", onPointerDown, { passive: true });
      frame = window.requestAnimationFrame(animate);

      dispose = () => {
        window.cancelAnimationFrame(frame);
        window.removeEventListener("resize", resize);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerdown", onPointerDown);
        geometry.dispose();
        material.dispose();
        hullGeometry.dispose();
        hullMaterial.dispose();
        coreGeometry.dispose();
        coreMaterial.dispose();
        renderer.dispose();
      };
    });

    return () => {
      stopped = true;
      dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-network" aria-hidden="true" />;
}
