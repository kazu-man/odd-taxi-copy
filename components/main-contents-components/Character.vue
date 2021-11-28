<template>
    <CommonPartsTemplate :imagePath="imagePath" :imageFullWidthFlg="true">
        
        <template v-slot:content >

            <CharacterRelation />

        </template>

    </CommonPartsTemplate>

</template>

 <script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class Character extends Vue {
        showFlg:boolean = false;
        imagePath:string = "/images/character-title.svg";


    }
</script>

<style scoped>

    .story-subtitle h2{
        color: rgb(30, 91, 85);
        padding: 20px 5%;
        font-weight: 900;
        font-size: 40px;
        font-family: "Noto Sans JP", sans-serif;
        text-align:center;

    }

    .story-plot{
        text-align:center;
        color: rgb(244, 95, 74);
        font-weight: 900;
        font-size: 16px;
        line-height: 28px;
        padding:10px 0;
        font-family: "Noto Sans JP", sans-serif;
    }
</style>