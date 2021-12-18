<template>
  <div class="character-main">
    <div class="middle-area">
      <div class="middle-title">
        相関図
      </div>
      <div class="middle-subtitle">
        写真クリックで人物紹介をご覧いただけます
      </div>
    </div>

    <div class="relation-pic-area" :style="{'height':imageHeight}">
      <div class="relation-area">
        <img
          ref="imageHeight"
          class="title"
          src="/images/character-relation.jpg"
        >
      </div>

      <div class="relation-area">
        <svg
          id="character"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 1081.2 1376.2"
          class="sc-eggNIi JiLrb"
        >
          <rect
            x="430.5"
            y="444.3"
            width="180.9"
            height="253.2"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(1)"
          />
          <rect
            x="628.4"
            y="460.8"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(2)"
          />
          <rect
            x="725.4"
            y="461.5"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(3)"
          />
          <rect
            x="674.3"
            y="677.9"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(4)"
          />
          <rect
            x="774.7"
            y="678.1"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(5)"
          />
          <rect
            x="433.4"
            y="127.8"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(6)"
          />
          <rect
            x="473.3"
            y="293.5"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(7)"
          />
          <rect
            x="649.4"
            y="130.4"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(8)"
          />
          <rect
            x="735.7"
            y="272.5"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(9)"
          />
          <rect
            x="828.3"
            y="89.7"
            width="125"
            height="174.9"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(10)"
          />
          <rect
            x="543.1"
            y="87.2"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(11)"
          />
          <rect
            x="284.2"
            y="238.9"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(12)"
          />
          <rect
            x="155.7"
            y="238.9"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(13)"
          />
          <rect
            x="257.7"
            y="462.2"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(14)"
          />
          <rect
            x="254.6"
            y="661.9"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(15)"
          />
          <rect
            x="112.1"
            y="974.9"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(11)"
          />
          <rect
            x="128.7"
            y="664.7"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(12)"
          />
          <rect
            x="236.7"
            y="854.1"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(13)"
          />
          <rect
            x="337.3"
            y="854.1"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(14)"
          />
          <rect
            x="236.7"
            y="1090.2"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(15)"
          />
          <rect
            x="337.3"
            y="1090.2"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(16)"
          />
          <rect
            x="635.2"
            y="1067.3"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(17)"
          />
          <rect
            x="765.5"
            y="1067.3"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(18)"
          />
          <rect
            x="467.6"
            y="854.1"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(19)"
          />
          <rect
            x="571.8"
            y="854.1"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(20)"
          />
          <rect
            x="674.2"
            y="854.1"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(21)"
          />
          <rect
            x="876.7"
            y="854.1"
            width="91"
            height="127.4"
            class="sc-cTkwdZ ejPiik"
            @click="characterModal(22)"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

    @Component
export default class CharacterRelation extends Vue {
       imageHeight:string = '100px';
       character:Object[] = [
         {
           characterName: '小戸川',
           characterVoice: '(CV:花江夏樹)',
           characterImg: 'odokawaDetail.png',
           characterInfo: '年齢:41 歳  職業:タクシー運転手',
           characterDetail: '他人にあまり心を開かない、偏屈で無口な変わり者。まじめで情に厚い一面もある。趣味は寝る前に聞く落語と仕事中に聞くラジオ。'
         }
       ]

       mounted () {
         window.addEventListener('scroll', this.onScroll)
       }

       refs ():any {
         return this.$refs
       }

       onScroll () {
         const imageElement = this.refs().imageHeight
         const targetHeight = imageElement.getBoundingClientRect().top

         if (targetHeight !== 0) {
           this.imageHeight = imageElement.clientHeight + 'px'
           this.removeScrollListener()
         }
       }

       removeScrollListener () {
         window.removeEventListener('scroll', this.onScroll)
       }

       characterModal (num) {
         const obj:Object = {
           modalType: 'CharacterDetail',
           character: this.character[0]
           // character:this.character[num - 1]
         }
         this.$store.commit('store/setModalInfo', obj)
       }
}
</script>

<style scoped >
    svg{
        width:100%;
        height:100%;
    }
    svg rect{
        cursor:pointer;
        fill-opacity: 0;
    }
    svg rect:hover{
        opacity: 1;
        fill-opacity: 1;
        fill: rgba(244, 92, 72, 0.2);
        stroke: rgb(244, 95, 74);
        stroke-width: 2;
    }
    .character-main{
        position:relative;
        margin:0 auto;
        width:95%;
    }
    img{
        width: 100%;
    }

    .relation-pic-area{
        position: relative;
    }

    .relation-area{
        position:absolute;
        top:0;
        width:100%;
    }
    .middle-area{
        width:100%;
        text-align:center;
    }
    .middle-title{
        width:100%;
        font-family: "Noto Sans JP", sans-serif;
        font-weight: 900;
        font-size: 45px;
        padding-top: 50px;
        color: rgb(244, 95, 74);
        text-align: center;
    }
    .middle-subtitle{
        width:100%;
        font-family: "Noto Sans JP", sans-serif;
        font-weight: 900;
        font-size: 16px;
        padding: 25px 0px;
        color: rgb(255, 255, 255);
        text-align: center;
    }
    @media screen and (max-width: 767px){

        .middle-title{
            padding-top:0;
        }

    }
</style>
