# Fast-DDS

## 数据发送实现

### publisher

#### PublisherImpl
- Publisher 接口的具体实现
- 创建并管理DataWriter对象
- 处理QoS策略
- 建立连接（匹配订阅者出现）

#### DataWriter
- 特定主题的数据发布者
- 序列化用户数据
- 发送数据给订阅者
- 生命周期管理（注册与反注册）
 
#### DataWriterImpl
- DataWriter接口的具体实现
- 处理数据序列化与网络通信
- 管理QoS策略与实例生命周期
 
#### DataWriterListener
- 定义回调接口（特定时间发生时）
- 用户定制事件处理（实现接口）
 
#### QoS
- 与Publisher和DataWriter相关的QoS策略实现
- 配置策略满足特定应用程序需求

## 数据接收实现

### subscriber

## 数据主题定义

### topic

## 实用程序函数和类

### utils

## 内置类型和协议实现

### built in

## 核心类和函数

### core
- 错误处理
- 内存管理
- 线程处理

## 域参与者实现

### domain

## 日志系统实现

### log