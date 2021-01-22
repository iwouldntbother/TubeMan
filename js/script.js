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

    // BABYLON.SceneLoader.ImportMesh("", "./models/", "Fan.glb", scene, function(scene) {
    //     document.getElementById("fadeOutContainer").style.opacity = 0;
    //     setTimeout(function() {
    //         // document.getElementById("fadeOutContainer").remove();
    //     }, 1000)
    // })

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

function changeMesh(meshName) {

    document.getElementById("fadeOutContainer").style.opacity = 1;
    document.getElementById("videoPlayer").style.opacity = 0;
    document.getElementById("video").pause();

    for (i = 0; i < scene.meshes.length; i++) {
        scene.meshes[i].dispose()
    }

    BABYLON.SceneLoader.ImportMesh("", "./models/", meshName+".glb", scene, function(scene) {
        document.getElementById("fadeOutContainer").style.opacity = 0;
        setTimeout(function() {
            // document.getElementById("fadeOutContainer").remove();
        }, 1000)
    })

}

function loadVideo() {

    for (i = 0; i < scene.meshes.length; i++) {
        scene.meshes[i].dispose()
    }

    document.getElementById("videoPlayer").style.opacity = 1;

}

changeMesh("Gen")