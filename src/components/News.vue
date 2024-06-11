<template>
  <div class="news" :style="backgroundStyle">
    <div class="section latest-news">
      <h2>最新情報</h2>
      <div class="news-item highlight">
        <h3 class="news-title">2024年9月1日: 体験合宿のお知らせ</h3>
        <p>来る2024年10月1日から10月3日まで、特別な体験合宿が開催されます。<br>この合宿では、物部天獄教祖の指導の下、参加者は深い霊的な体験を通じて自己の内なる平和を見つけることができます。詳細と参加申し込みについては、<a href="/contact" class="highlight-link">聖域への道</a>からお問い合わせください。</p>
      </div>
    </div>
    <div class="section past-activities">
      <h2>これまでの活動</h2>
      <div class="news-item">
        <h3 class="news-title">2024年6月20日: 物部天獄、新しい瞑想テクニックを紹介</h3>
        <p>物部天獄教祖は新しい瞑想テクニックを紹介した。このテクニックは、心の平安と霊的成長を促進するもので、多くの信徒がその効果を実感している。</p>
      </div>
      <div class="news-item">
        <h3 class="news-title">2024年6月15日: 物部天獄、自然の中で説法</h3>
        <p>物部天獄教祖は自然の中で特別な説法を行った。この説法は、多くの信徒にとって感動的で啓発的なものであった。</p>
      </div>
      <div class="news-item">
        <h3 class="news-title">2024年6月12日: 物部天獄、断食を開始</h3>
        <p>物部天獄教祖は新たな霊的修行として断食を開始した。この断食は、彼の精神と身体を浄化するための重要な儀式とされている。</p>
      </div>
      <div class="news-item">
        <h3 class="news-title">2024年6月10日: 物部天獄、山頂で瞑想</h3>
        <p>物部天獄教祖は早朝に山頂で瞑想を行った。信徒たちは、この行為が彼の霊的な力をさらに高めるためであると信じている。</p>
      </div>
      <div class="news-item">
        <h3 class="news-title">2023年8月5日: 夏季瞑想リトリート</h3>
        <img src="@/assets/news_img/retreat.jpeg" alt="Retreat" class="news-image">
        <p>来る2024年8月5日から8月10日まで、夏季瞑想リトリートが開催される。参加者は自然の中で心を落ち着け、霊的な成長を促進する特別なプログラムに参加できる。このリトリートは、物部天獄教祖の指導の下で行われる予定だ。</p>
      </div>
      <div class="news-item">
        <h3 class="news-title">2023年6月5日: 物部天獄、放屁</h3>
        <p>物部天獄教祖が集会中に放屁したことが確認された。この出来事は信徒たちの間で様々な解釈を呼び起こしている。</p>
      </div>
      <div class="news-item">
        <h3 class="news-title">2022年6月10日: 新たな啓示</h3>
        <img src="@/assets/news_img/keiji.jpeg" alt="Revelation" class="news-image">
        <p>物部天獄教祖より新たな啓示がもたらされた。この啓示は、全ての信徒が心の平安を求めるための新しい道を示している。詳細は、今週末の集いで教祖自らが語られる。</p>
      </div>
      <div class="news-item">
        <h3 class="news-title">2022年6月3日: 物部天獄、アラーム無しで起床</h3>
        <p>物部天獄教祖はアラーム無しで自然に目覚めたと報告された。この奇跡的な出来事は信徒たちに大きな驚きと感動を与えた。</p>
      </div>
      <div class="news-item">
        <h3 class="news-title">2022年5月: 慈善活動報告</h3>
        <img src="@/assets/news_img/volunteer.jpeg" alt="Charity" class="news-image">
        <p>我々のコミュニティは、2024年5月に地域社会との連携で多くの慈善活動を行った。食糧配布や環境保護活動など、多くの人々に希望と支援を提供することができた。今後も継続的に活動を行っていく予定だ。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {};
  },
  computed: {
    backgroundStyle() {
      return {
        background: 'none',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '20px'
      };
    }
  }
}
</script>

<style scoped>
.news {
  background: rgba(0, 0, 0, 0.1); /* 背景に半透明の白を追加 */
  color: black; /* テキストの色を黒に */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* シャドウで立体感を出す */
  font-family: 'Roboto', sans-serif; /* フォントを統一 */
  max-width: 800px;
  margin: 40px auto;
}

.latest-news {
  background: #f5f5f5; /* 最新情報のセクションの背景色 */
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 40px;
}

.past-activities {
  background: #ffffff; /* これまでの活動のセクションの背景色 */
  padding: 20px;
  border-radius: 10px;
}

.news h2 {
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center; /* セクションタイトルを中央揃え */
  color: #333;
}

.news-item {
  margin-bottom: 40px;
}

.news-title {
  font-size: 1.2em; /* 見出しのサイズを小さく */
  margin-bottom: 10px;
  color: #b0c4de; /* 色を薄い紫に */
  text-align: left; /* タイトルを左揃え */
}

.news-item p {
  font-size: 1em;
  font-family: 'Lora', serif; /* フォントをLoraに変更 */
  text-align: justify;
  line-height: 1.8; /* 行間を広げて読みやすく */
}

.news-item.small-news h3 {
  font-size: 1em; /* 小さなニュースの見出しのサイズをさらに小さく */
}

.news-item.small-news p {
  font-size: 0.9em; /* 小さなニュースのテキストサイズを小さく */
}

.news-image {
  width: 30%; /* 画像をさらに小さく */
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.highlight {
  background: #f0e6f6; /* ハイライト用の背景色 */
  border: 2px solid #b0c4de; /* ハイライト用のボーダー */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
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
