<template>
    <div class="disc-book-window">

        <div class="content" v-bind:class="{slide :slideFlg, movie : movieFlg}">   
            <img        
                class="cast-image"
                v-bind:class="{movie : movieFlg}"
                v-bind:src="data.imageUrl"
            >  
                
                <div v-if="movieFlg" class="movie-fog"></div>
                <v-icon
                large
                color="darken-2"
                class="play-icom"
                v-if="movieFlg"
                >
                    mdi-play-circle
                </v-icon>

        </div>
        <div class="disc-title">
            {{data.imageTitle}}
        </div>

        <div class="disc-sub-title" v-if="data.imageSubTitle != null">
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

        @Prop({required:false,default:false})
        slideFlg:boolean;

        @Prop({required:false,default:false})
        movieFlg:boolean;

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
    position:relative;
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

.slide{
    height: 100%;
    width: 100%;
}

.movie{
    height: 100%;
    width: 100%;
    aspect-ratio: 16 / 9;
}

.movie-fog{
    width:100%;
    background:gray;
    opacity:0.2;
    position:absolute;
    aspect-ratio: 16 / 9;
    top:0;
    left:0;
}

.disc-book-window:hover .movie-fog{
    opacity:0;
}

.play-icom{
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 50%;
    left: 50%;
    color: rgb(244, 95, 74);
    font-size: 50px !important;
    pointer-events: none;
}
.disc-book-window:hover .play-icom{
    font-size: 60px !important;
}
</style>
