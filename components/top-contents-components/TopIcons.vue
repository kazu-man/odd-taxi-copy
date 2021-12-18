<template>
  <transition-group name="fadein" class="top-icons" @enter="afterTitleAnimationEnter">
    <div
      v-if="topScrollDoneFlg"
      :key="'prime-banner'"
      class="prime-banner pc"
    >
      <a href="https://www.amazon.co.jp/dp/B091KWC9GP" target="_blank">
        <img
          src="/images/prime_bn_pc.png"
        >
      </a>
    </div>

    <SideOfficial v-if="topScrollDoneFlg" :key="'side-official'" />
  </transition-group>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

    @Component
export default class TopIcons extends Vue {

}
</script>

<style scoped>

.prime-banner{
    position: fixed;
    right: 0;
    top: 15%;
    width: 170px;
    cursor:pointer;
}

.prime-banner img{
    width: 100%;
}

.prime-banner img:hover{
    filter: brightness(1.1) !important;
}

.top-icons{
    z-index: 2;
    display: block;
    position: fixed;
}
</style>
