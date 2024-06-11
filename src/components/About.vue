<template>
  <div class="about" :style="backgroundStyle">
    <div class="content">
      <h2>教祖</h2>
      <p>物部天獄</p>
      <h2>物部天獄の独特なエピソード</h2>
      <p>物部天獄はある冬の夜に生まれた。<br>誕生の瞬間、彼の泣き声は他の赤ん坊よりも力強く響き渡り、その声は周囲にいる全ての人々に深い感銘を与えたという。彼の出生時、部屋には淡い光が差し込み、その光は彼の未来を予見するかのようであった。<br>さらに、物部天獄は右投げ左打ちという特異な才能を持っていた。<br>これらの特徴は、彼の選ばれし者としての特異性を示すエピソードとして語り継がれている。</p>
      <h2>我が集い</h2>
      <p>幽玄の扉がここにあり。我々は、平和と霊の光を求める魂の集い、未知なる道への導きを提供する場所だ。<br>我々の集いは、全ての魂が調和と安らぎを見つけるための聖域であり、ここで新たな気づきと心の平安を得ることができる。</p>
      <h2>我々の掲げる理念</h2>
      <p>我々は、宇宙の調和と霊的真理の探求を通じて、全存在との深い繋がりを築くことを使命としている。<br>心の目を開き、自己の枠を超えた覚醒へと導くことが、我々の願いだ。<br>我々の理念は、全ての人々が自己の内なる光を見つけ、その光を他者と共有することを奨励している。</p>
      <h2>我々の歩み</h2>
      <p>この聖なる場は1990年に設立された。<br>創立者の物部天獄はかつて、SNSで過激アカウントを運営し、炎上、個人情報を特定され会社を解雇、マンションからの退去を命じられ、山ごもりしていた。<br>そのとき牝鹿から霊的啓示を受けたことがきっかけだった。その啓示は、全存在との調和と霊的成長の道を指し示すものであった。物部天獄はその後、都市の中心部にこの聖なる場を設立し、多くの求道者に安らぎと啓発の光を提供してきた。</p>
      <p>ここは、喧騒から離れた静寂の中で、真実の自己を発見し、霊的成長を遂げる場となっている。我々のコミュニティは、様々な背景を持つ人々が集まり、互いに学び合い、支え合う場だ。定期的に開催される瞑想会や霊的ワークショップは、多くの人々にとって心の平安と新たな気づきをもたらしている。</p>
      <p>また、我々は自然との共生を大切にしており、敷地内には美しい庭園や瞑想のための静かなスペースがある。これらのスペースは、訪れる人々が自然の中で心を落ち着け、霊的なつながりを感じるための場所だ。</p>
      <p>さらに、我々は地域社会とも密接に連携し、定期的に慈善活動や社会貢献活動を行っている。これにより、我々の理念が広がり、多くの人々に希望と癒しを提供することができる。物部天獄の導きの下、我々の集いは日々成長し続けている。</p>
    </div>
  </div>
</template>

<script>
import backgroundImage from '@/assets/about.jpeg'; // 背景画像を読み込み

export default {
  name: 'About',
  data() {
    return {
      bgImage: backgroundImage
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
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      };
    }
  }
}
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('@/assets/about.jpeg');
  background-size: cover;
  background-position: center;
  text-align: center;
}

.content {
  max-width: 800px;
  background: rgba(0, 0, 0, 0.7); /* 背景に半透明の黒を追加 */
  color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* シャドウで立体感を出す */
  font-family: 'Roboto', sans-serif; /* フォントを統一 */
}

.content h2 {
  font-size: 1.5em; /* 小見出しのサイズを小さく */
  text-align: left; /* 左詰め */
  text-shadow: none; /* テキストシャドウを削除 */
  margin-bottom: 0.5em;
  color: #b0c4de; /* 色を薄くして主張を弱める */
}

.content p {
  text-align: justify;
  font-size: 0.9em; /* フォントサイズを小さく */
  margin-bottom: 20px;
  line-height: 1.8; /* 行間を広げて読みやすく */
  font-family: 'Lora', serif; /* フォントをLoraに変更 */
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
