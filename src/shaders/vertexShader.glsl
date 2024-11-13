#include simplexNoise4d

uniform float time;
uniform float amplitude;

varying vec3 worldNormal;
varying vec3 eyeVector;

void main() {
    float wobble = simplexNoise4d(vec4(position, time * 0.5)) * 0.175;
    vec3 wobblePos = position + normal * wobble;

    vec4 worldPos = modelMatrix * vec4(wobblePos, 1.0);
    vec4 mvPosition = viewMatrix * worldPos;
    
    gl_Position = projectionMatrix * mvPosition;

    vec3 transformedNormal = normalMatrix * normal;
    worldNormal = normalize(transformedNormal);

    eyeVector = normalize(worldPos.xyz - cameraPosition);
}