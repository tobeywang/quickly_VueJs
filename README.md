# SPA (Single Page Application 單頁應用程式) 運作模式

在瀏覽器中加載單個 HTML 頁面，並通過 JavaScript 動態更新頁面內容的應用程式

## 專案結構
```
quickly_VueJs/
├── build/                  # webpack 處理
│   ├── build.js            # 打包主檔
│   └── webpack.dev.conf.js # 開發環境打包檔
├── public/                 # 靜態資源，不會被 webpack 處理
│   ├── favicon.ico         # 網站圖標
│   └── index.html          # HTML 模板
├── config/                 # 環境變量
│   ├── dev.env.js          # 開發環境變量
│   └── index.js            # 預設環境變量
├── src/                    # 源代碼
│   ├── assets/             # 資源文件（會被 webpack 處理）
│   │   ├── images/         # 圖片
│   │   └── styles/         # 樣式文件
│   ├── components/         # 可重用的 Vue 組件
│   │   ├── common/         # 通用組件
│   │   └── layout/         # 布局相關組件
│   ├── router/             # Vue Router 配置
│   │   └── index.js        # 路由定義
│   ├── store/              # Vuex 狀態管理
│   │   ├── modules/        # 按模塊組織的狀態
│   │   └── index.js        # Vuex 配置
│   ├── views/              # 頁面級組件
│   ├── services/           # API 服務
│   ├── utils/              # 工具函數
│   ├── App.vue             # 根組件
│   └── main.js             # 應用入口
├── babel.config.js         # Babel 配置
├── package.json            # 依賴和腳本
├── index.html              # HTML 模板
└── vue.config.js           # Vue CLI 配置
```
