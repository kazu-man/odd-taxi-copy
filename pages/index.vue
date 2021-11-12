<template>
    <div id="top" v-cloak>

        <div class="mainBg" />

        <div class="greenBg">
              <Title/>
              <TopContent />
        </div>

        <MainContents />

        <TopIcons />     
    </div>
    
</template>
<script lang="ts">
    import {Component, Vue, Watch} from "nuxt-property-decorator";

    @Component 
    export default class Index extends Vue {
    }
</script>

<style scoped>
.greenBg{
    background: url("@/assets/images/greenBg.png") center center / cover no-repeat;
    opacity:1;
    z-index:2;
    position:relative;
    display:block;
    overflow:hidden;
    width:100%;
    height:100%;

}
.mainBg{
    position:fixed;
    width:100%;
    height:100%;
    z-index:1;
    margin-top:-8px;
    background: url("@/assets/images/bokashiBg.jpg") center center / cover no-repeat;
    position: fixed;
    top:0;
    left:0;

}

</style>