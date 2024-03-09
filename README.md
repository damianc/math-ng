# math-ng

Set of additional angular methods: _[hyperbolic] [arcus] cotangent/secant/cosecant_. These are accessible through `ng` namespace, for example:

```
Math.ng.cot(1)
```

List of methods:
- `cot()` - cotangent
- `sec()` - secant
- `csc()` - cosecant
- `acot()` - arcus cotangent
- `asec()` - arcus secant
- `acsc()` - arcus cosecant
- `coth()` - hyperbolic cotangent
- `sech()` - hyperbolic secant
- `csch()` - hyperbolic cosecant
- `acoth()` - hyperbolic arcus cotangent
- `asech()` - hyperbolic arcus secant
- `acsch()` - hyperbolic arcus cosecant

----

For even more methods consult [`math-ngx`](https://github.com/damianc/math-ngx/blob/master/README.md).

<!--

| Function | Domain | Range of values |
|--|--|--|
| `cot(x)` | $x \in \mathbb{R} \ \cap\ x \\% \frac{\pi}{2} \neq 0$ | $y \in \mathbb{R}$ |
| `sec(x)` | $x \in \mathbb{R} \ \cap\ x \\% \frac{\pi}{2} \neq 0$ | $y \in (-\infty;-1\rangle \ \cup\ \langle1;\infty)$ |
| `csc(x)` | $x \in \mathbb{R} \ \cap\ x \\% \pi \neq 0$ | $y \in (-\infty;-1\rangle \ \cup\ \langle1;\infty)$ |
| `acot(x)` | $x \in \mathbb{R}$ | $y \in \left( -\frac{\pi}{2}; \frac{\pi}{2} \right)$ |
| `asec(x)` | $x \in (-\infty;-1\rangle \ \cup\ \langle1;\infty)$ | $y \in \langle 0;\pi \rangle \ \cup\ (\pi;2\pi\rangle$ |
| `acsc(x)` | $x \in (-\infty;-1\rangle \ \cup\ \langle1;\infty)$ | $y \in (-\frac{\pi}{2};0\rangle \ \cup\ (0;\frac{\pi}{2})$ |
| `coth(x)` | $0 \neq x \in \mathbb{R}$ | $y \in (-\infty;1) \ \cup\ (1;\infty)$ |
| `sech(x)` | $x \in \mathbb{R}$ | $y \in (0;1\rangle$ |
| `csch(x)` | $0 \neq x \in \mathbb{R}$ | $y \notin \langle-1;1\rangle$ |
| `acoth(x)` | $x \in (-\infty;1) \ \cup\ (1;\infty)$ | $y \in \left( -\infty;-\frac{\pi}{2} \right) \ \cup\ \left( \frac{\pi}{2};\infty \right)$ |
| `asech(x)` | $x \in (0;1\rangle$ | $y \in \langle0;\infty)$ |
| `acsch(x)` | $x \neq 0$ | $y \in \mathbb{R}$ |

## Overview of Built-ins

The methods above enriches the list od built-in ones listed below.

| Function | Domain | Range of values |
|--|--|--|
| `sin(x)` | $x \in \mathbb{R}$ | $y \in \langle-1;1\rangle$ |
| `cos(x)` | $x \in \mathbb{R}$ | $y \in \langle-1;1\rangle$ |
| `tan(x)` | $x \in \mathbb{R} \ \cap\ x \\% \frac{\pi}{2} \neq 0$ | $y \in \mathbb{R}$ |
| `asin(x)` | $x \in \langle-1;1\rangle$ | $y \in \langle -\frac{\pi}{2};\frac{\pi}{2} \rangle$ |
| `acos(x)` | $x \in \langle-1;1\rangle$ | $y \in \langle0;\pi\rangle$ |
| `atan(x)` | $x \in \mathbb{R}$ | $y \in \left( -\frac{\pi}{2};\frac{\pi}{2} \right)$ |
| `sinh(x)` | $x \in \mathbb{R}$ | $y \in \mathbb{R}$ |
| `cosh(x)` | $x \in \mathbb{R}$ | $y \geq 1$ |
| `tanh(x)` | $x \in \mathbb{R}$ | $y \in (-1;1)$ |
| `asinh(x)` | $x \in \mathbb{R}$ | $y \in \mathbb{R}$ |
| `acosh(x)` | $x \geq 1$ | $y \geq 0$ |
| `atanh(x)` | $x \in (-1;1)$ | $y \in \mathbb{R}$ |

-->
