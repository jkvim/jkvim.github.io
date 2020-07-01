---
title: "一个APP的诞生"
date: "2020-07-01"
---

经过一个多月的开发，第一个APP终于上线了，https://apps.apple.com/cn/app/id1519164968，

## 名
取名 One Hbait，意思是希望专注于养成一个习惯，APP 功能非常简单，但是还是花了不少时间，

## 学
一开始大概花了两周的时间学习 SwiftUI，从 [objccn](https://objccn.io/) 买了几本书看完了
《SwiftUI 与 Combine 编程》


## 原型和设计
一开始打算找些原型工具做个原型，但是画了几个页面之后，发现还是用纸和笔方便，效率提升 N 倍，使用
纸和笔很快就画完了原型，大概有以下几个页面

- Home
- Archive
- Setting
- Detail
- Game

## 编码
SwitfUI 果然很方便，基本上和 RN 的热更新差不多了，但是没有 RN 的 Inspector，还是有一点不
方便的。现在 SwiftUI 基本上一些通用的组件都有了，如果希望自己自定义，则可能需要对 UIKit 比较熟悉
才能比较方便做到，Apple 针对对 Swift 出了一个 Swift Package Manager，这个功能已经集成在 XCode
里面，不知道是不是国内网络的问题，感觉下载一个包花的时间还是挺久的，有待优化。

## 设计物料
由于自己不会设计，所以只能网上找现成的物料了，其中 [undraw](https://undraw.co/illustrations) 比较方便
还能自定义颜色，app icon 制作找了一个自动生成 logo 的网站，然后用 [appiconmaker](https://appiconmaker.co/)
生成所需要的 size。APP 需要有统一协调的 color set，幸好有[色彩](https://apps.apple.com/cn/app/id1439521846)
能帮助开发者选择合适的 color set。


## 准备上线
在上线之前需要自己在 Apple developer 中创建 APP ID，创建发布证书，然后在 appstore connect 创建 APP 等，参考了以下
两篇文章

- [详解iOS打包、发布与证书体系 - ThoughtWorks洞见](https://insights.thoughtworks.cn/ios-package-release/)
- [iOS App 上架 : 一步一腳印的新手教學和更新流程](https://www.appcoda.com.tw/ios-app-submission/)

## 上线审核
审核过程中被驳回了一次，用户选择了 Kid Category，但是 APP 并没有任何针对儿童内容，所以被驳回了，解决方法是取消选择
Kid Category，然后重新提交审核，第二天就审核通过了，审核通过后在 App store 并没有搜到，从网上找了一个解决方法是改
价格，然后再改回去。果然有效，过了几个小时之后就搜到了。

## 总结
上线之后，感觉整个人都放松了😌，只有自己在使用 😂，不知道怎么推广。可能之后会在一些社区推广一下，做了 i18n 之后就可以
再去国外等网站推广一下。在使用 SwiftUI 的过程中遇到一个大坑，`TextField` 这个组件在使用中文的9键输入法的时候有 bug，
前前后后试了用 `UITextField` `UITextView` 感觉都不太满意，从网上找的库也是，最后无奈地用回 `TextField`