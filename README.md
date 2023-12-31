## 项目准备

### 描述:

WeatherQuest 是一个动态的 web 应用，旨在为用户提供准确、及时和可视化的天气信息。应用的前端使用 React 构建，并利用 ECharts 提供丰富的数据可视化。后端服务由 Flask 提供，与 open-meteo API 进行交互以获取天气数据。通过整合这些技术，WeatherQuest 旨在为用户提供一个简洁、高效且用户友好的天气查询体验。

### 主要特点:

1. **实时天气查询**：用户可以输入城市名称或地理坐标，快速获取当前的天气情况。
2. **详细的天气预报**：除了实时数据，应用还提供未来几天的天气预测，包括温度、湿度、降雨量等。
3. **动态数据可视化**：通过 ECharts，用户可以查看天气趋势的图表和其他相关可视化内容。
4. **响应式设计**：应用的设计兼容各种设备，无论是桌面还是移动设备，用户都可以获得最佳的浏览体验。
5. **前后端分离**：利用 Flask 和 React，项目清晰地分隔前端和后端代码，使得开发、测试和部署更加模块化。
6. **安全性**：所有与 open-meteo 的交互都通过 Flask 作为代理进行，确保API密钥的安全性。

### 技术栈：

- **前端**: ReactJS, ECharts, Webpack, Node.js, TailwindCSS
- **后端**: Flask
- **数据源**: open-meteo API, [和风天气 API](https://dev.qweather.com/docs/api/)
- **版本控制**: Git

### **预期成果**:

1. 一个完整、可部署的 web 应用，用户可以通过该应用进行天气查询。
2. 代码库，包含所有源代码、注释、测试和文档。
3. 用户文档，指导用户如何使用应用的所有功能。
4. 开发者文档，包括设置、运行和部署应用的说明。

## 项目搭建

### 数据点

| 类别             | 数据点               | 示例                                                         |
| ---------------- | -------------------- | ------------------------------------------------------------ |
| **位置信息**     | 位置名称             | My Location, 广州市, ( 23.1167, 113.25 )                     |
| **当前天气信息** | 时间                 | 23:55                                                        |
|                  | 当前温度             | 770, 78°, 83°, 77                                            |
|                  | 天气描述             | Mostly Cloudy, Rainstorm, Cloudy                             |
|                  | 最高温度和最低温度   | H:870 L:750, H:86° L:76                                      |
| **其他天气指标** | 空气质量             | AIR QUALITY 21 - Excellent, Current AQI is 21                |
|                  | 10天天气预报         | Today, Tue, Wed, Thu, Fri, Sat, Sun, Mon                     |
|                  | 风速信息             | WIND                                                         |
|                  | 紫外线指数           | UV INDEX Low                                                 |
|                  | 降水量               | PRECIPITATION 0", "in last 6h                                |
|                  | 可见度               | VISIBILITY 11mi                                              |
|                  | 日出和日落时间       | SUNRISE 05:30, Sunset: 18:49                                 |
|                  | 体感温度             | FEELS LIKE 83°                                               |
|                  | 湿度                 | HUMIDITY 92%                                                 |
|                  | 气压                 | PRESSURE 29.73 inHg                                          |
| **其他文本**     | 天气的具体情况或解释 | It's perfectly clear right now, Humidity is making it feel warmer |

### 

### API 数据源

#### 和风天气

##### 错误状态码

[错误状态码](https://dev.qweather.com/docs/resource/status-code/)

| Code | State                                                        |
| ---- | ------------------------------------------------------------ |
| 200  | 请求成功                                                     |
| 204  | 请求成功，但你查询的地区暂时没有你需要的数据。               |
| 400  | 请求错误，可能包含错误的请求参数或缺少必选的请求参数。       |
| 401  | 认证失败，可能使用了错误的KEY、[数字签名](https://dev.qweather.com/docs/resource/signature-auth/)错误、KEY的类型错误（如使用SDK的KEY去访问Web API）。 |
| 402  | 超过访问次数或余额不足以支持继续访问服务，你可以充值、升级访问量或等待访问量重置。 |
| 403  | 无访问权限，可能是绑定的PackageName、BundleID、域名IP地址不一致，或者是需要额外付费的数据。 |
| 404  | 查询的数据或地区不存在。                                     |
| 429  | 超过限定的QPM（每分钟访问次数），请参考[QPM说明](https://dev.qweather.com/docs/resource/glossary/#qpm) |
| 500  | 无响应或超时，接口服务异常请[联系我们](https://www.qweather.com/contact) |



### 后端
