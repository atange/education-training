# education-training
#   ` 模板 ` 教育培训

## 简介
本项目的一个教育培训服务APP。提供在线浏览机构信息、名师风采和课程预约订购等功能。

项目前端使用了 [` avm.js ` 多端开发技术](https://docs.apicloud.com/apicloud3?uzchannel=30) ，可同时编译为 ` Android `  &  ` iOS `   ` App ` 以及微信小程序；
后端使用 ` APICloud ` [数据云3.0](https://docs.apicloud.com/Cloud-API/sentosa?uzchannel=30) 云函数自定义接口。

### 效果图

![preview](docs/preview.jpg)

### 源码目录结构介绍

项目源码在本仓库的  ` widget ` 目录下。其中该目录下的文件结构如下：

~~~ js 
┌─component/                    // 项目公共组件目录
│  ├─img/                       // 组件公用素材
│  ├─a-card.stml                // [基础组件]卡片组件
│  ├─a-cell.stml                // [基础组件]单元格组件
│  ├─a-cell-group.stml          // [基础组件]单元格容器组件
│  ├─a-header.stml              // [基础组件]头部导航组件
│  ├─a-section.stml             // [基础组件]章节组件
│  ├─a-tab.stml                 // [基础组件]选项卡组件
│  ├─a-tabs.stml                // [基础组件]选项卡容器组件
│  ├─b-course.stml              // [业务组件]课程详情组件
│  ├─b-notice.stml              // [业务组件]提醒面板组件
│  ├─c-course-list.stml         // [组合组件]课程列表页
├─images/                       // 图片素材图标资源目录
├─pages/                        // 新版的AVM页面目录
│  ├─course-detail/
│  │  └─course-detail.stml      // 课程详情页
│  ├─course-list/
│  │  └─course-list.stml        // 课程列表页
│  ├─course-pay/
│  │  └─course-pay.stml         // 购买课程页
│  ├─course-preorder/
│  │  └─course-preorder.stml    // 预约课程页
│  ├─order-detail/
│  │  └─order-detail.stml       // 用户订单详情页
│  ├─order-list/
│  │  └─order-list.stml         // 用户订单列表页
│  ├─pay-result/
│  │  └─pay-result.stml         // 下单(支付)结果页
│  ├─play-video/
│  │  └─play-video.stml         // 视频播放页
│  ├─preorder-detail/
│  │  └─preorder-detail.stml    // 用户预约详情页
│  ├─preorder-list/
│  │  └─preorder-list.stml      // 用户预约列表页
│  ├─tab-home/
│  │  └─tab-home.stml           // tab页-0 入口主页
│  ├─tab-course/
│  │  └─tab-course.stml         // tab页-1 课程分类列表
│  ├─tab-user/
│  │  └─tab-user.stml           // tab页-2 用户主页
├─script/                       // JavaScript脚本目录
│  ├─UserManager.js             // 用户数据管理类
│  └─req.js                     // 项目请求交互文件
└─config.xml                    // 应用配置文件
~~~


### 使用步骤

1. 使用[APICloud Studio 3](https://www.apicloud.com/studio3?uzchannel=30) 作为开发工具。
2. 下载本源码。
3. 在开发工具中新建项目，并将本源码导入新建的项目中，注意更新 ` config.xml ` 中的 ` appid ` 为你项目的 ` appid ` 。
4. 使用 ` AppLoader ` 进行真机同步调试预览。
5. 或者提交项目源码，并为当前项目云编译自定义Loader进行真机同步调试预览。
6. [云编译](https://www.apicloud.com/appoverview?uzchannel=30) 生成 ` Android `  &  ` iOS `   ` App ` 以及微信小程序源码包。

### 联系我们

如果您在使用过程中遇到了问题，或者有更多的宝贵意见，欢迎到 ` APICloud ` 社区和 ` QQ ` 群与我们进行互动讨论。

官方技术交流群： ` 339762594 ` 

官方社区：[https://community.apicloud.com/](https://community.apicloud.com/?uzchannel=30)

### 其它

感谢关注本项目，如果觉得对您有帮助，希望给个  ` Star `  鼓励一下。

如需进一步了解技术细节和实现，请参阅  ` docs `  目录下的[《源码解析文档》](https://github.com/apicloudcom/education-training/tree/main/docs)。

## License

MIT © [APICloud](https://www.apicloud.com/?uzchannel=30)