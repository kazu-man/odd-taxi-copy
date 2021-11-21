<template>

        <div class="main-content" ref="goToTop">

            <GoToTop :goToTopShowFlg="goToTopShowFlg"/>

            <div class="black-bg" >
                <News />
            </div>

            <div class="translucent-bg">
                <About />
            </div>

            <div class="black-bg" >
                <Story />
            </div>

            <div class="translucent-bg">
                <Character />
            </div>

            <div class="black-bg" >
                <CastStaff />
            </div>

            <div class="translucent-bg">
                <DiscBook />
            </div>

            <div class="black-bg" >
                <Goods />
            </div>

            <div style="height:1000px" />
            <div class="black-bg" style="height:1000px" />
            <div class="black-bg" style="height:1000px" />

        </div>

</template>

 <script lang="ts">
 import { Vue, Component, Prop } from 'vue-property-decorator'


 @Component
 export default class MainContents extends Vue {

        goToTopShowFlg:boolean = false;

        refs():any {
            return this.$refs;
        }

        mounted(){
            const imageElement = this.refs().goToTop;
            window.addEventListener('scroll', this.onScroll)

        }

        onScroll(){
            const imageElement = this.refs().goToTop;

            const innerHeight = window.innerHeight 
            const targetHeight = imageElement.getBoundingClientRect().top;

            if (targetHeight < innerHeight) { 
                this.goToTopShowFlg = true;
                return;
            }

            this.goToTopShowFlg = false;

        }
        

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