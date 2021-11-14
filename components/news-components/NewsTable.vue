<template>

        <div class="news-table">

            <v-row no-gutters class="news-row" v-for="data in newsData" :key="data.id">
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

    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Yuji+Boku&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');

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

</style>