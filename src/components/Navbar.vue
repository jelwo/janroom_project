<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/news">お知らせ</router-link></li>
      <li><router-link to="/">教祖の言葉</router-link></li>
      <li><router-link to="/about">我が道のり</router-link></li>
      <li><router-link to="/contact">聖域への道</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar'
});
</script>

<style scoped>
.navbar ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: #9E76B4;
  margin-bottom: 20px;
}

.navbar li {
  padding: 10px 20px;
}

.navbar a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.navbar a.router-link-active {
  color: #4CAF50;
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
