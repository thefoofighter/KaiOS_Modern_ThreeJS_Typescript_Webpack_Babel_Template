# KaiOS Modern ThreeJS Typescript Webpack Babel Template

# Why?

I have a Nokia 8110 4G (banana phone) running KaiOS 2.5.1 which uses Firefox 48.0a2
unfortunately it seems there are no further updates for this model.

This version is limited to using Webgl 1 but is quite capable of rendering 3D content & games.

The last version of ThreeJS I could get working was 0.116 without transpiling.

With babel I can now use the latest ThreeJS library and all the fancy additions and features of modern Javascript.

# Features

- ThreeJS (for 3D graphics)
- Typescript (can be ripped out for those who like writing pure js)
- ESLint (code checking)
- Prettier (code formatting)
- Babel (transpiling)
- Webpack (bundling)

# Assumptions

Knowledge of the following:

- How to connect and upload a packaged app to a KaiOS device. See [here](https://developer.kaiostech.com/docs/getting-started/env-setup/os-env-setup)
- How to use npm/yarn to install dependencies ```npm ci``` 
- How to run the scripts from package.json ```npm run <script-name> ```

# Running Dev

The project uses webpack-dev-server which will watch for changes to your files and update the browser accordingly.
You will have to wait for webpack to finish building before it will be accessible at *localhost:8080*

run dev with:

```npm run start:dev```

dev will run from *<project_root>/dev/*

# Building Dist

Build with:

```npm run build:all```

This will build to the *<project_root>/dist/*

It is this directory that you will attempt to load onto a kaios device as it should have copied over a basic *manifest.webapp*

# Testing

I tend to use an older browser based around kaiOS 2.5.1 which is 48-50 
(according to the kaios dev blog v59 is the last compatible version.)

You can find the older versions [here](https://ftp.mozilla.org/pub/firefox/releases/)
or dev editions [here](https://ftp.mozilla.org/pub/devedition/releases/)

You can find adb helper binaries [here](https://ftp.mozilla.org/pub/labs/fxos-simulator/adb-helper/) and sources [here](https://github.com/mozilla/adbhelper) for WebIDE.
You will need a dev edition of firefox and set the following in firefox's `about:config`
- `xpinstall.signatures.required` should be set to `false`
- `extensions.legacy.enabled` should be set to `true`

Web server:
I use [Servez](https://github.com/greggman/servez) because it is a no fuss gui to launch a basic server.
I point it to the dist/ directory post build and run the older browser on the *localhost:8080* url

# References & Inspiration

- Bruno Simon and the informative [threejs-template-simple](https://github.com/brunosimon/threejs-template-simple) project
- Sekuta82 and the excellent [ScrollingTerrain_KaiOS](https://github.com/Sekuta82/ScrollingTerrain_KaiOS) project
- aakatev and the helpful [three-js-webpack](https://github.com/aakatev/three-js-webpack)