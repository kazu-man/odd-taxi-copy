<template>
    <CommonPartsTemplate :imagePath="imagePath">

        <template v-slot:content>
            <transition name="book-banner">
                <div class="book-banner" v-if="showFlg">
                    <img        
                        src="/images/20210127_bn.png"
                    >   
                </div>
            </transition>

            <NewsTable :newsData="newsData"/>

            <CommonMoreBtn />

        </template>

    </CommonPartsTemplate>

</template>

 <script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class News extends Vue {
        showFlg:boolean = false;
        imagePath:string = '/images/news.svg';

        newsData:Object = [
            {
                id:1,
                year : 2021,
                date : 11.01,
                newsTitle : "WEBラジオ「ODDTAXI RADIO～今いい感じなんです～」#2 & #3のゲストが決定！"
            },
            {
                id:2,
                year : 2021,
                date : 10.15,
                newsTitle : "Blu-rayBOX4400セット達成記念！WEBラジオ「ODDTAXI RADIO～今いい感じなんです..."
            },
            {
                id:3,
                year : 2021,
                date : 10.17,
                newsTitle : "梅田Lateralにて10月16日(土)木下麦監督サイン会の開催が決定！"
            },
            {
                id:4,
                year : 2021,
                date : 10.17,
                newsTitle : "オッドタクシー×梅田Lateralコラボカフェ詳細を公開！"
            },
            {
                id:5,
                year : 2021,
                date : 10.06,
                newsTitle : "Twitterフォロワー4万人達成御礼！スマホ用壁紙をプレゼント！"
            },

        ]

        mounted(){
            this.showFlg = true;
        }
    }
</script>

<style scoped>

.book-banner{
    position:absolute;
    top:-100px;
    right:0;
    width:300px;
    cursor:pointer;
}
.book-banner img{
    width:100%;
}

.book-banner-enter-active{
    animation: jump-up 1s;
}

.book-banner img:hover{
    filter: brightness(1.1) !important;
}

.news-table{
    width:100%;
    margin: 40px 2% 0px 2%;
    position:relative;
    border-bottom: 1px solid rgb(30, 91, 85);
}

.news-row{
    width:100%;
    height:auto;
    border-top: 1px solid rgb(30, 91, 85);
    margin:2px 0;
    padding: 10px 70px;
    color: rgb(244, 95, 74);
    align-items: center;
    cursor:pointer;
}

.news-row:hover{
    color: rgb(30, 91, 85);
}

.news-row-head{
    margin:5px 0;
}
.news-row-body{
    padding-left:20px !important;
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 20px;
    line-height: 27px;
}


</style>