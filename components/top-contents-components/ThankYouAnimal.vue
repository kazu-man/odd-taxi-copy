<template>
    <transition name="thank-main">
        <div class="thankYouAnimal" @click.self="closeAnimal" v-if="showFlg">
            <svg @click="closeAnimal" v-if="!imgSwitch" class="sc-kstrdz btjemE sc-fpIgQR gvLCNP" id="btn.svg" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                <rect id="長方形_616" data-name="長方形 616" width="52" height="52" class="sc-hBEYos dWjUC"></rect>
                <path id="シェイプ_3" data-name="シェイプ 3" d="M38.994,11.995H31.515L26,20.04l-5.514-8.045H13.007l9.254,13.5L13.007,39h7.479L26,30.952,31.515,39h7.479L29.74,25.5Z" class="sc-fodVxV cYLuAZ"></path>
            </svg>

            <div class="thank-you-container">
                <transition-group name="thank-you">
                    <img 
                        :key="'animal'"
                        v-show="imgSwitch"
                        @click="shiwtchImage"
                        class="animal"
                        src="/images/thankyou_animal.jpg"
                    >
                    <img 
                        :key="'human'"
                        v-show="!imgSwitch"
                        src="/images/thankyou_human.jpg"
                    >
                </transition-group>
            </div>
        </div>
    </transition>
</template>

 <script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

    @Component
    export default class ThankYouAnimal extends Vue {

        imgSwitch:boolean = true;
        showFlg:boolean = false;

        mounted(){
            this.showFlg = true;
        }

        closeAnimal(){
            this.$store.commit("store/setThankYouAnimalFlg",false);
        }

        shiwtchImage(){
            this.imgSwitch = !this.imgSwitch
        }


    }
</script>

<style scoped>

.thankYouAnimal{
    position: fixed;
    display:block;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:999;
    text-align: center;
    background:black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.thank-you-container{
    width:60%;
    position:relative;

}
.thankYouAnimal img{
    width:100%;    
}

.thankYouAnimal img.animal{
    cursor:pointer;    
}
.thankYouAnimal img.animal:hover{
    filter:brightness(1.1);    
}

.thank-main-enter-active, .thank-main-leave-active {
  transition: all 1s;
}
.thank-main-enter, .thank-main-leave-to {
  opacity: 0;
}

.thank-you-enter-active, .thank-you-leave-active {
  transition: all 2s;
}
.thank-you-enter, .thank-you-leave-to {
  opacity: 0;
}

.thank-you-leave-active {
    position: absolute;
}

.cYLuAZ {
    fill: rgb(244, 95, 74);
}
.dWjUC{
    stroke: rgb(244, 95, 74);
    stroke-width: 4px;
}

.btjemE:hover rect {
    fill: rgb(30, 91, 85);
}
svg {
    cursor:pointer;
    position:absolute;
    top:5%;
    right:3%;
}
</style>