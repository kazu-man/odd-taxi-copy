<template>
    <transition name="drawer" @enter="enter" @leave="leave">
        <slot v-if="drawerFlg"></slot>
    </transition>
</template>


<script lang="ts">
 import { Vue, Component, Prop } from 'vue-property-decorator'

 @Component
 export default class HeaderContent extends Vue {

   @Prop({ type: Number, required: true }) 
   order: number;

    drawerFlg:boolean = false

    mounted() {
        this.drawerFlg = true
    }

    enter(el) {
        el.style.transitionDelay = (this.order * 50) + 'ms'
    }
    leave(el) {
        el.style.transitionDelay = 100 + 'ms'
    }

 }

</script>

<style scoped>
    .drawer-enter-active{
        transition: all 1s ease;  
    }
    .drawer-enter{
        opacity: 0;
    }


</style>