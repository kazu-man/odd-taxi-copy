<template>
  <div class="sp-content">
    <transition-group name="sp-content">
      <div v-if="showFlg" :key="'onair'" class="onair">
        <img
          src="/images/onair_btn_sp.png"
        >
      </div>
      <div v-if="showFlg" :key="'prime'" class="prime">
        <img
          src="/images/prime_bn_pc.png"
        >
      </div>
      <div v-if="showFlg" :key="'book'" class="book">
        <img
          src="/images/20210127_bn.png"
        >
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

    @Component
export default class SpBanners extends Vue {
        showFlg:boolean = false;

        mounted () {
          this.showFlg = true
        }
}
</script>

<style scoped>

.sp-content{
    height:100%;
    display:block;
    z-index: 2;
    position: relative;
    margin-top:-8px;
    background:black;
    text-align: center;
    border-bottom: rgb(30, 91, 85) solid 2px;
    margin-bottom: 8px;
    min-height:250px;
}

img{
    opacity:1;
}

.onair{
    height: 42px;
    margin-top: -15px;
}
.onair img{
    margin-top: -15px;
}
.prime{
    height: 71px;
    margin:20px 0;
}

.book{
    height: 96px;
}
.sp-content-enter{
    opacity:0;
}
.sp-content-enter-active{
    animation: jump-up 2s;
    transition:opacity 2s ease;
}
img{
    height:100%;
}
</style>
