<template>
    <CommonPartsTemplate >
        <template v-slot:mainImage>

            <img        
                class="title"
                src="/images/about-title.svg"
            >  

        </template>
        
        <template v-slot:content>
            <div class="about-content">
                <AboutSvg />
            </div>
        </template>

    </CommonPartsTemplate>

</template>

 <script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class News extends Vue {
        showFlg:boolean = false;


        mounted(){
            this.showFlg = true;
        }
    }
</script>

<style scoped>
    .about-content{
        margin-top:20px;
        padding:10px;
    }



</style>