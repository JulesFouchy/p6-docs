#version 410

in vec2       _raw_uv;
in vec2       _uniform_uv;
in vec2       _canvas_uv;
uniform float _blue;

out vec4 _frag_color;

void main()
{
    vec2 uv = _canvas_uv;
    // Grid
    _frag_color = vec4(vec3(ceil(uv * 5.) / 5., _blue), 1);
    // Disk around the origin
    _frag_color.xyz += 0.5 * smoothstep(0.101, 0.1, length(uv));
}