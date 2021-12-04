<template>

        <div class="news-table">

            <v-row no-gutters class="news-row" v-for="data in newsData" :key="data.id" @click="toNews(data)">
                    <v-col :key="'title'" cols="2" class="news-row-head">
                        <div class="sc-iwyYcG cunCrG">{{data.year}}<strong>{{data.date}}</strong></div>
                    </v-col>
                    <v-col :key="'body'" cols="10" class="news-row-body">
                            {{data.newsTitle}}
                    </v-col>
            </v-row>
        </div>

</template>

 <script lang="ts">
    import { Vue, Component,Prop } from 'vue-property-decorator'

    @Component
    export default class NewsTable extends Vue {

        @Prop({ required: true })
        newsData:any;

        toNews(data){
            console.log(data.id)

            const modalInfo:Object = {
                modalType:'newsContent',
                newsNo:'news' + data.id
            }

            this.$store.commit("store/setModalInfo",modalInfo);
        }

    }
</script>

<style scoped>

.news-table{
    width:95%;
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

.cunCrG {
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    font-size: 30px;
    line-height: 28px;
    border-right: 1px solid rgb(30, 91, 85);
}

.cunCrG strong {
    font-size: 37px;
    line-height: 34px;
    display: block;
}

@media screen and (max-width: 767px) {
    .cunCrG {
        font-weight: 900;
        font-size: 24px;
    }
     .cunCrG strong{
        font-size: 24px;
        line-height: 24px;
    }
}

@media screen and (max-width: 567px) {
    .news-row{
        padding: 5px 5px;
    }
    .cunCrG {
        font-weight: 900;
        font-size: 18px;
    }
     .cunCrG strong{
        font-size: 20px;
        line-height: 20px;
    }
    .news-row-body{
        font-weight: 900;
        font-size: 14px;
        line-height: 14px;
    }
}

</style>