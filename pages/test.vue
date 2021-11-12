<template>
    <div style="background-color: #1d4f4a;">
        <div style="z-index:2;">
            <Title />
             <transition  name="city" mode="out-in" @enter="enter">
                <div style="z-index:2;position:relative;pointer-events: none;" v-if="cityImageFlg">
                    <img
                        style="width:100%;"
                        src="/images/oddTaxi-background.png"
                    >
                </div>
             </transition>
        </div>
    </div>
    
</template>
<script lang="ts">
    import {Component, Vue} from "nuxt-property-decorator";

    @Component 
    export default class Index extends Vue {
        //data
        userName: Object = {
                familyName: '田中',
                givenName: '1234'
            }
        cityImageFlg : boolean = false;

        mounted(){
            this.cityImageFlg = true;
        }

        //methods
        enter(el) {
            el.style.transitionDelay = 1500 + 'ms'
        }

        //computed
        get helloWorld(): string { // <- 3
            return 'Hello world!';
        }
    }
</script>

<style scoped>
.bg{
    background-image: url('/images/oddTaxi-background.png');
    /* background-repeat:  no-repeat;  
    background-size:cover; */
    width:100%;
}

.bg-title{
    background-image: url('/images/title.svg');
    /* background-repeat:  no-repeat;  
    background-size:cover; */
    width:100%;

}


.city-enter-active,
.city-leave-active {
    transition: all 3s ease;

}

.city-enter,
.city-leave-to {
    /* opacity: 0; */
    transform: translateY(-50%);
}

@keyframes icon-move {
  from {
    transform: translateY(-60%);
  }
  to {
    transform: translateY(0%);
  }
}

</style>