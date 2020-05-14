#ifdef GL_ES
	#ifndef GL_FRAGMENT_PRECISION_HIGH	// highp may not be defined
		#define highp mediump
	#endif
	precision highp float; // default precision needs to be defined
#endif

// input from vertex shader
in vec3 norm;
in vec2 tc;

// the only output variable
out vec4 fragColor;

uniform sampler2D	TEX;

void main()
{
	//if(TEX == null)
		//fragColor = vec4(norm,0);
	//else
	fragColor = texture(TEX, tc);
}