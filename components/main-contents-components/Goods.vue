<template>

    <CommonPartsTemplate :imagePath="imagePath">
        
        <template v-slot:content >

            <CommonCarousel :data="goodsData"/>

            <CommonMoreBtn />

        </template>

    </CommonPartsTemplate>

</template>

 <script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class Goods extends Vue {
        imagePath:string = "/images/goods-title.svg";

        goodsData:Object = [
            {
                imageUrl:"/images/oddtaxi-disc.jpg",
                imageTitle:"オープニングテーマ「ODDTAXI」",
            },
            {
                imageUrl:"/images/oddtaxi-disc.jpg",
                imageTitle:"オープニングテーマ「ODDTAXI」",
            },
            {
                imageUrl:"/images/oddtaxi-disc.jpg",
                imageTitle:"オープニングテーマ「ODDTAXI」",
            },
                        {
                imageUrl:"/images/oddtaxi-disc.jpg",
                imageTitle:"オープニングテーマ「ODDTAXI」",
            },
                        {
                imageUrl:"/images/oddtaxi-disc.jpg",
                imageTitle:"オープニングテーマ「ODDTAXI」",
            },
            {
                imageUrl:"/images/oddtaxi-disc.jpg",
                imageTitle:"オープニングテーマ「ODDTAXI」",
            },
                        {
                imageUrl:"/images/oddtaxi-disc.jpg",
                imageTitle:"オープニングテーマ「ODDTAXI」",
            },
                        {
                imageUrl:"/images/oddtaxi-disc.jpg",
                imageTitle:"オープニングテーマ「ODDTAXI」",
            },

        ]


    }
</script>

<style scoped>

</style>