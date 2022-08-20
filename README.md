# 南科大开源协会网站
本仓库是南科大开源协会的网站仓库，请查阅本站点的协议文件，并在协议许可下使用本仓库。
## 使用原则
仓库采用标准的github开源工作流，您的提交都会经过审核后合并到主分支，所以请保证您的提交均采用pull requests的模式提交，我们建议您的开发使用dev分支，从而方便分割开发流程。

您在开发时应该注意您应该遵从开发规范，编写时请参考template文件夹中的文件编写样式。

注意一点，对于图片，虽然我们提供了资源文件存储assert，但是我们非常建议您尽可能采用网络链接的形式来将图片导入，从而降低图片占用本仓库的空间。
## 编译测试
确保您的本地环境有Ruby且保证版本在3.x及以上

值得注意的是，您的pull request应该保证编译测试通过，否则我们将不会合并到仓库之中。

初次使用运行如下命令，安装bundler和jekyll
```shell
gem install bundler jekyll
```
运行命令安装依赖
```shell
bundle install --path=vendor/bundle
```
本地编译并运行预览使用
```shell
bundle exec jekyll serve
```
编译生成文件
```shell
bundle exec jekyll serve
```
## 网站源代码结构
```text
├─.github
│  ├─ISSUE_TEMPLATE     issue提交模板
│  └─workflows          github工作流
├─assets                资源文件
│  ├─css
│  └─images             放图片资源
├─template              网站模板
├─_data                 站点配置
├─_ideas                创意工坊目录
│  └─2022               按时间排序
├─_includes             布局设计
├─_layouts              布局设计
├─_news                 新闻板块
│  └─2022
├─_pages                网站中的网页内容
│  └─index
├─_plugins              引入的插件
├─_project              开源项目内容
│  ├─c                  按语言分类
│  ├─cpp
│  ├─csharp
│  ├─frontend
│  ├─go
└─ └─java
```
## 鸣谢
部分仓库的代码参考了中科大Linux用户协会的官网设计，在此感谢相关同学。

网站使用了Jekyll和Minimal Mistake主题，感谢相关设计者。