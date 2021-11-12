<template>
              
    <div style="z-index:2;position:relative;pointer-events: none;" ref="test">
        <img
            style="width:100%;"
            src="/images/oddTaxi-background.png"
        >
        <transition name="odokawa" @enter="odokawaEnter">
            <img
                v-if="odokawaFlg"
                class="odokawa-taxi"
                src="/images/odokawaTaxi.png"
            >
        </transition>
    </div>

</template>

<script lang="ts">
    import {Component, Vue, Watch} from "nuxt-property-decorator";

    @Component 
    export default class Index extends Vue {
        cityImageFlg : boolean = false;
        odokawaFlg : boolean = false;
        //bgスクロールアニメーション関連
        onScrollFlg:boolean = false;
        titlePosition: number = 0;
        imageSize:number = 0;
        goToTopRate:number = 1;
        goToSlow:boolean = false;
        timerObj:any = null;
        imageElement:any = null;

        mounted(){
            this.cityImageFlg = true;
            setTimeout(function(){
              this.goto()
            }.bind(this), 100);
            window.addEventListener('scroll', this.onScroll)

        }
                
        goto() {
            this.imageElement = this.refs().test;
            console.log(this.imageElement);
            const imageBottom = this.imageElement.offsetHeight - window.innerHeight;
            console.log(imageBottom)
            window.scrollTo(0, imageBottom);
            this.titlePosition = imageBottom;
            this.imageSize = imageBottom;
            this.odokawaFlg = true

          setTimeout(function(){
            this.slowScrollTop()
          }.bind(this), 2800);

        }

        slowScrollTop(){
            this.onScrollFlg = true;
            this.timerObj = setInterval(function() {this.scrollBg()}.bind(this), 10)
        }

        onScroll () {

          //bgのアニメーション中にしたスクローるされた場合、アニメーションをキャンセル
          const currentPos = window.pageYOffset // スクロール量を取得
          if (this.titlePosition < currentPos && this.onScrollFlg) { // スクロール量が最下部の位置を過ぎたかどうか
            console.log('stop auto scroll')
            clearInterval(this.timerObj);
            this.onScrollFlg = false;
          }
        }


        scrollBg(){
            if(this.titlePosition > 5){
                this.titlePosition = this.titlePosition - this.goToTopRate;
                const leftImageRate:number =  (this.titlePosition / this.imageSize) * 100;
                
                //加速度が5以上、もしくは残りが　75%スクロールが終わったら減速
                if((leftImageRate < 25) && this.goToTopRate > 1){

                  this.goToTopRate *= 0.85;

                //5%以上スクロールが進んだら加速開始
                }else if(leftImageRate > 10){

                  this.goToTopRate *= 1.03;

                }

                window.scrollTo(0, this.titlePosition);

            }else{
              clearInterval(this.timerObj);
              this.onScrollFlg = false;
            }
        }

        refs():any {
          return this.$refs;
        }

        enter(el) {
            el.style.transitionDelay = 2000 + 'ms'
            this.odokawaFlg = true
        }

        odokawaEnter(el) {
            el.style.transitionDelay = 800 + 'ms'
        }
    }
</script>

<style scoped>
.bg{
    background-image: url('/images/oddTaxi-background.png');
    width:100%;
}

.bg-title{
    background-image: url('/images/title.svg');
    width:100%;

}


.city-enter-active,
.city-leave-active {
    transition: all 3s ease;
}

.city-enter,
.city-leave-to {
    transform: translateY(-65%);

}

.odokawa-enter-active,
.odokawa-leave-active {
    transition: all 2s ease;
}

.odokawa-enter,
.odokawa-leave-to {
    transform: translateX(-65%);
}

.odokawa-taxi{
    width: 80%;
    position: absolute;
    bottom: -25%;
    left: -31%;
    z-index: 0;
}



</style>