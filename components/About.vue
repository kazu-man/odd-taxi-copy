<template>
    <CommonPartsTemplate :imagePath="imagePath">
        
        <template v-slot:content >
            <div class="about-content" ref="aboutContent">
                <AboutSvg v-if="showFlg"/>
            </div>

            <CommonMoreBtn />

        </template>

    </CommonPartsTemplate>

</template>

 <script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class About extends Vue {
        showFlg:boolean = false;
        imagePath:string = "/images/about-title.svg";


        mounted(){
            
            window.addEventListener('scroll', this.onScroll)

        }

        refs():any {
            return this.$refs;
        }
        
        onScroll () {
         const imageElement = this.refs().aboutContent;

          const innerHeight = window.innerHeight 
          const targetHeight = imageElement.getBoundingClientRect().top;

          if (targetHeight > 0 && targetHeight < (innerHeight * 0.8) && !this.showFlg) { 
              console.log("show about")
            this.showFlg = true;
          }
        }


    }
</script>

<style scoped>
    .about-content{
        margin-top:20px;
        padding:10px;
        min-height:300px;

    }



</style>