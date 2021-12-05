<template>
    <div class="character-detail">
        <v-row class="character-row">
            <v-col cols="12" sm="4" style="text-align: center;">
                <img :src="'/images/' + modalInfo.character.characterImg" />
            </v-col>
            <v-col>

                <div class="character-title">
                    {{modalInfo.character.characterName}}
                    <span>
                        {{modalInfo.character.characterVoice}}
                    </span>

                </div>
                <div class="character-info">
                    {{modalInfo.character.characterInfo}}

                </div>
                <div class="character-info-detail">
                    {{modalInfo.character.characterDetail}}

                </div>

            </v-col>
        </v-row>
    </div>

</template>

 <script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

    @Component
    export default class CharacterDetail extends Vue {

        @Prop({required:true, default:null})
        modalInfo:Object;
    }
</script>

<style scoped>
img{
    max-height: 300px;
}
.character-detail{
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.character-row{
    justify-content: center;
    align-items: center;
}

.character-title{
    font-size: 40px;
    font-weight: 900;
    border-bottom: 1px rgb(244, 95, 74) solid;
    margin-bottom:20px;
}
.character-title span{
    font-size: 20px;
    font-weight: normal;
}
.character-info{
    background: rgb(244, 95, 74);
    color: rgb(30, 91, 85);
    font-size: 15px;
    padding: 3px;
    text-align: center;
    margin-bottom:20px;
    max-width:250px;
}

</style>
