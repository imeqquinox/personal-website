uniform float time; 
varying vec2 vUv; 

void main() {
  float noise = fract(sin(dot(vUv * 10.0 + time, vec2(12.9898, 78.233))) * 43758.5453);
  vec3 color = mix(vec3(0.0, 0.0, 1.0), vec3(1.0, 0.0, 0.0), noise);
  gl_FragColor = vec4(color, 1.0);
}