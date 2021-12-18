<template>
  <CommonPartsTemplate :image-path="imagePath">
    <template #content>
      <div class="story-subtitle">
        <h2>
          見慣れた街のはずなのに、この街は少しなにかが違う気がする。
        </h2>
      </div>

      <div class="story-plot">
        平凡な毎日を送るタクシー運転手・小戸川。<br>
        身寄りはなく、他人とあまり関わらない、<br class="sp">少し偏屈で無口な変わり者。<br>
        趣味は寝る前に聞く落語と仕事中に聞くラジオ。<br>
        一応、友人と呼べるのはかかりつけでもある医者の剛力と、<br class="sp">高校からの同級生、柿花ぐらい。<br>
        彼が運ぶのは、どこかクセのある客ばかり。
        <br>
        <br>
        バズりたくてしょうがない大学生・樺沢、<br class="sp">何かを隠す看護師・白川、<br>
        いまいち売れない芸人コンビ・ホモサピエンス、<br>
        街のゴロツキ・ドブ、<br class="sp">売出し中のアイドル・ミステリーキッス…<br>
        何でも無いはずの人々の会話は、<br class="sp">やがて失踪した1人の少女へと繋がっていく。
      </div>

      <!-- <CommonMoreBtn @commonBtnClick="commonBtnClick"/> -->
    </template>
  </CommonPartsTemplate>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

    @Component
export default class Story extends Vue {
        showFlg:boolean = false;
        imagePath:string = '/images/story-title.svg';

        commonBtnClick () {
          const obj:Object = {
            modalType: 'storyDetail'
          }
          this.$store.commit('store/setModalInfo', obj)
        }
}
</script>

<style scoped>

    .story-subtitle h2{
        color: rgb(30, 91, 85);
        padding: 20px 5%;
        font-weight: 900;
        font-size: 40px;
        font-family: "Noto Sans JP", sans-serif;
        text-align:center;

    }

    .story-plot{
        text-align:center;
        color: rgb(244, 95, 74);
        font-weight: 900;
        font-size: 16px;
        line-height: 28px;
        padding:10px 0;
        font-family: "Noto Sans JP", sans-serif;
    }

    @media screen and (max-width: 767px){
        .story-subtitle h2 {
            font-size: 20px;
            line-height: 30px;
            margin:0px;
        }

        .story-subtitle h2{
            padding: 0px 5% 10px 5%;
        }

        .story-plot{
            font-size: 13px;
            line-height: 22px;
            margin: 0px -5px;
        }
    }

</style>
