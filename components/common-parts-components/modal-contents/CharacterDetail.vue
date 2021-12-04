<template>
    <div class="character-detail">
        <v-row>
            <v-col>
                <img :src="'/images/' + modalInfo.character.characterImg" />
            </v-col>
            <v-col>
                {{modalInfo.character.characterName}}
                {{modalInfo.character.characterVoice}}
                {{modalInfo.character.characterImg}}
                {{modalInfo.character.characterInfo}}
                {{modalInfo.character.characterDetail}}
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
    height:200px;
}
.character-detail{
    height:100%;
            display: flex;
        justify-content: center;
        align-items: center;
}
</style>
