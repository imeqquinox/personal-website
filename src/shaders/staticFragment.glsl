// uniform float time; 
// varying vec2 vUv; 

// void main() {
//   float noise = fract(sin(dot(vUv * 10.0 + time, vec2(12.9898, 78.233))) * 43758.5453);
//   vec3 color = mix(vec3(0.0, 0.0, 1.0), vec3(1.0, 0.0, 0.0), noise);
//   gl_FragColor = vec4(color, 1.0);
// }
uniform float time;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  // Simulate frosted glass effect using noise
  float noise = fract(sin(dot(vUv * 10.0 + time * 0.5, vec2(12.9898, 78.233))) * 43758.5453);
  noise = noise * 0.5 + 0.5;

  // Simulate the look of frosted glass
  vec3 glassColor = vec3(0.8, 0.9, 1.0);
  vec3 frostedColor = mix(glassColor, vec3(1.0), noise * 0.2);

  // Lighting effect
  float lighting = dot(vNormal, vec3(0.0, 0.0, 1.0)) * 0.5 + 0.5;
  vec3 litColor = frostedColor * lighting;

  // Final color
  gl_FragColor = vec4(litColor, 0.5);
}
