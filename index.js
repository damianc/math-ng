Math.ng = {
	cot: x => 1/Math.tan(x),
	sec: x => 1/Math.cos(x),
	csc: x => 1/Math.sin(x),
	
	acot: x => Math.atan(1/x),
	asec: x => Math.acos(1/x),
	acsc: x => Math.asin(1/x),
	
	coth: x => 1/Math.tanh(x),
	sech: x => 1/Math.cosh(x),
	csch: x => 1/Math.sinh(x),
	
	acoth: x => 0.5*Math.log(
		(x+1)/(x-1)
	),
	asech: x => Math.log(
		1/x+Math.sqrt(1/(x**2)-1)
	),
	acsch: x => Math.log(
		1/x+Math.sqrt(1/(x**2)+1)
	)
};
