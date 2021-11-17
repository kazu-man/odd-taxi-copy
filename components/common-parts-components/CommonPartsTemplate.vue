<template>
    <div ref="content" >
        <transition name="fadein-2">
            <div class="main" v-show="showFlg">

            <slot name="mainImage"/>

            <slot name="content" />

            </div>
        </transition>
    </div>

</template>

 <script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class News extends Vue {
        showFlg:boolean = false;

        // mounted(){
        //     this.showFlg = true;
        // }
        mounted(){
            window.addEventListener('scroll', this.onScroll)

        }

        refs():any {
            return this.$refs;
        }
        
        onScroll () {
         const imageElement = this.refs().content;

          const innerHeight = window.innerHeight 
          const targetHeight = imageElement.getBoundingClientRect().top;

          if (targetHeight < (innerHeight * 0.8) && !this.showFlg) { 
            this.showFlg = true;
          }
        }

    }
</script>

<style scoped>

.main{
    position: relative;
    width: 100%;
    padding: 60px 0px 100px;
    z-index: 1;
    height:auto;
}
img.title{
    display: block;
    height: 255px;
    margin: 0px auto;
    max-width: 100%;
}
</style>