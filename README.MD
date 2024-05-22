# vuepresswiki

## 前言

本文档由 vuepress 驱动， 使用的是 [voding](https://github.com/xugaoyi/vuepress-theme-vdoing) 主题

![Alt](https://repobeats.axiom.co/api/embed/95a0ec6ad74ae0162c0ab6081762f0e5047ecea4.svg "Repobeats analytics image")

## 博客地址
国内：

http://doc.beiklive.top

http://beiklive.top/vuepresswiki/

GitPage:

https://github.com/beiklive/vuepresswiki


## 主要目录结构

`beiklive` :  存放博客内容以及vdoing主题的配置

		`beiklive/.vuepress`:  vdoing 的配置都在里面

		`beiklive/_posts/随笔`: 随笔内容，不用加序号，属于博客类型，不用添加索引，只能在最近更新和归档里看到。

		 `0x.目录`：序号目录，影响生成页面的导航栏的内容

		 `Note_XXX`： Note目录， 存放系列文章  

`ob` : 存放与 博客内容无关的 obsidian 笔记，如流程图、模板等

`tools`: 存放自制的一些工具，辅助文章编写

		`tools/新文章生成器`：辅助程序，在命令行中选择路径后会按照 vdoing 规定的格式生成文件
