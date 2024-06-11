<template>
  <div class="contact" :style="backgroundStyle">
    <h2>お問い合わせ</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">名前:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div class="form-group">
        <label for="email">メールアドレス:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="message">メッセージ:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script>
import backgroundImage from '@/assets/contact.jpeg';

export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px'
      };
    }
  },
  methods: {
    submitForm() {
      // フォームの送信処理をここに追加
      console.log('Form submitted:', this.form);
    }
  }
}
</script>

<style scoped>
.contact {
  background: rgba(255, 255, 255, 0.8); /* 背景に半透明の白を追加 */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  max-width: 800px; /* 横幅を広く調整 */
  width: 90%; /* 横幅を90%に設定 */
  margin: 40px auto;
  text-align: left;
}

h2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input, textarea {
  width: 100%;
  padding: 15px; /* パディングを増やして入力フィールドを広く */
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1.1em; /* フォントサイズを少し大きく */
}

textarea {
  height: 150px; /* 高さを調整 */
}

button {
  display: block;
  width: 100%;
  padding: 15px; /* パディングを増やしてボタンを広く */
  background-color: #b0c4de;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.1em;
  cursor: pointer;
}

button:hover {
  background-color: #a0b4ce;
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
