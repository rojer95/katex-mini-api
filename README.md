# katex-weapp 在线 API

基于 KaTeX 构建的小程序原生 LaTeX 渲染组件（API 服务）

## 使用方法

### 第一步：导入 wxss

`katex-mini.wxss` 下载地址： https://cdn.jsdelivr.net/npm/@rojer/katex-mini/dist/index.wxss

```less
// 在app.wxss中
@import "katex-mini.wxss";
```

### 第二步：请求接口

```javascript
wx.request({
  url: "https://katex-mini-api.vercel.app",
  data: {
    latex: "a=b+c",
  },
  dataType: "json",
  success(res) {
    this.setData({
      nodes: res.data,
    });
  },
});
```

### 第三步：放到 RichText 组件里

```html
<rich-text nodes="{{ nodes }}" />
```
