<template>
  <div id="top">
    <Loading v-if="loadingFlg" @finishLoader="finishLoader" />
    <div v-if="animeDone">
      <div class="mainBg" />

      <div class="greenBg">
        <Title />
        <TopContent @loaderOff="loaderOff" />
      </div>
      <div v-if="animeDone" class="sp">
        <SpBanners />
      </div>

      <MainContents />

      <TopIcons />

      <ThankYouAnimal v-if="thankYouAnimalFlg" />
      <transition name="news-content">
        <CommonModal v-if="getModalInfo != null" :modal-info="getModalInfo" />
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

    @Component
export default class Index extends Vue {
      loadingFlg:boolean = true;
      animeDone:boolean = false;

      finishLoader () {
        this.animeDone = true
      }

      loaderOff () {
        this.loadingFlg = false
      }
}
</script>

<style scoped>
.greenBg{
    background: url("@/assets/images/greenBg.png") center center / cover no-repeat;
    opacity:1;
    z-index:2;
    position:relative;
    display:block;
    overflow:hidden;
    width:100%;
    height:100%;

}
.mainBg{
    position:fixed;
    width:100%;
    height:100%;
    z-index:1;
    margin-top:-8px;
    background: url("@/assets/images/bokashiBg.jpg") center center / cover no-repeat;
    position: fixed;
    top:0;
    left:0;

}
.news-content-enter-active, .news-content-leave-active {
    transition: all 1s;
}
.news-content-enter, .news-content-leave-to {
    opacity: 0;
}

</style>
