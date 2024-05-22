(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{361:function(t,e,v){"use strict";v.r(e);var _=v(4),d=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("前一篇")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/Note_Godot/05.着色器学习（二） 内建变量.html"}},[t._v("05.着色器学习（二） 内建变量")])],1)]),t._v(" "),e("p",[t._v("参考地址：https://docs.godotengine.org/en/4.1/tutorials/shaders/shader_reference/shading_language.html")]),t._v(" "),e("p",[t._v("查找表（使用chatgpt辅助生成）")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("函数")]),t._v(" "),e("th",[t._v("描述")]),t._v(" "),e("th",[t._v("使用范例")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("radians")])]),t._v(" "),e("td",[t._v("将角度转换为弧度。")]),t._v(" "),e("td",[e("code",[t._v("vec_type angle_in_radians = radians(angle_in_degrees);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("degrees")])]),t._v(" "),e("td",[t._v("将弧度转换为角度。")]),t._v(" "),e("td",[e("code",[t._v("vec_type angle_in_degrees = degrees(angle_in_radians);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sin")])]),t._v(" "),e("td",[t._v("正弦。")]),t._v(" "),e("td",[e("code",[t._v("vec_type sine_value = sin(angle);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("cos")])]),t._v(" "),e("td",[t._v("余弦。")]),t._v(" "),e("td",[e("code",[t._v("vec_type cosine_value = cos(angle);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("tan")])]),t._v(" "),e("td",[t._v("正切。")]),t._v(" "),e("td",[e("code",[t._v("vec_type tangent_value = tan(angle);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("asin")])]),t._v(" "),e("td",[t._v("反正弦。")]),t._v(" "),e("td",[e("code",[t._v("vec_type angle = asin(value);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("acos")])]),t._v(" "),e("td",[t._v("反余弦。")]),t._v(" "),e("td",[e("code",[t._v("vec_type angle = acos(value);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("atan")])]),t._v(" "),e("td",[t._v("反正切。")]),t._v(" "),e("td",[e("code",[t._v("vec_type angle = atan(y_over_x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("atan")]),t._v(" (重载)")]),t._v(" "),e("td",[t._v("反正切。")]),t._v(" "),e("td",[e("code",[t._v("vec_type angle = atan(y, x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sinh")])]),t._v(" "),e("td",[t._v("双曲正弦。")]),t._v(" "),e("td",[e("code",[t._v("vec_type sinh_value = sinh(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("cosh")])]),t._v(" "),e("td",[t._v("双曲余弦。")]),t._v(" "),e("td",[e("code",[t._v("vec_type cosh_value = cosh(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("tanh")])]),t._v(" "),e("td",[t._v("双曲正切。")]),t._v(" "),e("td",[e("code",[t._v("vec_type tanh_value = tanh(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("asinh")])]),t._v(" "),e("td",[t._v("反双曲正弦。")]),t._v(" "),e("td",[e("code",[t._v("vec_type x = asinh(value);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("acosh")])]),t._v(" "),e("td",[t._v("反双曲余弦。")]),t._v(" "),e("td",[e("code",[t._v("vec_type x = acosh(value);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("atanh")])]),t._v(" "),e("td",[t._v("反双曲正切。")]),t._v(" "),e("td",[e("code",[t._v("vec_type x = atanh(value);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pow")])]),t._v(" "),e("td",[t._v("幂运算（如果 x < 0 或 x == 0 且 y <= 0，则结果未定义）。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = pow(base, exponent);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("exp")])]),t._v(" "),e("td",[t._v("Base-e 指数函数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = exp(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("exp2")])]),t._v(" "),e("td",[t._v("Base-2 指数函数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = exp2(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("log")])]),t._v(" "),e("td",[t._v("自然对数函数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = log(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("log2")])]),t._v(" "),e("td",[t._v("Base-2 对数函数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = log2(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sqrt")])]),t._v(" "),e("td",[t._v("平方根函数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = sqrt(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("inversesqrt")])]),t._v(" "),e("td",[t._v("平方根的倒数函数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = inversesqrt(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("abs")])]),t._v(" "),e("td",[t._v("绝对值函数（对于负数返回正值）。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = abs(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("abs")]),t._v(" (整数版本)")]),t._v(" "),e("td",[t._v("绝对值函数（对于负数返回正值）。")]),t._v(" "),e("td",[e("code",[t._v("ivec_type result = abs(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sign")])]),t._v(" "),e("td",[t._v("符号函数（正数返回1.0，负数返回-1.0，零返回0.0）。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = sign(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sign")]),t._v(" (整数版本)")]),t._v(" "),e("td",[t._v("符号函数（正数返回1，负数返回-1，零返回0）。")]),t._v(" "),e("td",[e("code",[t._v("ivec_type result = sign(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("floor")])]),t._v(" "),e("td",[t._v("向下取整函数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = floor(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("round")])]),t._v(" "),e("td",[t._v("四舍五入到最近的整数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = round(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("roundEven")])]),t._v(" "),e("td",[t._v("四舍五入到最近的偶数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = roundEven(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("trunc")])]),t._v(" "),e("td",[t._v("截断到整数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = trunc(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ceil")])]),t._v(" "),e("td",[t._v("向上取整函数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = ceil(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("fract")])]),t._v(" "),e("td",[t._v("返回小数部分（等同于 x - floor(x)）。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = fract(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("mod")])]),t._v(" "),e("td",[t._v("取模运算，返回除法余数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = mod(x, y);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("mod")]),t._v(" (单个浮点数)")]),t._v(" "),e("td",[t._v("取模运算，返回除法余数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = mod(x, y);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("modf")])]),t._v(" "),e("td",[t._v("返回小数部分和整数部分。")]),t._v(" "),e("td",[e("code",[t._v("vec_type fractional;")]),e("br"),e("code",[t._v("vec_type integral;")]),e("br"),e("code",[t._v("vec_type result = modf(x, integral);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("min")])]),t._v(" "),e("td",[t._v("返回两个值中的较小值。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = min(a, b);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("max")])]),t._v(" "),e("td",[t._v("返回两个值中的较大值。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = max(a, b);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("clamp")])]),t._v(" "),e("td",[t._v("将值限制在指定范围内。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = clamp(x, min_value, max_value);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("mix")]),t._v(" (浮点数版本)")]),t._v(" "),e("td",[t._v("线性插值，取值范围为 [a, b] 之间的值，c 为插值因子。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = mix(a, b, c);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("mix")]),t._v(" (向量版本)")]),t._v(" "),e("td",[t._v("线性插值，取值范围为 [a, b] 之间的值，c 为插值因子。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = mix(a, b, condition_vector);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("fma")])]),t._v(" "),e("td",[t._v("执行融合乘加操作：(a * b + c)。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = fma(a, b, c);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("step")])]),t._v(" "),e("td",[t._v("如果 b[i] < a[i]，返回 0.0，否则返回 1.0。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = step(a, b);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("step")]),t._v(" (浮点数版本)")]),t._v(" "),e("td",[t._v("如果 b < a，返回 0.0，否则返回 1.0。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = step(a, b);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("smoothstep")])]),t._v(" "),e("td",[t._v("Hermite 插值，根据 c 在 [a, b] 范围内的位置进行插值。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = smoothstep(a, b, c);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("isnan")])]),t._v(" "),e("td",[t._v("检查标量或向量组件是否为 NaN。")]),t._v(" "),e("td",[e("code",[t._v("bvec_type result = isnan(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("isinf")])]),t._v(" "),e("td",[t._v("检查标量或向量组件是否为 INF。")]),t._v(" "),e("td",[e("code",[t._v("bvec_type result = isinf(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("floatBitsToInt")])]),t._v(" "),e("td",[t._v("浮点到整数的位复制，无转换。")]),t._v(" "),e("td",[e("code",[t._v("ivec_type result = floatBitsToInt(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("floatBitsToUint")])]),t._v(" "),e("td",[t._v("浮点到无符号整数的位复制，无转换。")]),t._v(" "),e("td",[e("code",[t._v("uvec_type result = floatBitsToUint(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("intBitsToFloat")])]),t._v(" "),e("td",[t._v("整数到浮点的位复制，无转换。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = intBitsToFloat(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("uintBitsToFloat")])]),t._v(" "),e("td",[t._v("无符号整数到浮点的位复制，无转换。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = uintBitsToFloat(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("length")])]),t._v(" "),e("td",[t._v("计算向量的长度。")]),t._v(" "),e("td",[e("code",[t._v("float result = length(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("distance")])]),t._v(" "),e("td",[t._v("计算向量之间的距离，即 length(a - b)。")]),t._v(" "),e("td",[e("code",[t._v("float result = distance(a, b);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dot")])]),t._v(" "),e("td",[t._v("计算两个向量的点积。")]),t._v(" "),e("td",[e("code",[t._v("float result = dot(a, b);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("cross")])]),t._v(" "),e("td",[t._v("计算两个三维向量的叉积。")]),t._v(" "),e("td",[e("code",[t._v("vec3 result = cross(a, b);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("normalize")])]),t._v(" "),e("td",[t._v("将向量归一化为单位长度。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = normalize(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("reflect")])]),t._v(" "),e("td",[t._v("计算向量相对于法线的反射。")]),t._v(" "),e("td",[e("code",[t._v("vec3 result = reflect(I, N);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("refract")])]),t._v(" "),e("td",[t._v("计算向量相对于法线的折射。")]),t._v(" "),e("td",[e("code",[t._v("vec3 result = refract(I, N, eta);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("faceforward")])]),t._v(" "),e("td",[t._v("如果 dot(Nref, I) < 0，则返回 N，否则返回 -N。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = faceforward(N, I, Nref);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("matrixCompMult")])]),t._v(" "),e("td",[t._v("矩阵分量乘法。")]),t._v(" "),e("td",[e("code",[t._v("mat_type result = matrixCompMult(x, y);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("outerProduct")])]),t._v(" "),e("td",[t._v("外积矩阵。")]),t._v(" "),e("td",[e("code",[t._v("mat_type result = outerProduct(column, row);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("transpose")])]),t._v(" "),e("td",[t._v("转置矩阵。")]),t._v(" "),e("td",[e("code",[t._v("mat_type result = transpose(m);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("determinant")])]),t._v(" "),e("td",[t._v("计算矩阵的行列式。")]),t._v(" "),e("td",[e("code",[t._v("float result = determinant(m);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("inverse")])]),t._v(" "),e("td",[t._v("计算矩阵的逆矩阵。")]),t._v(" "),e("td",[e("code",[t._v("mat_type result = inverse(m);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("lessThan")])]),t._v(" "),e("td",[t._v("向量比较，如果 x[i] < y[i]，返回 true。")]),t._v(" "),e("td",[e("code",[t._v("bvec_type result = lessThan(x, y);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("greaterThan")])]),t._v(" "),e("td",[t._v("向量比较，如果 x[i] > y[i]，返回 true。")]),t._v(" "),e("td",[e("code",[t._v("bvec_type result = greaterThan(x, y);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("lessThanEqual")])]),t._v(" "),e("td",[t._v("向量比较，如果 x[i] <= y[i]，返回 true。")]),t._v(" "),e("td",[e("code",[t._v("bvec_type result = lessThanEqual(x, y);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("greaterThanEqual")])]),t._v(" "),e("td",[t._v("向量比较，如果 x[i] >= y[i]，返回 true。")]),t._v(" "),e("td",[e("code",[t._v("bvec_type result = greaterThanEqual(x, y);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("equal")])]),t._v(" "),e("td",[t._v("向量比较，如果 x[i] == y[i]，返回 true。")]),t._v(" "),e("td",[e("code",[t._v("bvec_type result = equal(x, y);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("notEqual")])]),t._v(" "),e("td",[t._v("向量比较，如果 x[i] != y[i]，返回 true。")]),t._v(" "),e("td",[e("code",[t._v("bvec_type result = notEqual(x, y);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("any")])]),t._v(" "),e("td",[t._v("如果向量的任何组件为 true，则返回 true。")]),t._v(" "),e("td",[e("code",[t._v("bool result = any(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("all")])]),t._v(" "),e("td",[t._v("如果向量的所有组件为 true，则返回 true。")]),t._v(" "),e("td",[e("code",[t._v("bool result = all(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("not")])]),t._v(" "),e("td",[t._v("反转布尔向量。")]),t._v(" "),e("td",[e("code",[t._v("bvec_type result = not(x);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureSize")])]),t._v(" "),e("td",[t._v("获取纹理的大小。")]),t._v(" "),e("td",[e("code",[t._v("ivec2 result = textureSize(s, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureSize")])]),t._v(" "),e("td",[t._v("获取纹理的大小。")]),t._v(" "),e("td",[e("code",[t._v("ivec3 result = textureSize(s, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureSize")])]),t._v(" "),e("td",[t._v("获取纹理的大小。")]),t._v(" "),e("td",[e("code",[t._v("ivec3 result = textureSize(s, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureSize")])]),t._v(" "),e("td",[t._v("获取纹理的大小。")]),t._v(" "),e("td",[e("code",[t._v("ivec2 result = textureSize(s, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureSize")])]),t._v(" "),e("td",[t._v("获取纹理的大小。")]),t._v(" "),e("td",[e("code",[t._v("ivec2 result = textureSize(s, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureQueryLod")])]),t._v(" "),e("td",[t._v("计算用于采样纹理的细节级别。")]),t._v(" "),e("td",[e("code",[t._v("vec2 result = textureQueryLod(s, p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureQueryLod")])]),t._v(" "),e("td",[t._v("计算用于采样纹理的细节级别。")]),t._v(" "),e("td",[e("code",[t._v("vec3 result = textureQueryLod(s, p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureQueryLod")])]),t._v(" "),e("td",[t._v("计算用于采样纹理的细节级别。")]),t._v(" "),e("td",[e("code",[t._v("vec2 result = textureQueryLod(s, p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureQueryLod")])]),t._v(" "),e("td",[t._v("计算用于采样纹理的细节级别。")]),t._v(" "),e("td",[e("code",[t._v("vec2 result = textureQueryLod(s, p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureQueryLevels")])]),t._v(" "),e("td",[t._v("获取纹理的可访问细节级别数。")]),t._v(" "),e("td",[e("code",[t._v("int result = textureQueryLevels(s);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureQueryLevels")])]),t._v(" "),e("td",[t._v("获取纹理的可访问细节级别数。")]),t._v(" "),e("td",[e("code",[t._v("int result = textureQueryLevels(s);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureQueryLevels")])]),t._v(" "),e("td",[t._v("获取纹理的可访问细节级别数。")]),t._v(" "),e("td",[e("code",[t._v("int result = textureQueryLevels(s);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureQueryLevels")])]),t._v(" "),e("td",[t._v("获取纹理的可访问细节级别数。")]),t._v(" "),e("td",[e("code",[t._v("int result = textureQueryLevels(s);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("texture")])]),t._v(" "),e("td",[t._v("执行纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = texture(s, p, bias);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("texture")])]),t._v(" "),e("td",[t._v("执行纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = texture(s, p, bias);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("texture")])]),t._v(" "),e("td",[t._v("执行纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = texture(s, p, bias);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("texture")])]),t._v(" "),e("td",[t._v("执行纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("vec4 result = texture(s, p, bias);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("texture")])]),t._v(" "),e("td",[t._v("执行纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("vec4 result = texture(s, p, bias);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureProj")])]),t._v(" "),e("td",[t._v("执行带投影的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureProj(s, p, bias);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureProj")])]),t._v(" "),e("td",[t._v("执行带投影的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureProj(s, p, bias);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureProj")])]),t._v(" "),e("td",[t._v("执行带投影的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureProj(s, p, bias);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureLod")])]),t._v(" "),e("td",[t._v("在自定义细节级别处执行纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureLod(s, p, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureLod")])]),t._v(" "),e("td",[t._v("在自定义细节级别处执行纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureLod(s, p, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureLod")])]),t._v(" "),e("td",[t._v("在自定义细节级别处执行纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureLod(s, p, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureLod")])]),t._v(" "),e("td",[t._v("在自定义细节级别处执行纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("vec4 result = textureLod(s, p, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureLod")])]),t._v(" "),e("td",[t._v("在自定义细节级别处执行纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("vec4 result = textureLod(s, p, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureProjLod")])]),t._v(" "),e("td",[t._v("带有投影和自定义细节级别的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureProjLod(s, p, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureProjLod")])]),t._v(" "),e("td",[t._v("带有投影和自定义细节级别的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureProjLod(s, p, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureProjLod")])]),t._v(" "),e("td",[t._v("带有投影和自定义细节级别的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureProjLod(s, p, lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureGrad")])]),t._v(" "),e("td",[t._v("带有显式梯度的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureGrad(s, p, dPdx, dPdy);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureGrad")])]),t._v(" "),e("td",[t._v("带有显式梯度的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureGrad(s, p, dPdx, dPdy);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureGrad")])]),t._v(" "),e("td",[t._v("带有显式梯度的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureGrad(s, p, dPdx, dPdy);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureGrad")])]),t._v(" "),e("td",[t._v("带有显式梯度的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("vec4 result = textureGrad(s, p, dPdx, dPdy);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureGrad")])]),t._v(" "),e("td",[t._v("带有显式梯度的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("vec4 result = textureGrad(s, p, dPdx, dPdy);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureProjGrad")])]),t._v(" "),e("td",[t._v("执行带有投影/LOD和显式梯度的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureProjGrad(s, p, dPdx, dPdy);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureProjGrad")])]),t._v(" "),e("td",[t._v("执行带有投影/LOD和显式梯度的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureProjGrad(s, p, dPdx, dPdy);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureProjGrad")])]),t._v(" "),e("td",[t._v("执行带有投影/LOD和显式梯度的纹理读取。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureProjGrad(s, p, dPdx, dPdy);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("texelFetch")])]),t._v(" "),e("td",[t._v("使用整数坐标提取单个纹理元素。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = texelFetch(s, ivec2(p), lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("texelFetch")])]),t._v(" "),e("td",[t._v("使用整数坐标提取单个纹理元素。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = texelFetch(s, ivec3(p), lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("texelFetch")])]),t._v(" "),e("td",[t._v("使用整数坐标提取单个纹理元素。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = texelFetch(s, ivec3(p), lod);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureGather")])]),t._v(" "),e("td",[t._v("从纹理中聚集四个纹素。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureGather(s, p, comps);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureGather")])]),t._v(" "),e("td",[t._v("从纹理中聚集四个纹素。")]),t._v(" "),e("td",[e("code",[t._v("gvec4_type result = textureGather(s, p, comps);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("textureGather")])]),t._v(" "),e("td",[t._v("从纹理中聚集四个纹素。")]),t._v(" "),e("td",[e("code",[t._v("vec4 result = textureGather(s, p, comps);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dFdx")])]),t._v(" "),e("td",[t._v("使用局部差分计算相对于 x 窗口坐标的导数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = dFdx(p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dFdxCoarse")])]),t._v(" "),e("td",[t._v("使用局部差分基于当前片元邻居的值计算相对于 x 窗口坐标的导数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = dFdxCoarse(p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dFdxFine")])]),t._v(" "),e("td",[t._v("使用局部差分基于当前片元及其相邻片元的值计算相对于 x 窗口坐标的导数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = dFdxFine(p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dFdy")])]),t._v(" "),e("td",[t._v("使用局部差分计算相对于 y 窗口坐标的导数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = dFdy(p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dFdyCoarse")])]),t._v(" "),e("td",[t._v("使用局部差分基于当前片元邻居的值计算相对于 y 窗口坐标的导数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = dFdyCoarse(p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dFdyFine")])]),t._v(" "),e("td",[t._v("使用局部差分基于当前片元及其相邻片元的值计算相对于 y 窗口坐标的导数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = dFdyFine(p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("fwidth")])]),t._v(" "),e("td",[t._v("x 和 y 方向上的绝对导数之和。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = fwidth(p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("fwidthCoarse")])]),t._v(" "),e("td",[t._v("x 和 y 方向上的绝对导数之和（基于粗糙差分）。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = fwidthCoarse(p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("fwidthFine")])]),t._v(" "),e("td",[t._v("x 和 y 方向上的绝对导数之和（基于精细差分）。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = fwidthFine(p);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("uint packHalf2x16 (vec2 v)")])]),t._v(" "),e("td",[t._v("将两个 32 位浮点数转换为 16 位并打包成一个 32 位无符号整数，反之亦然。")]),t._v(" "),e("td",[e("code",[t._v("uint packed = packHalf2x16(vec2(0.5, 0.75));")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("vec2 unpackHalf2x16 (uint v)")])]),t._v(" "),e("td",[t._v("将一个 32 位无符号整数解包成两个 16 位浮点数。")]),t._v(" "),e("td",[e("code",[t._v("vec2 unpacked = unpackHalf2x16(packed);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("uint packUnorm2x16 (vec2 v)")])]),t._v(" "),e("td",[t._v("将两个 32 位浮点数（限制在 0 到 1 范围内）转换为 16 位并打包成一个 32 位无符号整数，反之亦然。")]),t._v(" "),e("td",[e("code",[t._v("uint packed = packUnorm2x16(vec2(0.5, 0.75));")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("vec2 unpackUnorm2x16 (uint v)")])]),t._v(" "),e("td",[t._v("将一个 32 位无符号整数解包成两个 16 位浮点数（范围在 0 到 1 之间）。")]),t._v(" "),e("td",[e("code",[t._v("vec2 unpacked = unpackUnorm2x16(packed);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("uint packSnorm2x16 (vec2 v)")])]),t._v(" "),e("td",[t._v("将两个 32 位浮点数（限制在 -1 到 1 范围内）转换为 16 位并打包成一个 32 位无符号整数，反之亦然。")]),t._v(" "),e("td",[e("code",[t._v("uint packed = packSnorm2x16(vec2(0.5, -0.75));")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("vec2 unpackSnorm2x16 (uint v)")])]),t._v(" "),e("td",[t._v("将一个 32 位无符号整数解包成两个 16 位浮点数（范围在 -1 到 1 之间）。")]),t._v(" "),e("td",[e("code",[t._v("vec2 unpacked = unpackSnorm2x16(packed);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("uint packUnorm4x8 (vec4 v)")])]),t._v(" "),e("td",[t._v("将四个 32 位浮点数（限制在 0 到 1 范围内）转换为 8 位并打包成一个 32 位无符号整数，反之亦然。")]),t._v(" "),e("td",[e("code",[t._v("uint packed = packUnorm4x8(vec4(0.1, 0.5, 0.8, 1.0));")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("vec4 unpackUnorm4x8 (uint v)")])]),t._v(" "),e("td",[t._v("将一个 32 位无符号整数解包成四个 8 位浮点数（范围在 0 到 1 之间）。")]),t._v(" "),e("td",[e("code",[t._v("vec4 unpacked = unpackUnorm4x8(packed);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("uint packSnorm4x8 (vec4 v)")])]),t._v(" "),e("td",[t._v("将四个 32 位浮点数（限制在 -1 到 1 范围内）转换为 8 位并打包成一个 32 位无符号整数，反之亦然。")]),t._v(" "),e("td",[e("code",[t._v("uint packed = packSnorm4x8(vec4(0.1, -0.5, 0.8, 1.0));")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("vec4 unpackSnorm4x8 (uint v)")])]),t._v(" "),e("td",[t._v("将一个 32 位无符号整数解包成四个 8 位浮点数（范围在 -1 到 1 之间）。")]),t._v(" "),e("td",[e("code",[t._v("vec4 unpacked = unpackSnorm4x8(packed);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ivec_type bitfieldExtract (ivec_type value, int offset, int bits)")])]),t._v(" "),e("td",[t._v("从整数中提取一定范围的位。")]),t._v(" "),e("td",[e("code",[t._v("ivec_type extracted = bitfieldExtract(value, 2, 4);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ivec_type bitfieldInsert (ivec_type base, ivec_type insert, int offset, int bits)")])]),t._v(" "),e("td",[t._v("将一定范围的位插入到整数中。")]),t._v(" "),e("td",[e("code",[t._v("ivec_type result = bitfieldInsert(base, insert, 2, 4);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ivec_type bitfieldReverse (ivec_type value)")])]),t._v(" "),e("td",[t._v("反转整数中位的顺序。")]),t._v(" "),e("td",[e("code",[t._v("ivec_type reversed = bitfieldReverse(value);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ivec_type bitCount (ivec_type value)")])]),t._v(" "),e("td",[t._v("计算整数中值为 1 的位的数量。")]),t._v(" "),e("td",[e("code",[t._v("ivec_type count = bitCount(value);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ivec_type findLSB (ivec_type value)")])]),t._v(" "),e("td",[t._v("找到整数中最低有效位（值为 1）的索引。")]),t._v(" "),e("td",[e("code",[t._v("ivec_type lsb = findLSB(value);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ivec_type findMSB (ivec_type value)")])]),t._v(" "),e("td",[t._v("找到整数中最高有效位（值为 1）的索引。")]),t._v(" "),e("td",[e("code",[t._v("ivec_type msb = findMSB(value);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void imulExtended (ivec_type x, ivec_type y, out ivec_type msb, out ivec_type lsb)")])]),t._v(" "),e("td",[t._v("将两个 32 位数字相乘，生成一个 64 位结果。")]),t._v(" "),e("td",[e("code",[t._v("imulExtended(5, 3, msb, lsb);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void umulExtended (uvec_type x, uvec_type y, out uvec_type msb, out uvec_type lsb)")])]),t._v(" "),e("td",[t._v("将两个无符号整数相乘，生成一个 64 位结果。")]),t._v(" "),e("td",[e("code",[t._v("umulExtended(5u, 3u, msb, lsb);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("uvec_type uaddCarry (uvec_type x, uvec_type y, out uvec_type carry)")])]),t._v(" "),e("td",[t._v("将两个无符号整数相加，并生成进位。")]),t._v(" "),e("td",[e("code",[t._v("uvec_type sum = uaddCarry(5u, 3u, carry);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("uvec_type usubBorrow (uvec_type x, uvec_type y, out uvec_type borrow)")])]),t._v(" "),e("td",[t._v("将两个无符号整数相减，并生成借位。")]),t._v(" "),e("td",[e("code",[t._v("uvec_type difference = usubBorrow(5u, 3u, borrow);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("vec_type ldexp (vec_type x, out ivec_type exp)")])]),t._v(" "),e("td",[t._v("从值和指数中组装浮点数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type result = ldexp(0.75, exp);")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("vec_type frexp (vec_type x, out ivec_type exp)")])]),t._v(" "),e("td",[t._v("将浮点数拆分为尾数和整数指数。")]),t._v(" "),e("td",[e("code",[t._v("vec_type significand = frexp(0.75, exp);")])])])])])])}),[],!1,null,null,null);e.default=d.exports}}]);