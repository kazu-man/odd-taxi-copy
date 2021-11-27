<template>

    <transition-group name="fadein" @enter="afterTitleAnimationEnter" class="top-icons">
        <div class="prime-banner pc"
            v-if="cityImageFlg" 
            :key="'prime-banner'">
                <img
                src="/images/prime_bn_pc.png"
            >
        </div>
            <SideOfficial v-if="cityImageFlg" :key="'side-official'"/>
    </transition-group>

</template>

<script lang="ts">
    import {Component, Vue, Watch} from "nuxt-property-decorator";

    @Component 
    export default class TopIcons extends Vue {

      cityImageFlg:boolean = false;

      mounted(){
        this.cityImageFlg = true;
      }
    }
</script>

<style scoped>


.prime-banner{
    position: fixed;
    right: 0;
    top: 15%;
    width: 170px;
    cursor:pointer;
}

.prime-banner img{
    width: 100%;
}

.prime-banner img:hover{
    filter: brightness(1.1) !important;
}


.top-icons{
    z-index: 2;
    display: block;
    position: fixed;
}
</style>