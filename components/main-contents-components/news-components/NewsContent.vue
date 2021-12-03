<template>
<div class="container" @click.self="close">
    <svg @click="close" v-if="!imgSwitch" class="sc-kstrdz btjemE sc-fpIgQR gvLCNP" id="btn.svg" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
        <rect id="長方形_616" data-name="長方形 616" width="52" height="52" class="sc-hBEYos dWjUC"></rect>
        <path id="シェイプ_3" data-name="シェイプ 3" d="M38.994,11.995H31.515L26,20.04l-5.514-8.045H13.007l9.254,13.5L13.007,39h7.479L26,30.952,31.515,39h7.479L29.74,25.5Z" class="sc-fodVxV cYLuAZ"></path>
    </svg>
    <div id="top" >
       
            <div class="content">

                <div class="text-block">

                  <component :is="'news' + getNewsContent"></component>

                </div>
            </div>

    </div>
</div>
    
</template>
<script lang="ts">
    import {Component, Vue, Watch} from "nuxt-property-decorator";
    import {Route} from 'vue-router'

    @Component
    export default class NewsIndex extends Vue {

        close(){
            this.$store.commit("store/setNewsContent",null);
        }

    }
</script>

<style scoped>

    #top{
        background: rgb(30, 91, 85);
        color: rgb(244, 95, 74);
        height:100%;
        display: block;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:5%;
        font-family: "Noto Sans JP", sans-serif;

    }

    .content{
        min-height: 100%;
        overflow: scroll;
    }
    .text-block{
        height:200px;
    }
  .container {
    padding:10% 3% !important;
    width:100% !important;
    height:100% !important;
    background: black;
    position: fixed;
    height: 100%;
    top: 0;
    z-index: 999;
  }
  .cYLuAZ {
    fill: rgb(244, 95, 74);
}
.dWjUC{
    stroke: rgb(128, 113, 111);
    stroke-width: 4px;
}

.btjemE:hover rect {
    fill: rgb(30, 91, 85);
}
svg {
    cursor:pointer;
    position:absolute;
    top:1%;
    right:3%;
}

</style>

<style>
    .bfDGHw {
        font-family: Montserrat, sans-serif;
        font-weight: 900;
        font-size: 26px;
        margin-bottom: 16px;
    }

    .cgpajZ {
        font-weight: 900;
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 16px;
    }

    .wp-content p {
        display: block;
        margin-block: 1em;
        margin-inline: 0px;
    }
    
</style>