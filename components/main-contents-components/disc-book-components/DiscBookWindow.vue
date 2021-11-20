<template>
    <div class="disc-book-window">

        <div class="content">   
            <img        
                class="cast-image"
                v-bind:src="data.imageUrl"
            >  

        </div>
        <div class="disc-title">
            {{data.imageTitle}}
        </div>

        <div class="disc-sub-title">
            {{data.imageSubTitle}}
        </div>

    </div>

</template>

 <script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

    @Component
    export default class DiscBookWindow extends Vue {

        @Prop({required:true,default:null})
        data:Object;


    }
</script>

<style scoped >
.disc-book-window{
    width:100%;
    height:100%;
    padding:5%;
    cursor: pointer;
}
.content{
    width:200px;
    height:200px;
    margin:auto;
    color:white;
}
.content img{
    width:100%;
}
.disc-book-window:hover{
    filter: brightness(1.1) !important;
}
.disc-title{
    font-size: 16px;
    font-weight: 900;
    margin-top:10px;
}
.disc-sub-title{
    font-size: 14px;
}
.disc-title,.disc-sub-title{
    color: rgb(244, 95, 74);
    font-family: "Noto Sans JP", sans-serif;
    text-align: center;
}

</style>
