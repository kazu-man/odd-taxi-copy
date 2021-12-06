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

            <CommonMoreBtn @commonBtnClick="commonBtnClick"/>

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
                imageSubTitle:"歌：スカートとPUNPEE",
                modalType:"discBookDetail",
                otherImageUrl:"/images/sugarless_kiss-disc.jpg",
                composer:"PandaBoY",
                comment:"二階堂ルイ役の声優としても出演させていただいているアニメ”オッドタクシー”ですが、この度アーティスト三森すずことしてもエンディング主題歌”シュガーレス・キッス”を歌わせていただくことになりました♪言葉遊びとメロディがポップでシュガーな楽曲になっています♪MVでも楽曲の可愛い世界観を楽しんでいただきたいです！アニメと共にたくさんの方のお耳と心に届きますように♡"

            },
            {
                id:2,
                imageUrl:"/images/sugarless_kiss-disc.jpg",
                imageTitle:"エンディングテーマ「シュガーレス・キッス」",
                imageSubTitle:"歌：三森すずこ",
                modalType:"discBookDetail",
                otherImageUrl:"/images/sugarless_kiss-disc.jpg",
                composer:"PandaBoY",
                comment:"二階堂ルイ役の声優としても出演させていただいているアニメ”オッドタクシー”ですが、この度アーティスト三森すずことしてもエンディング主題歌”シュガーレス・キッス”を歌わせていただくことになりました♪言葉遊びとメロディがポップでシュガーな楽曲になっています♪MVでも楽曲の可愛い世界観を楽しんでいただきたいです！アニメと共にたくさんの方のお耳と心に届きますように♡"
            },
            {
                id:3,
                imageUrl:"/images/sound-track-disc.jpg",
                imageTitle:"ODDTAXI ORIGINAL SOUNDTRACK",
                imageSubTitle:"SUMMIT (PUNPEE×VaVa×OMSB)",
                modalType:"discBookDetail",
                otherImageUrl:"/images/sugarless_kiss-disc.jpg",
                composer:"PandaBoY",
                comment:"二階堂ルイ役の声優としても出演させていただいているアニメ”オッドタクシー”ですが、この度アーティスト三森すずことしてもエンディング主題歌”シュガーレス・キッス”を歌わせていただくことになりました♪言葉遊びとメロディがポップでシュガーな楽曲になっています♪MVでも楽曲の可愛い世界観を楽しんでいただきたいです！アニメと共にたくさんの方のお耳と心に届きますように♡"

            },
        ]

        commonBtnClick(){
            const obj:Object = {
                modalType:'discBookMailDetail',
            }
            this.$store.commit("store/setModalInfo",obj);
        }


    }
</script>

<style scoped>

</style>