<template>

    <v-btn depressed class="more-btn" v-bind:class="{marginTop : marginTopNoneFlg}" @click="commonBtnClick">
        More
    </v-btn>

</template>

 <script lang="ts">
    import { Vue, Component,Prop } from 'vue-property-decorator'

    @Component
    export default class MoreBtn extends Vue {

        @Prop({required:false,default:true})
        marginTopNoneFlg:boolean;


        commonBtnClick(){
            this.$emit("commonBtnClick")
        }

    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Yuji+Boku&display=swap');

    .more-btn{
        font-family: Montserrat, sans-serif;
        font-size: 23px;
        font-weight: 900;
        width: 187px;
        height: 45px;
        display: grid;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        border-radius: 4px;
        align-items: center;
        text-decoration: none;
        background: rgb(30, 91, 85) !important;
        color: rgb(244, 95, 74);
        user-select: none;
        cursor: pointer;
        margin:auto;
    }
    .more-btn:hover{
        background: rgb(244, 95, 74) !important;
        color: rgb(30, 91, 85);

    }
    .marginTop{
        margin-top:50px;
    }

</style>