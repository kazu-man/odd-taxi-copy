<template>

    <CommonPartsTemplate :imagePath="imagePath">
        
        <template v-slot:content >

            <CommonCarousel :data="goodsData" :slideFlg="true"/>

            <CommonMoreBtn :marginTopNoneFlg="false" @commonBtnClick="commonBtnClick"/>

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
                imageUrl:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png",
                imageTitle:"タンブラー",
                companyName:"ポニーキャニオン",
                modalType:"goodsDetail",
                goodsInfo:"φ80×142mm",
                price:2200,
                additionalImages:[
                    { 
                        url:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png"
                    },
                    { 
                        url:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png"
                    },
                    { 
                        url:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png"
                    },
                ]

            },
            {
                imageUrl:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png",
                imageTitle:"タンブラー",
                companyName:"ポニーキャニオン",
                modalType:"goodsDetail",
                goodsInfo:"φ80×142mm",
                price:2200,
                additionalImages:[
                    { 
                        url:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png"
                    },
                    { 
                        url:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png"
                    },
                    { 
                        url:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png"
                    },
                ]

            },
            {
                imageUrl:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png",
                imageTitle:"タンブラー",
                companyName:"ポニーキャニオン",
                modalType:"goodsDetail",
                goodsInfo:"φ80×142mm",
                price:2200,
                additionalImages:[
                    { 
                        url:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png"
                    },
                    { 
                        url:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png"
                    },
                    { 
                        url:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png"
                    },
                ]

            },
            {
                imageUrl:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png",
                imageTitle:"タンブラー",
                companyName:"ポニーキャニオン",
                modalType:"goodsDetail",
                goodsInfo:"φ80×142mm",
                price:2200,
                additionalImages:[
                    { 
                        url:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png"
                    },
                    { 
                        url:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png"
                    },
                    { 
                        url:"/images/【オッドタクシー】_タンブラー_商品画像_1029_04-1024x1024.png"
                    },
                ]
            },
        ]
        commonBtnClick(){
            const obj:Object = {
                modalType:'goodsMainDetail',
            }
            this.$store.commit("store/setModalInfo",obj);
        }


    }
</script>

<style scoped>

</style>