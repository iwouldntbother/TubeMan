// 
// BABYLON JS
// 

const canvas = document.getElementById("mainCanvas")
const engine = new BABYLON.Engine(canvas, true);

function createScene() {

    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0.73, 0.89, 0.96);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 2, new BABYLON.Vector3(0, 0, 0), scene);
    camera.useAutoRotationBehavior = true;
    camera.autoRotationBehavior.idleRotationSpeed = 0.7;
    camera.minZ = 0.1;
    camera.lowerRadiusLimit = camera.upperRadiusLimit = camera.radius;
    camera.attachControl(canvas, true);
    
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    
    var gl = new BABYLON.GlowLayer("glow", scene);
    gl.intensity = 1.5;

    BABYLON.SceneLoader.ImportMesh("", "./models/", "Gen.glb", scene, function(scene) {
        setTimeout(function() {
        }, 1000)
    })

    if (window.matchMedia("(max-width: 700px)").matches) {
        camera.detachControl()
    }

    return scene;

}

const scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});




const canvasTwo = document.getElementById("secondCanvas")
const engineTwo = new BABYLON.Engine(canvasTwo, true);

function createSceneTwo() {

    const sceneTwo = new BABYLON.Scene(engineTwo);
    sceneTwo.clearColor = new BABYLON.Color3(0.73, 0.89, 0.96);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 2, new BABYLON.Vector3(0, 0, 0), sceneTwo);
    camera.useAutoRotationBehavior = true;
    camera.autoRotationBehavior.idleRotationSpeed = 0.7;
    camera.minZ = 0.1;
    camera.lowerRadiusLimit = camera.upperRadiusLimit = camera.radius;
    camera.attachControl(canvasTwo, true);
    
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), sceneTwo);
    
    var gl = new BABYLON.GlowLayer("glow", sceneTwo);
    gl.intensity = 1.5;

    BABYLON.SceneLoader.ImportMesh("", "./models/", "petrol.glb", sceneTwo, function(sceneTwo) {
        setTimeout(function() {
        }, 1000)
    })

    if (window.matchMedia("(max-width: 700px)").matches) {
        camera.detachControl()
    }

    return sceneTwo;

}

const sceneTwo = createSceneTwo();

engineTwo.runRenderLoop(function () {
    sceneTwo.render();
});

window.addEventListener("resize", function () {
    engineTwo.resize();
});