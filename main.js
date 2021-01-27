//SNOWMAN
const canvas = document.querySelector('#canvas2D');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

//ground
ctx.strokeStyle = "#622209";
ctx.beginPath();
ctx.moveTo(width/17, height/1.095)
ctx.lineTo(width/1.08,height/1.095)
ctx.stroke();

//balls
ctx.strokeStyle = 'grey';
ctx.fillStyle = '#EDEDED'
ctx.beginPath();
ctx.arc(width / 2, height / 1.3, width / 7, 0, 2 * Math.PI, false);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(width/2, height/1.86, width/9, Math.PI/1.53, 2.35 * Math.PI, false);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(width/2, height/2.82, width/11, Math.PI/1.53, 2.35 * Math.PI, false);
ctx.stroke();
ctx.fill();

//bucket
ctx.fillStyle = "green";
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(width / 2.28, height / 3.5);
ctx.lineTo(width / 2.2, height / 7);
ctx.lineTo(width / 1.85, height / 7);
ctx.lineTo(width / 1.79, height / 3.5);
ctx.lineTo(width / 2.28, height / 3.5);
ctx.stroke();
ctx.fill();

//eyes
ctx.strokeStyle = "grey";
ctx.beginPath();
ctx.arc(width / 2.15, height / 3, width / 70, 0, 2 * Math.PI, false);
ctx.stroke();
ctx.beginPath();
ctx.arc(width / 1.87, height / 3, width / 70, 0, 2 * Math.PI, false);
ctx.stroke();

ctx.fillStyle = '#403843';
ctx.beginPath();
ctx.arc(width / 2.18, height / 2.95, width / 150, 0, 2 * Math.PI, false);
ctx.fill();

ctx.beginPath();
ctx.arc(width / 1.89, height / 2.95, width / 150, 0, 2 * Math.PI, false);
ctx.fill();

//nose
ctx.fillStyle = '#FF6A00'
ctx.beginPath();
ctx.moveTo(width/2.05, height/2.8)
ctx.lineTo(width / 2.2, height / 2.5)
ctx.lineTo(width / 1.95, height / 2.8)
ctx.lineTo(width/2.05, height/2.8)
ctx.fill();

//mouth
ctx.strokeStyle = "#980000";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.arc(width / 1.98, height / 2.75, width / 20, Math.PI / 1.45, 2 * Math.PI, true);
ctx.stroke();

//broom
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(width / 3.3, height / 1.095);
ctx.lineTo(width / 3.7, height / 3);

let count = 0;
for (let i = 0; i < 20; i++) {
  count += 6;
  ctx.lineTo(width / 3.7, height / 3);
  ctx.lineTo(width / 6 + count, height / 10);
}
ctx.stroke();

//hands
ctx.beginPath();
ctx.lineWidth = 4;

ctx.moveTo(width / 2.4, height / 2);
ctx.lineTo(width / 3.6, height / 2.2);
ctx.stroke();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.ellipse(width / 3.6, height / 2.2, 8, 3, Math.PI / 2, 0, 2 * Math.PI);
ctx.fill();

ctx.moveTo(width / 1.8, height / 2);
ctx.lineTo(width / 1.4, height / 2.2);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;

let countWidth = 0;
let countHeight = 0;
for (let i = 0; i < 5; i++) {
  countWidth += 0.01;
  countHeight += 0.08;
  ctx.lineTo(width / 1.41, height / 2.19);
  ctx.lineTo(width / (1.31 - countWidth), height / (2.5 - countHeight));
}
ctx.stroke();


/////////////////////////////////////////////////////////

const scene = new THREE.Scene();

const fov = 70;
const aspectRatio = window.innerWidth / window.innerHeight;
const near = 0.01;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
camera.position.z = 8;


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#FFFFB0');
document.body.append(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const geometry = new THREE.TorusGeometry( 3, 0.8, 5, 7 );
const material = new THREE.MeshPhongMaterial( { color: '#456554' } );
const torus = new THREE.Mesh(geometry, material);
scene.add( torus );

const light = new THREE.DirectionalLight('#CEFF00', 1);
light.position.set(3, 1, 2);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  
  torus.rotation.x += 0.005;
  torus.rotation.y += 0.005;
  torus.rotation.y += 0.005;
  
  controls.update();
}
animate();