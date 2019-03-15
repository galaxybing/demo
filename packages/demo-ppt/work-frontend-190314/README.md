# work-frontend-190314

## 人员面聊

- 部门业务范围介绍
  * 主干业务逻辑负责（手术刀）：国家数据填报、护理质控、考试业务、培训业务、规培流程、增值服务（职工满意度问卷、360评价）等
  * 通用业务代码共享：测试代码库、前端服务、组件库、逻辑演示库
  * 问题不由所属业务处理，而统一放在前端 review 处理？？先暴露、再处理

- 我们的目标：深度、共享、强交互体验？三个小礼物挑选，看方向

- 你认为现在的工作量从哪里来？有什么觉得哪些不应该到你手上？工作量饱和
- 你想，同谁一起做项目会更舒服？

***

## 研发制度

- 主干业务范围划分：
  * 管理员-护士-住院医师__操作考试-规培流程
  * 管理员-护士-住院医师_操作考试-规培流程
  * 患者-职工__课程-锦旗-鲜花-满意度问卷-护士宣教网页版
  * 政府管理机构__数据填报-护理质控产品
  * 管理系统模板__护理集团和317护运营管理
  * 静态化网站模板__项目官网-317护官网-中卫官网

- 端模块：
  * 后台管理系统
  * 多端统一，小程序、h5（微信、钉钉、WebView容器）
  * 公共库管理（组件库、演示模板库、前端单元测试库）

- 当前 51 有效（活动）项目：

nurse-training-common - 护士培训首页模块
nurse-training-course - 护士培训培训管理模块
nurse-training-exam - 护士培训考试管理模块
nurse-training-group - 护士培训分组管理模块
doctor-training-weapp - 住院（初级）医师规培范培训
nurse-exam-app - 护士培训 集中招聘 移动端应用项目

317hu-wechat-react - 患者微信应用
course-center-react - 课程中心
course-additional-services - 课程附加服务：智能推送，门诊宣教，宣教评估单等等
nurse-education-web - 护士宣教pc版项目
317hu-questionnaire-engine - 智能推送（前端）
longhua-knowledge-web - 宣教服务-知识库

nursing-sensitive-quality - 护理质控平台
beijing-nursing-assoc-backend - 北京质控中心项目（后台管理）
nurse-quality-h5 - 护士质控后h5项目
yunnan-nursing-app - 云南省护士质量控制中心


317hu-data-center - 数据中心
nation-data-report - 国家数据填报
nursing-sensitive-quality - 护理质控后台
yunnan-data-report - 云南省数据填报项目
yunnan-nursing-assoc - 云南省护理质量控制中心
mongolia-data-report - 内蒙古数据填报
beijing-data-report - 北京数据填报
qinghai-data-report - 青海省数据填报
data-report-template - 数据填报项目模版，各个省份的数据填报项目请从此项目拉取
317hu-data-center - 317护数据可视化（数据中心）

employee-satisfaction-paper - 职工满意度问卷
satisfaction-paper - 患者满意度问卷
employee-satisfaction-paper - 职工满意度问卷

beijing-nursing-association-backend - 北京护理学会管理（后台管理）
beijing-nursing-association-frontend - 北京护理学会管理（前台）
yunnan-nursing-assoc-backend - 云南护理分会（后台管理）
nursing-assoc-backend - 中国研究型医院学会护士分会（后台管理）
nursing-assoc-frontend - 中国研究型医院学会护士分会
longhua-operation-cms - 龙华运营管理（后台管理）
317hu-operation-cms - 317护运营管理后台
317hu-app-monitor - 日志回捞系统
317hu-boss-admin - 317护BOSS管理系统
317hu-privilege-web - 权限中心
317hu-userCenter-web - 用户中心
317hu-userCenter-web-ding - 用户中心（钉钉版本）
nurseinfo - 中卫后台管理系统

317hu-official-website - 317护官网
beijing-nursing-assoc - 北京质控中心项目（官网）
nation-data-front - 国家填报门户官网
317hu-login - 317护后台管理系统登陆模块
317hu-admin-cms - 项目后台管理登录模块
longhua-hospital-web - 龙华-医院（官网）
longhua-wechat-web - 龙华微信端(官网)

317hu-paid-services - 317护增值服务项目
aihui-patient-web - 爱汇患者app-web版
nurseinfo-app - 中卫护理信息管理研究院 web应用 移动端项目
research-nurse-app - 中研二期app内嵌的h5
