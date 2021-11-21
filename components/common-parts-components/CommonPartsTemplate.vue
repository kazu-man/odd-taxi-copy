<template>
    <div ref="content" >
        <transition name="fadein-2">
            <div class="main" v-show="showFlg">

                <div class="mainImage" v-bind:class="{imageFullWidth : imageFullWidthFlg}" v-if="imagePath != null">
                    <img        
                        class="title"
                        v-bind:src="imagePath"
                    >  
                </div>
                
                <slot name="content" />

            </div>
        </transition>
    </div>

</template>

 <script lang="ts">
    import { Vue, Component,Prop } from 'vue-property-decorator'

    @Component
    export default class News extends Vue {

        @Prop({default:null})
        imagePath:string;

        @Prop({default:false, required:false})
        imageFullWidthFlg:boolean;

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

          if (targetHeight < innerHeight + 60 && !this.showFlg) { 
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
.mainImage {
    padding: 0 20%;
}
.imageFullWidth{
    padding:0;
}
</style>