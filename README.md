# alpha-shop-cart

建立 ALPHA-Shop 購物車的購物流程、購買商品數量、及總價格。

## 功能列表

- stepper：標示「寄送地址、運送方式、付款資訊」三個操作階段。
- form：「寄送地址、運送方式、付款資訊」各自有對應表單，表單下方有「上一步」和「下一步」按鈕可切換，切換的時候僅部分板塊被抽換，不會有頁面轉跳情形產生。
- radio button 運送方式可選擇按鈕
- 購物籃：不論切到哪個操作階段，都會顯示有兩件商品的照片、單價、用費和總價，每項商品有「 ＋ 」和「 − 」按鈕可增減商品數量。

## 專案畫面

![markdown](https://raw.githubusercontent.com/Ingrid-chi/alpha_shop_cart/main/src/static/images/alpha_shop_cart.jpg)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### 開發工具

> webpack @5.73.0  
> webpack-cli @4.10.0  
> webpack-dev-server @4.9.2  
> mini-css-extract-plugin @2.6.0  
> css-loader @6.7.1  
> sass-loader @13.0.0  
> node-sass @7.0.1
