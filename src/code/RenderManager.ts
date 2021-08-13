import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  IcosahedronGeometry,
  MeshNormalMaterial,
  Mesh,
  Clock,
} from 'three';

export class RenderManager {
  constructor() {
    this.RenderScene();
  }

  RenderScene(): void {
    const debugHUD = document.getElementById('debugHUD');
    const clock = new Clock(true);
    let deltaTime = 0;
    let time = 0.0;
    let framecount = 0;

    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const geometry = new IcosahedronGeometry();
    const material = new MeshNormalMaterial();
    const mesh = new Mesh(geometry, material);

    scene.add(mesh);

    camera.position.z = 5;

    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const animate = function () {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      deltaTime = clock.getDelta();
      getFPS(deltaTime);
      deltaTime = Math.min(deltaTime, 0.1); // avoid extreme acceleration during frame drops

      renderer.render(scene, camera);
    };

    animate();

    function getFPS(deltaTime: number) {
      framecount++;
      time += deltaTime;
      if (debugHUD != null) {
        debugHUD.innerText = 'FPS: ' + (1.0 / (time / framecount)).toFixed(1);
      }
      if (framecount > 100) {
        time = 0.0;
        framecount = 0;
      }
    }
  }
}
