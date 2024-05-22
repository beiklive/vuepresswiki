(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{354:function(t,a,s){"use strict";s.r(a);var v=s(4),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("前一篇")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/Note_Godot/02.着色器 - 图片像素化.html"}},[t._v("02.着色器 - 图片像素化")])],1)]),t._v(" "),a("p",[t._v("参考地址：https://docs.godotengine.org/en/4.1/tutorials/shaders/shader_reference/shading_language.html")]),t._v(" "),a("h1",{attrs:{id:"什么是着色器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是着色器"}},[t._v("#")]),t._v(" 什么是着色器")]),t._v(" "),a("p",[t._v("着色器（Shader）是一种在图形处理单元（GPU）上运行的特殊程序。他们最初使用来为 3D 场景着色的，不过现在能做的事情就更多了。你可以用它们来控制引擎在屏幕上绘制几何体以及像素的方式，可以用来实现各种特效。")]),t._v(" "),a("p",[t._v("类似 Godot 的现代渲染引擎都会用着色器来执行所有绘制操作：图形卡可以并行执行成千上万条指令，可以达到惊人的渲染速度。")]),t._v(" "),a("p",[t._v("因为天生就是并行的，所以着色器处理信息的方式与普通的程序有所不同。着色器代码是单独针对顶点或像素执行的。你也无法在帧与帧之间存储数据。因此，使用着色器时，你需要使用与其他编程语言不同的编码和思考方式。")]),t._v(" "),a("h1",{attrs:{id:"godot着色器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#godot着色器"}},[t._v("#")]),t._v(" Godot着色器")]),t._v(" "),a("p",[t._v("在Godot中，着色器由称为“处理器函数”的主要函数组成。处理器函数是着色器进入程序的入口点。有七个不同的处理器函数。")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("vertex()函数：")]),t._v(" 遍历网格中的所有顶点，设置它们的位置和一些其他顶点相关的变量。用于canvas_item着色器和spatial着色器。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("fragment()函数：")]),t._v(" 对网格覆盖的每个像素运行。它使用vertex()函数输出的值，在顶点之间进行插值。用于canvas_item着色器和spatial着色器。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("light()函数：")]),t._v(" 对每个像素和每个光源运行。它使用fragment()函数和之前运行的light()函数的变量。用于canvas_item着色器和spatial着色器。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("start()函数：")]),t._v(" 对粒子系统中的每个粒子运行一次，当粒子首次生成时。用于粒子着色器。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("process()函数：")]),t._v(" 对粒子系统中的每个粒子在每一帧运行。用于粒子着色器。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("sky()函数：")]),t._v(" 对辐射立方体贴图中的每个像素在需要更新辐射立方体贴图时运行，并对当前屏幕上的每个像素运行。用于天空着色器。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("fog()函数：")]),t._v(" 对体积雾froxel缓冲区中与雾体积相交的每个froxel运行。由雾着色器使用。")])])]),t._v(" "),a("p",[t._v("在这些处理器函数中，你可以实现各种效果，从顶点变换到像素处理，再到光照、粒子系统和天空效果。这使得在Godot中编写复杂的图形效果变得相对简单。")]),t._v(" "),a("h1",{attrs:{id:"着色器类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#着色器类型"}},[t._v("#")]),t._v(" 着色器类型")]),t._v(" "),a("p",[t._v("有以下类型可用：")]),t._v(" "),a("p",[t._v("用于 3D 渲染的 spatial。")]),t._v(" "),a("p",[t._v("用于 2D 渲染的 canvas_item。")]),t._v(" "),a("p",[t._v("用于粒子系统的 particles。")]),t._v(" "),a("p",[t._v("sky to render Skies.")]),t._v(" "),a("p",[t._v("fog to render FogVolumes")]),t._v(" "),a("p",[t._v("在 Godot 中，所有的着色器都需要在第一行指定它们的类型，类似这样：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("shader_type spatial;\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"顶点处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顶点处理器"}},[t._v("#")]),t._v(" 顶点处理器")]),t._v(" "),a("p",[t._v("在 spatial 和 canvas_item 着色器中，每个顶点都会调用 "),a("code",[t._v("vertex()")]),t._v(" 处理函数，而在 particles 着色器中则会为每个粒子调用一次。")]),t._v(" "),a("p",[t._v("在你的世界中，几何体的每个顶点都具有位置、颜色等属性。"),a("code",[t._v("vertex()")]),t._v(" 函数用于修改这些值，并将其传递给片段函数。你还可以使用 "),a("code",[t._v("varying")]),t._v(" 关键字将额外的数据传递到片段着色器。")]),t._v(" "),a("p",[t._v("默认情况下，Godot会为你执行顶点信息的变换，将几何体投影到屏幕上。你也可以使用渲染模式自行变换数据，有关示例，请参阅 Spatial 着色器文档。")]),t._v(" "),a("h2",{attrs:{id:"片段处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#片段处理器"}},[t._v("#")]),t._v(" 片段处理器")]),t._v(" "),a("p",[a("code",[t._v("fragment()")]),t._v(" 处理函数用于为每个像素设置 Godot 材质参数。这段代码在对象或图元绘制的每个可见像素上运行。它仅在 spatial、canvas_item 和 sky 着色器中可用。")]),t._v(" "),a("p",[t._v("片段函数的标准用途是设置用于计算光照的材质属性。例如，你可以为 "),a("code",[t._v("ROUGHNESS")]),t._v("、"),a("code",[t._v("RIM")]),t._v("、"),a("code",[t._v("TRANSMISSION")]),t._v(" 等设置值，告诉光照函数如何处理相应的片段。这样可以控制复杂的着色管线，而无需用户编写大量代码。如果你不需要这一内置功能，可以忽略它，自行编写光照处理函数，Godot会进行优化。")]),t._v(" "),a("h2",{attrs:{id:"光照处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#光照处理器"}},[t._v("#")]),t._v(" 光照处理器")]),t._v(" "),a("p",[a("code",[t._v("light()")]),t._v(" 处理器也会在每个像素上运行，同时还会在影响对象的每个灯光上运行。如果没有灯光影响对象，则不会执行。它通常用于在 "),a("code",[t._v("fragment()")]),t._v(" 函数中进行材质属性设置时执行。")]),t._v(" "),a("p",[a("code",[t._v("light()")]),t._v(" 处理器在2D和3D中的工作方式不同；有关每种工作方式的详细描述，请参阅相应的 CanvasItem 着色器 和 Spatial 着色器文档。")]),t._v(" "),a("h1",{attrs:{id:"渲染模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染模式"}},[t._v("#")]),t._v(" 渲染模式")]),t._v(" "),a("p",[t._v("可以在着色器的第二行，也就是在着色器类型之后，指定渲染模式，类似这样：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("shader_type spatial;\nrender_mode unshaded, cull_disabled;\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("渲染模式会修改 Godot 应用着色器的方式。例如，"),a("code",[t._v("unshaded")]),t._v(" 模式会让引擎跳过内置的光线处理器函数。")])])}),[],!1,null,null,null);a.default=_.exports}}]);