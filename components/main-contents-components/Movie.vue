<template>

    <CommonPartsTemplate :imagePath="imagePath">
        
        <template v-slot:content >

            <CommonCarousel :data="movieData" :movieFlg="true"/>
            
            <CommonMoreBtn :marginTopNoneFlg="false"/>

        </template>

    </CommonPartsTemplate>

</template>

 <script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class Movie extends Vue {
        imagePath:string = "/images/movie-title.svg";

        movieData:Object = [
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