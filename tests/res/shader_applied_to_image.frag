#version 410

in vec2 _raw_uv;
in vec2 _uniform_uv;

uniform sampler2D _image1;
uniform sampler2D _image2;
uniform float     _aspect_ratio;

out vec4 _frag_color;

void main()
{
    vec2 guv = floor(_uniform_uv * 5.);
    if (int(guv.x + guv.y) % 2 == 0)
    {
        _frag_color = vec4(texture(_image1, _raw_uv).rgb, 1.);
    }
    else
    {
        _frag_color = vec4(texture(_image2, _raw_uv).rgb, 1.);
    }
}