<template>
    <div class="loading">
        <div class="laoding-content">
            <img
                v-on:load="load"
                src="/images/loading.svg"
                class="loading-title"
            >

        </div>
            <div class="car" v-bind:class="{border : showFlg}">
                <div class="car-move" >
                    <transition name="car">
                        <img 
                            v-if="showFlg"
                            src="/images/footer-taxi.svg"
                        />
                    </transition>
                </div>
            </div>

    </div>

</template>

 <script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class Loading extends Vue {

        showFlg:boolean = false;

        load(){
            this.showFlg = true;
            setTimeout(function(){
                this.$emit("finishLoader")
            }.bind(this), 2000);

        }

    }
</script>

<style scoped>

.loading{
    width:100%;
    height:100%;
    background:black;
    z-index:999;
    position: fixed;
    top:0;
    left:0;
    text-align:center;
    display: flex;
    justify-content: center;
    align-items: center;
}

img.loading-title{
    width:100%;
}

.loading-content{
    width:100%;
}

.car{
    width:100%;
    display: block;
    position: absolute;
    padding-top:15px;
}

.border{
    border-bottom:rgb(30, 91, 85) 2px solid;
}

.car-move{
    text-align: left;
    position:relative;
    height:40px;
}

.car img{
    width:40px;
    position:absolute;
    left:60px;
    bottom:0;
}

.car-enter-active,
.car-leave-active {
    transition: all 2s ease;
}

.car-enter,
.car-leave-to {
    transform: translateX(-120px);
}

@media screen and (max-width: 414px) {
  .car {
    padding-top:60px;
  }
}

</style>