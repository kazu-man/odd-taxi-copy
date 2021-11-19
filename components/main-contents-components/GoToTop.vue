<template>
    <transition name="go-to-top">
        <svg v-if="goToTopShowFlg" v-scroll-to="'#top'" id="goToTop" xmlns="http://www.w3.org/2000/svg" width="88.38" height="87.188" viewBox="0 0 88.38 87.188" class="sc-XhUPp kiNLFp isVisible"><circle id="circle" cx="44.19" cy="43" r="41"></circle><path id="taxi" class="cls-2" d="M1335.97,47.029h-0.67V40.981a6.315,6.315,0,0,0-4-5.749v-5.8a6.265,6.265,0,0,0-6.49-6h-2.06v-2.39a3.647,3.647,0,0,0-3.65-3.644h-5.23a3.653,3.653,0,0,0-3.65,3.644v2.39h-2.06a6.265,6.265,0,0,0-6.49,6v5.793a6.326,6.326,0,0,0-4,5.753v6.048H1297a1.681,1.681,0,0,0,0,3.362h3.94v1.555a3.608,3.608,0,0,0,3.61,3.6h0.27a3.606,3.606,0,0,0,3.6-3.6V50.392h16.13v1.555a3.606,3.606,0,0,0,3.6,3.6h0.27a3.608,3.608,0,0,0,3.61-3.6V50.392h3.94A1.681,1.681,0,0,0,1335.97,47.029Zm-35.85-7.607a1.157,1.157,0,0,1,1.16-1.152h2.7a1.155,1.155,0,0,1,1.15,1.152V39.56a0.659,0.659,0,0,1-.66.664h-3.69a0.666,0.666,0,0,1-.66-0.664V39.422Zm31.7,0.8a0.289,0.289,0,0,1-.06,0h-3.69a0.666,0.666,0,0,1-.66-0.664V39.422a1.157,1.157,0,0,1,1.16-1.152h2.7a1.157,1.157,0,0,1,1.16,1.152V39.56A0.662,0.662,0,0,1,1331.82,40.22ZM1302.74,47.5a0.992,0.992,0,0,1-.76-0.345q-0.045-.057-0.09-0.126a0.968,0.968,0,0,1-.15-0.53V45.44a1,1,0,0,1,1-1h4.03V43.747a2.2,2.2,0,0,1,2.2-2.194h15.08a2.19,2.19,0,0,1,2.19,2.194V44.44h3.99a1,1,0,0,1,1,1V46.5a0.968,0.968,0,0,1-.15.53,0.617,0.617,0,0,1-.09.126,0.992,0.992,0,0,1-.76.345h-27.49Zm10.85-26.454a0.28,0.28,0,0,1,.28-0.282h5.23a0.289,0.289,0,0,1,.29.282v2.39h-5.8v-2.39Zm-5.43,5.753h16.65a2.922,2.922,0,0,1,3.13,2.635v5.12h0a94.869,94.869,0,0,0-22.9,0h-0.01v-5.12A2.922,2.922,0,0,1,1308.16,26.8Z" transform="translate(-1272.81)"></path><path id="arrow" class="cls-3" d="M1326.54,70.858a0.311,0.311,0,0,0,.49-0.27V67.962a1.2,1.2,0,0,0-.49-0.981l-8.56-6.185a0.831,0.831,0,0,0-.98,0l-8.57,6.185a1.23,1.23,0,0,0-.49.981v2.627a0.311,0.311,0,0,0,.49.27l7.58-5.474a2.506,2.506,0,0,1,2.95,0Z" transform="translate(-1272.81)"></path></svg>
    </transition>

</template>


 <script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

    @Component
    export default class GoToTop extends Vue {

        @Prop({ required: true, default:false })
        goToTopShowFlg:boolean;

    }
</script>

<style scoped>

svg{
    cursor:pointer;
}
.kiNLFp #circle {
    fill: rgb(30, 91, 85);
    stroke: rgb(244, 95, 74);
    stroke-width: 3px;
}

.kiNLFp #arrow {
    fill: rgb(244, 95, 74);
    transform: translate(-1272.81px, 2px);
    transition: all 0.2s ease-out 0s;
    will-change: fill;
}

.kiNLFp #taxi {
    fill: rgb(255, 198, 0);
}

.kiNLFp:hover #taxi {
    fill: rgb(30, 91, 85);
}
.kiNLFp:hover #circle {
    fill: rgb(255, 198, 0);
}

#goToTop{
    position:fixed;
    right:0;
    bottom:0;
    z-index:9;
}

.go-to-top-enter-active{
    animation: move-from-bottom 0.3s;
}
.go-to-top-leave-active{
    animation: move-from-bottom 0.3s reverse;
}


</style>