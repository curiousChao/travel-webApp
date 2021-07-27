# travel

> A mobile web project width art-templete  


## 移动端旅游网站webapp页面
## 启动

# 安装依赖
npm install

# 本地端口启动
npm run start

# 打包
npm run build


## 组件
* login登录
* loginRegister注册
* index首页 
	* header 头部 
	* slider 幻灯片
	* nav 导航链接 
	* product 商品推荐 
	* backtop 返回顶部 
* destination目的地 
	* header 头部 
	* main 城市信息
	* tab main内部左侧标签栏
	* content main内部右侧商品列表
	* backtop 返回顶部
* details 
	* header 头部 
	* introduction 产品简介
	* management 预定流程
	* message 服务信息 
	* refund 退款信息

## 用到的功能和插件
* webpack
* art-template 使用模板引擎模块化开发
* 发送ajax请求
* swiper 轮播图插件
* 使用字体图标显示icon
* localstorage 自动缓存，刷新页面的时候已经选择的城市不发生改变
* loading加载：数据请求完成前使用loading组件，请求完成后替换loading组件
