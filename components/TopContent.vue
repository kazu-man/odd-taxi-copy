<template>
              
    <div style="z-index:2;position:relative;pointer-events: none;" ref="cityBg">
        <img
            v-on:load="load"
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

        <transition-group name="fadein" @enter="afterTitleAnimationEnter" class="icons">
            <div v-if="cityImageFlg" class="thank-you" :key="'thank-you'">
                <img
                    
                    style="width:100%"
                    src="/images/thankyou_banner.png"
                >
            </div>

            <div v-if="cityImageFlg" class="blueray-banner" :key="'blueray-banner'">
                <img
                    
                    style="width:100%"
                    src="/images/bluray_banner.png"
                >
            </div>
        </transition-group>

    </div>

</template>

<script lang="ts">
    import {Component, Vue, Watch} from "nuxt-property-decorator";

    @Component 
    export default class TopContent extends Vue {
        cityImageFlg : boolean = false;
        odokawaFlg : boolean = false;
        //bgスクロールアニメーション関連
        onScrollFlg:boolean = true;
        titlePosition: number = 0;
        imageSize:number = 0;
        goToTopRate:number = 1;
        goToSlow:boolean = false;
        timerObj:any = null;
        imageElement:any = null;

        mounted(){
            this.cityImageFlg = true
            window.addEventListener('scroll', this.onScroll)

        }
        load(){
            this.goto()
            this.odokawaFlg = true
        }    
        goto() {
            this.imageElement = this.refs().cityBg;
            const imageBottom = this.imageElement.offsetHeight - window.innerHeight;
            window.scrollTo(0, imageBottom);
            this.titlePosition = imageBottom;
            this.imageSize = imageBottom;

            this.$emit("loaderOff")

          setTimeout(function(){
              if(this.onScrollFlg){
                  this.slowScrollTop()
            }
          }.bind(this), 3000);

        }

        slowScrollTop(){
            this.onScrollFlg = true;
            this.timerObj = setInterval(function() {this.scrollBg()}.bind(this), 10)
        }

        onScroll () {

          const currentPos = window.pageYOffset 
          if (this.titlePosition < currentPos && this.onScrollFlg) { 
            clearInterval(this.timerObj);
            this.onScrollFlg = false;
          }
        }


        scrollBg(){
            if(this.titlePosition > 5 || !this.onScrollFlg){
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
            el.style.transitionDelay = 100 + 'ms'
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

.thank-you{
    width: 30%;
    position: absolute;
    top: 25%;
    left: 20px;
    z-index: 0;   
    cursor:pointer;
    pointer-events:auto;
}

.thank-you:hover{
    animation: wiggle .5s reverse;
}

.blueray-banner{
    width: 20%;
    position: absolute;
    top: 25%;
    right: 20px;
    z-index: 0;   
    cursor:pointer;
    pointer-events:auto;
    animation: scale-down .2s;
}

.blueray-banner:hover{
    animation: scale-up .2s;
    transform: scale(1.1);
}

.icons img:hover{
    filter: brightness(1.1) !important;
}


@media screen and (max-width: 414px) {
    .icons {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 170px;
    }
    .thank-you{
        width:45%;
        left: 5px;
    }
    .blueray-banner{
        width:45%;
        right: 5px;
    }
  }

</style>