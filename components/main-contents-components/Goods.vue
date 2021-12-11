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
                imageUrl:"/images/water_bottle.png",
                imageTitle:"タンブラー",
                companyName:"ポニーキャニオン",
                modalType:"goodsDetail",
                goodsInfo:"φ80×142mm",
                price:2200,
                additionalImages:[
                    { 
                        url:"/images/water_bottle.png"
                    },
                    { 
                        url:"/images/water_bottle.png"
                    },
                    { 
                        url:"/images/water_bottle.png"
                    },
                ]

            },
            {
                imageUrl:"/images/water_bottle.png",
                imageTitle:"タンブラー",
                companyName:"ポニーキャニオン",
                modalType:"goodsDetail",
                goodsInfo:"φ80×142mm",
                price:2200,
                additionalImages:[
                    { 
                        url:"/images/water_bottle.png"
                    },
                    { 
                        url:"/images/water_bottle.png"
                    },
                    { 
                        url:"/images/water_bottle.png"
                    },
                ]

            },
            {
                imageUrl:"/images/water_bottle.png",
                imageTitle:"タンブラー",
                companyName:"ポニーキャニオン",
                modalType:"goodsDetail",
                goodsInfo:"φ80×142mm",
                price:2200,
                additionalImages:[
                    { 
                        url:"/images/water_bottle.png"
                    },
                    { 
                        url:"/images/water_bottle.png"
                    },
                    { 
                        url:"/images/water_bottle.png"
                    },
                ]

            },
            {
                imageUrl:"/images/water_bottle.png",
                imageTitle:"タンブラー",
                companyName:"ポニーキャニオン",
                modalType:"goodsDetail",
                goodsInfo:"φ80×142mm",
                price:2200,
                additionalImages:[
                    { 
                        url:"/images/water_bottle.png"
                    },
                    { 
                        url:"/images/water_bottle.png"
                    },
                    { 
                        url:"/images/water_bottle.png"
                    },
                ]
            },
                        {
                imageUrl:"/images/water_bottle.png",
                imageTitle:"タンブラー",
                companyName:"ポニーキャニオン",
                modalType:"goodsDetail",
                goodsInfo:"φ80×142mm",
                price:2200,
                additionalImages:[
                    { 
                        url:"/images/water_bottle.png"
                    },
                    { 
                        url:"/images/water_bottle.png"
                    },
                    { 
                        url:"/images/water_bottle.png"
                    },
                ]
            },
                        {
                imageUrl:"/images/water_bottle.png",
                imageTitle:"タンブラー",
                companyName:"ポニーキャニオン",
                modalType:"goodsDetail",
                goodsInfo:"φ80×142mm",
                price:2200,
                additionalImages:[
                    { 
                        url:"/images/water_bottle.png"
                    },
                    { 
                        url:"/images/water_bottle.png"
                    },
                    { 
                        url:"/images/water_bottle.png"
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