#version 330 core

layout (location = 0) out vec4 fragColor;

in VS_OUT
{
  vec3 worldPos;
  vec3 normal;
}fs_in;

uniform vec4 color_ambient = vec4(0.1f, 0.2f, 0.5f, 1.0f);
uniform vec4 color_diffuse = vec4(0.2f, 0.3f, 0.8f, 1.0f);
uniform vec4 color_specular = vec4(0.0f);
uniform float shininess = 77.0f;

uniform vec3 lightPos = vec3(12.0f, 32.0f, 560.0f);

void main(void)
{
   vec3 lightDir = normalize(lightPos - fs_in.worldPos);
   vec3 normal = normalize(fs_in.normal);
   vec3 r = reflect( -lightDir, normal );
   vec3 eye = vec3(0.0f, 0.0f, 1.0f);
   float diffuse = max(0.0f, dot(normal, lightDir) );
   float specular = pow(max(0.0f, dot(eye, r)), shininess);
   
   fragColor = diffuse * color_diffuse + specular * color_specular + color_ambient;
}
 