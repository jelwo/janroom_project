<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  </head>
  <div class="home" :style="backgroundStyle">
    <div class="content">
      <h1 class="title">◯教</h1>
      <p class="description fade-in-text">SNSの炎上、会社の解雇はすべて、この宗教をやるために必要なことでした。 by 物部天獄</p>
    </div>
  </div>
</template>

<script>
import newBackgroundImage from '@/assets/home.jpeg'; // シンプルな背景画像を読み込み

export default {
  name: 'Home',
  data() {
    return {
      bgImage: newBackgroundImage // 新しい背景画像を使用
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', /* 中心に配置 */
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)' /* 半透明の黒色背景を追加 */
      };
    }
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
  border-radius: 12px;
}

.title {
  font-family: 'Roboto', sans-serif; /* フォントを統一 */
  color: #d3bff5; /* 薄い紫色 */
  font-size: 4em; /* サイズを大きくする */
  font-weight: bold;
  letter-spacing: 0.1em; /* 文字間を広げる */
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7); /* テキストシャドウを強化 */
  margin-bottom: 20px;
  position: absolute;
  top: 15vh; /* もう少し下に配置 */
  left: 50%;
  transform: translateX(-50%); /* 中央揃え */
}

.description {
  font-family: 'Roboto', sans-serif; /* フォントを統一 */
  color: black; /* 薄い紫色 */
  font-size: 1.5em;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* テキストシャドウを少し控えめに */
  margin: 0 20px; /* はみ出し防止のためにマージンを追加 */
}

.fade-in-text {
  display: inline-block;
  animation: fadeIn 3s ease-in-out forwards; /* フェードインアニメーションを追加 */
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
/* スマホ対応 */
@media (max-width: 600px) {
  .content {
    padding: 15px;
    font-size: 0.8em;
  }
  .content h2 {
    font-size: 1.2em;
  }
  .content p {
    font-size: 0.8em;
  }
}
</style>
