<template>
    <CommonPartsTemplate :imagePath="imagePath">
        
        <template v-slot:content >

            <div class="videos">
                  <v-container>
                    <v-row no-gutters>
                        <v-col
                            v-for="n in discData"
                            :key="n.id"
                            cols="12"
                            sm="4"
                        >
                            <DiscBookWindow :data="n"/>
                        </v-col>
                    </v-row>
                </v-container>

            </div>

            <CommonMoreBtn />

        </template>

    </CommonPartsTemplate>

</template>

 <script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class DiscBook extends Vue {
        imagePath:string = "/images/disk-book-title.svg";

        discData:Object = [
            {
                id:1,
                imageUrl:"/images/oddtaxi-disc.jpg",
                imageTitle:"オープニングテーマ「ODDTAXI」",
                imageSubTitle:"歌：スカートとPUNPEE"
            },
            {
                id:2,
                imageUrl:"/images/sugarless_kiss-disc.jpg",
                imageTitle:"エンディングテーマ「シュガーレス・キッス」",
                imageSubTitle:"歌：三森すずこ"
            },
            {
                id:3,
                imageUrl:"/images/sound-track-disc.jpg",
                imageTitle:"ODDTAXI ORIGINAL SOUNDTRACK",
                imageSubTitle:"SUMMIT (PUNPEE×VaVa×OMSB)"
            },
        ]

    }
</script>

<style scoped>

</style>