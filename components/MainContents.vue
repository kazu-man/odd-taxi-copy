<template>
  <div ref="goToTop" class="main-content">
    <GoToTop :go-to-top-show-flg="goToTopShowFlg" />

    <div id="news" class="black-bg">
      <News class="main-contents" />
    </div>

    <div id="about" class="translucent-bg">
      <About class="main-contents" />
    </div>

    <div id="story" class="black-bg">
      <Story class="main-contents" />
    </div>

    <div id="character" class="translucent-bg">
      <Character class="main-contents" />
    </div>

    <div id="castStaff" class="black-bg">
      <CastStaff class="main-contents" />
    </div>

    <div id="discBook" class="translucent-bg">
      <DiscBook class="main-contents" />
    </div>

    <div id="goods" class="black-bg">
      <Goods class="main-contents" />
    </div>

    <div id="movie" class="translucent-bg">
      <Movie class="main-contents" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

 @Component
export default class MainContents extends Vue {
        goToTopShowFlg:boolean = false;

        refs ():any {
          return this.$refs
        }

        mounted () {
          const imageElement = this.refs().goToTop
          window.addEventListener('scroll', this.onScroll)
        }

        onScroll () {
          const imageElement = this.refs().goToTop

          const innerHeight = window.innerHeight
          const targetHeight = imageElement.getBoundingClientRect().top

          if (targetHeight < innerHeight) {
            this.goToTopShowFlg = true
            return
          }

          this.goToTopShowFlg = false
        }

  // computed
  // get titleHeight(){
  //     return this.titlePosition + '%'
  // }

  // mounted() {

  // }
}
</script>

<style scoped>
p{
    color:white;
    word-break:break-all;
}

.main-content{
    height:100%;
    display:block;
    z-index: 2;
    position: relative;
    margin-top:-8px;
}

.black-bg{
    background:black;
}

.translucent-bg{
    background: rgb(12 12 12 / 30%);
}
.black-bg,.translucent-bg{
    min-height:700px;
}

.main-contents{
    margin: auto;
    max-width: 1000px;
}

@media screen and (max-width: 768px) {
    .black-bg,.translucent-bg{
        min-height:700px;
    }
}
@media screen and (max-width: 415px) {
    .black-bg,.translucent-bg{
        min-height:550px;
    }
}
</style>
