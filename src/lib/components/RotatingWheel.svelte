<script>
  import { onMount, onDestroy } from 'svelte';
  
  export let size = 50; // Default size in pixels
  export let rotationSpeed = 0.01; // Rotation speed multiplier
  
  import { browser } from '$app/environment';
  
  let canvas;
  let animationId;
  let scene, camera, renderer, torus, geometry, material;
  let handleResize;
  let jsLoaded = false;
  
  onMount(async () => {
    // Only run on client side
    if (!browser) return;
    
    jsLoaded = true;
    const THREE = await import('three');
    
    // Create scene
    scene = new THREE.Scene();
    
    // Create camera
    camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    if (typeof window !== 'undefined') {
      renderer.setPixelRatio(window.devicePixelRatio);
    }
    
    // Create torus (ring/wheel) geometry
    geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    
    // Create material with gradient-like colors (indigo to purple)
    material = new THREE.MeshStandardMaterial({
      color: 0x6366f1, // Indigo
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.2
    });
    
    torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);
    
    // Animation loop
    function animate() {
      animationId = requestAnimationFrame(animate);
      
      // Rotate the torus
      torus.rotation.x += rotationSpeed;
      torus.rotation.y += rotationSpeed * 0.7; // Slight variation for more interesting rotation
      
      renderer.render(scene, camera);
    }
    animate();
    
    // Handle resize
    handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
  });
  
  onDestroy(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    if (handleResize && typeof window !== 'undefined') {
      window.removeEventListener('resize', handleResize);
    }
    if (renderer) {
      renderer.dispose();
    }
    if (geometry) {
      geometry.dispose();
    }
    if (material) {
      material.dispose();
    }
  });
</script>

<div class="wheel-container" style="width: {size}px; height: {size}px;">
  <!-- CSS fallback wheel -->
  <div class="fallback-wheel" class:hidden={jsLoaded}></div>
  
  <!-- Three.js canvas -->
  <canvas
    bind:this={canvas}
    width={size}
    height={size}
    class="three-canvas"
    class:hidden={!jsLoaded}
    style="width: {size}px; height: {size}px;"
  ></canvas>
</div>

<style>
  .wheel-container {
    position: relative;
    display: inline-block;
  }
  
  .fallback-wheel {
    width: 100%;
    height: 100%;
    border: 4px solid #6366f1;
    border-radius: 50%;
    position: relative;
    animation: rotate 3s linear infinite;
  }
  
  .fallback-wheel::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    border: 3px solid #4f46e5;
    border-radius: 50%;
    opacity: 0.7;
  }
  
  .fallback-wheel::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    border: 2px solid #818cf8;
    border-radius: 50%;
    opacity: 0.5;
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .three-canvas {
    display: block;
  }
  
  .hidden {
    display: none;
  }
</style>

