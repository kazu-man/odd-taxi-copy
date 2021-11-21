<template>
    <div class="main-carousel" ref="cal">
        <Carousel class="carousel" :perPage="2.5" :navigationEnabled="true" :paginationEnabled="false" :navigationNextLabel="'>'" :navigationPrevLabel="'<'">

            <Slide v-for="(each, i) in data" :key="i">
                <div class="label">
                    <DiscBookWindow :data="each" :slideFlg="true"/>
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

        mounted(){
            window.addEventListener('scroll', this.onScroll)

        }

        refs():any {
            return this.$refs;
        }
        
        onScroll () {
          const imageElement = this.refs().cal;
          const targetHeight = imageElement.getBoundingClientRect().top;

          if (targetHeight != 0) { 
                //リサイズしないとカルーセルが表示されない
                Vue.nextTick(() => window.dispatchEvent(new Event('resize')))
                this.removeScrollListener();
          }
        }
        removeScrollListener(){
            window.removeEventListener('scroll', this.onScroll)
        }

    }
</script>

<style scoped>

.main-carousel{
    width:100%;
    padding:0 5%;
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

.label {
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  transform: translate(0%, 0%);
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