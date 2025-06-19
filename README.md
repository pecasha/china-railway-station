# China Railway Station
> 中国铁路车站信息

## 支持环境
- Node.js >= 22
- Chrome >= 117

在更低版本中使用需要自行根据框架处理降级或polyfill
## 使用
### Script
```html
<script src="build/index.iife.js"></script>
<script>
    ChinaRailwayStation.getList();
</script>
```
### ES Module
安装依赖：
```shell
npm i china-railway-station
```
引用依赖：
```javascript
import { getList } from "china-railway-station";
getList();
```
### CommonJS
安装依赖：
```shell
npm i china-railway-station
```
引用依赖：
```javascript
const { getList } = require("china-railway-station");
getList();
```
## 调用方法
#### getList
获取车站全部列表
- 返回值：`Station[]`
#### getListCityGroup
获取车站全部列表（城市分组格式）
- 返回值：`Record<string, Station[]>`
#### getStation
模糊搜索车站
- 参数：

| 参数名 | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| keyword | `string` | 否 | - | 搜索关键词 |

- 返回值：`Station[]`
#### getStationByName
通过车站名获取车站信息
- 参数：

| 参数名 | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| name | `string` | 否 | - | 车站名 |

- 返回值：`Station | undefined`
#### getStationByTelecode
通过电报码获取车站信息
- 参数：

| 参数名 | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| telecode | `string` | 否 | - | 电报码 |

- 返回值：`Station | undefined`
#### getStationByPinyinCode
通过拼音码获取车站信息
- 参数：

| 参数名 | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| pinyinCode | `string` | 否 | - | 拼音码 |

- 返回值：`Station[]`
#### getStationByCity
通过城市名或城市编码获取车站信息
- 参数：

| 参数名 | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| city | `string` | 否 | - | 城市名/城市编码 |

- 返回值：`Station[]`
## 说明
- 数据来源：<https://kyfw.12306.cn/otn/resources/js/framework/station_name.js>
