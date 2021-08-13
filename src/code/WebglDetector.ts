import { WEBGL } from 'three/examples/jsm/WebGL';

export class WebglDetector {
  public canRender: boolean;

  constructor() {
    this.canRender = false;
    this.CheckWebglExists();
  }

  CheckWebglExists(): void {
    if (WEBGL.isWebGLAvailable()) {
      console.log('WebGL 1 works!');
      this.canRender = true;
    } else {
      console.log('WebGL 1 failed to load!');
    }

    if (WEBGL.isWebGL2Available()) {
      console.log('WebGL 2 works!');
      this.canRender = true;
    } else {
      console.log('WebGL 2 failed to load!');
    }
  }
}
