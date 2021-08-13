import { WebglDetector } from './code/WebglDetector';
import { RenderManager } from './code/RenderManager';

const WebglCheck = new WebglDetector();

if (WebglCheck.canRender) {
  new RenderManager();
}
