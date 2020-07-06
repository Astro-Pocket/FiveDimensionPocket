# Five Dimension Pocket
## 一、產品簡介
![](https://i.imgur.com/psqo3Xz.png)

身處在資訊爆炸的時代，「資訊焦慮」就像感冒一樣的常見。

我們既不需要壓抑，也不需要趕走這種焦慮感。 只需要有方法地接納並減輕資訊焦慮！

[Five Dimension Pocket](https://five-dimension-pocket.herokuapp.com/) 是一個向知名文章管理工具 Pocket 致敬的產品。

使用者僅需輸入文章網址，即可「輕鬆且快速」儲存新知，並累積閱讀數據，進而創造成就感與方向感。儲存當下不只減輕焦慮感，長期更為使用者創造行動的起點。 你也正在為資訊焦慮所苦嗎？ 一起來使用 [Five Dimension Pocket](https://five-dimension-pocket.herokuapp.com/) 吧！
  
<br>

## 二、特色介紹
![](https://i.imgur.com/wCAY0Oa.png)

<br>

### 1. 輸入網址即可儲存文章
![](https://i.imgur.com/1vHyaTh.png)

![](https://i.imgur.com/RfBK4FD.png)

<br>

### 2. 去除廣告，保留純文字與圖片，讓你專注閱讀
![](https://i.imgur.com/LgKKjyT.png)

<br>

### 3. Highlight 重點標記
![](https://i.imgur.com/wMSX3uo.png)
![](https://i.imgur.com/n6vSCSq.png)

<br>

### 4. Google 小姐唸給你聽

點擊播放鍵 Google 小姐將會播放該篇文章給你聽。
![](https://i.imgur.com/rNc5KfA.png)

<br>

### 5. 成就圖表

協助你紀錄兩週內的閱讀數據、標籤百分比，掌握近期的閱讀偏好。
![image](https://user-images.githubusercontent.com/50868409/86447382-db6e7b80-bd47-11ea-9722-99de9b0ba458.png)

<br>

### 6. 探索與追蹤

不只收集自己關注的領域，透過探索與追蹤功能協助你拓展知識邊界。
<img width="1153" alt="截圖 2020-07-03 下午4 14 01" src="https://user-images.githubusercontent.com/50868409/86447684-4a4bd480-bd48-11ea-9538-1745059ade0e.png">

<br>

### 7. Pocket Extension

停留在你當下閱讀的頁面，點一下 Pocket Extension，一鍵儲存文章。
![](https://i.imgur.com/Pm4tI2H.png)

<br>  
 
## 三、測試帳號

- 作品連結：[Five Dimension Pocket](https://five-dimension-pocket.herokuapp.com/)

- 帳號：sunny@foo.com

- 密碼：sunny123

<br>
  
## 四、開發環境與工具

- 後端：Rails 6.0.2.2、Ruby 2.6.5

- 前端：HTML5、CSS、JavaScript、jQuery、Bootstrap、AJAX

- 第三方 API 串接
  1. Google / Facebook 第三方登
  2. Google Cloud Text-to-Speech API
  3. Extractor API

- 版本控制：Git、GitHub

- 資料庫：PostgreSQL

- 其他套件：Device、Chart.js、stimulus_reflex、google-cloud-storage、HTTParty、 Nokogiri、figaro、foreman、Select2、Sweetalert 等

- 網站部署：Heroku  

<br>

## 五、安裝須知

本專案以 Rails 6.0.2.2 / Ruby 2.6.5 版本開發，並使用 PostgreSQL 做為資料庫。若您想安裝本產品，請務必在 clone 後，執行以下步驟：

1. 確保所有套件均正常安裝，並且是穩定的最新版本。
```
$ bundle install
```
2. 確認您的本地電腦已完成安裝 PostgreSQL。若您尚未完成安裝，請先完成安裝，安裝方法請參考 [PostgreSQL 官網](https://www.postgresql.org/)。
3. 建立資料庫。
```
$ rails db:create
```
4. 建立資料表。
```
$ rails db:migrate
```  
<br>

## 六、第三方服務金鑰申請須知

本專案將使用到以下第三方服務，使用前請至官網申請相關金鑰：

- Extractor API：註冊即可免費發送 1,000 次 request，申請註冊請參考[官網連結](https://extractarticletext.com/)。
- Google Cloud Platform API 金鑰：將應用於 Google 小姐 API 串接，申請流程請參考[官方文件](https://cloud.google.com/text-to-speech/docs/quickstart-protocol)。
- Google 登入金鑰：若您已完成 Google Cloud Platform API 金鑰申請，請於[主控台](https://console.cloud.google.com/)點選側邊欄「API 和服務 → 憑證 → 建立憑證 → 選擇 OAuth 2.0 用戶端 ID」，完成資料填寫即可取得金鑰。(詳細可參考→[申請第三方登入憑證- Google](https://medium.com/@aileen60222/%E7%94%B3%E8%AB%8B%E7%AC%AC%E4%B8%89%E6%96%B9%E7%99%BB%E5%85%A5%E6%86%91%E8%AD%89-google-4387325883ca))
- Facebook 登入金鑰：申請方式請先登入 [Facebook for Developer](https://developers.facebook.com/apps/)，並建立您的應用程式，選擇 Facebook 登入。完成資料填寫即可取得金鑰。(詳細可參考→[申請第三方登入憑證- Facebook](https://medium.com/@aileen60222/%E7%94%B3%E8%AB%8B%E7%AC%AC%E4%B8%89%E6%96%B9%E7%99%BB%E5%85%A5%E6%86%91%E8%AD%89-facebook-c0051dd7c686))

<br>

## 七、資料庫設計

[ERD](https://drawsql.app/MyTraining/diagrams/5d)
<br>

## 八、開發者

- 張玲涓
    - GitHub：[lynnbright](https://github.com/lynnbright)
    - Email：tv725987@gmail.com

- Joey
    - GitHub：[JoeyChien](https://github.com/JoeyChien)
    - Email：aileen60222@gmail.com

- 劉家維
    - GitHub：[Aweiisacat](https://github.com/Aweiisacat)
    - Email：face992302@gmail.com
