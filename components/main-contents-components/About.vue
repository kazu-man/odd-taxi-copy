<template>
  <CommonPartsTemplate :image-path="imagePath">
    <template #content>
      <div ref="aboutContent" class="about-content">
        <AboutSvg v-if="showFlg" />
      </div>

      <!-- <CommonMoreBtn @commonBtnClick="commonBtnClick"/> -->
    </template>
  </CommonPartsTemplate>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

    @Component
export default class About extends Vue {
        showFlg:boolean = false;
        imagePath:string = '/images/about-title.svg';

        mounted () {
          window.addEventListener('scroll', this.onScroll)
        }

        refs ():any {
          return this.$refs
        }

        onScroll () {
          const imageElement = this.refs().aboutContent

          const innerHeight = window.innerHeight
          const targetHeight = imageElement.getBoundingClientRect().top

          if (targetHeight > 0 && targetHeight < innerHeight && !this.showFlg) {
            this.showFlg = true
          }
        }

        commonBtnClick () {
          const obj:Object = {
            modalType: 'aboutDetail'
          }
          this.$store.commit('store/setModalInfo', obj)
        }
}
</script>

<style scoped>
    .about-content{
        margin-top:20px;
        padding:10px;
    }

</style>
