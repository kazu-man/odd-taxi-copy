<template>

        <div class="main-content">

            <div class="black-bg" >
                <News />
            </div>

            <div class="translucent-bg">
                <About />
            </div>

            <div class="black-bg" style="height:1000px" />
            <div style="height:1000px" />
            <div class="black-bg" style="height:1000px" />

        </div>

</template>

 <script lang="ts">
 import { Vue, Component, Prop } from 'vue-property-decorator'


 @Component
 export default class MainContents extends Vue {

    //computed
    // get titleHeight(){
    //     return this.titlePosition + '%'
    // }

    // mounted() {
 
    // }

 }
 </script>

<style scoped>
p{
    color:white;
    word-break:break-all;
}

.main-content{
    height:100%;
    display:block;
    z-index: 2;
    position: relative;
    margin-top:-8px;
}

.black-bg{
    background:black;
}

.translucent-bg{
    background: rgb(12 12 12 / 30%);
}

</style>