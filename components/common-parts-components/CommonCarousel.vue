<template>
    <div class="main-carousel" ref="cal" v-bind:class="{movie : movieFlg}">
        <Carousel v-if="carouselFlg" class="carousel" :perPage="carouselRatio" :navigationEnabled="true" :paginationEnabled="false" :navigationNextLabel="movieFlg ? ' ' : '>'" :navigationPrevLabel="movieFlg ? ' ' : '<'">

            <Slide v-for="(each, i) in data" :key="i">
                <div class="label">
                    <DiscBookWindow :data="each" :slideFlg="slideFlg" :movieFlg="movieFlg"/>
                </div>
            </Slide>
  
        </Carousel>
    </div>
</template>

 <script lang="ts">
    import { Vue, Component,Prop, Watch } from 'vue-property-decorator'
    import { Carousel, Slide } from 'vue-carousel';

    @Component(
        {
            components: {
                Carousel,
                Slide
            }
        }
    )
    export default class CommonCarousel extends Vue {

        @Prop({required:true,default:null})
        data:Object;

        @Prop({required:false,default:false})
        slideFlg:boolean;

        @Prop({required:false,default:false})
        movieFlg:boolean;

        carouselFlg:boolean = false;

        carouselRatio:number = 1.5;


        mounted(){
            window.addEventListener('scroll', this.onScroll)
            window.addEventListener('resize', this.resize)
        }

        refs():any {
            return this.$refs;
        }

        resize(){
            this.carouselRatio =  window.innerWidth  < 768 ? window.innerWidth  < 430 ? 1.5 : 3.5 :2.5;
        }

        onScroll () {
          const imageElement = this.refs().cal;
          const targetHeight = imageElement.getBoundingClientRect().top;

          if (targetHeight != 0) { 
                //リサイズしないとカルーセルが表示されない
                this.removeScrollListener();
                this.carouselFlg = true
                this.resize();
          }
        }
        removeScrollListener(){
            window.removeEventListener('scroll', this.onScroll)
        }

        //画面サイズに応じて表示画像数を変更するため、一度flgをfalseにする
        @Watch("carouselRatio")
        changeFlgFalse(newVal,oldVal){

            this.carouselFlg = false;

        }

        //表示画像数を変更する際、一度flgをfalseにしたのちtrueに戻す
        @Watch("carouselFlg")
        changeFlgTrue(newVal,oldVal){

            if(!this.carouselFlg){
                this.carouselFlg = true;
            }

        }

    }
</script>

<style scoped>

.main-carousel{
    width:90%;
    padding:0 5%;
    margin-top:40px;
    margin: auto;
}
.carousel{
    width:100%;    
}

.VueCarousel-slide {
  position: relative;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 375px;
}

.movie .VueCarousel-slide{
  min-height: 275px;
}

.label {
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  transform: translate(0%, 0%);
}
@media screen and (max-width: 768px) {
    .VueCarousel-slide{
        min-height:250px;
    }
}
@media screen and (max-width: 550px) {
    .VueCarousel-slide{
        min-height:200px !important;
    }
}
</style>

<style >
.VueCarousel-navigation-button {
    color:white !important;
    font-size: 45px !important;
    font-weight:900 !important;
    cursor:pointer !important;
}
.VueCarousel-navigation-button:hover {
    color:gray !important;
}
</style>