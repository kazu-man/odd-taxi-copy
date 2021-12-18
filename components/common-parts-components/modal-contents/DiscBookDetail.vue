<template>
  <div class="disc-detail">
    <v-row class="disc-row">
      <v-col cols="12" sm="5" style="text-align: center;">
        <img :src="modalInfo.imageUrl">
      </v-col>
      <v-col>
        <div class="disc-info">
          <div class="disc-name">
            {{ modalInfo.imageTitle }}
          </div>

          <div class="disc-singer">
            {{ modalInfo.imageSubTitle }}
          </div>

          <div class="disc-composer">
            作詞・作曲・編曲： {{ modalInfo.composer }}<br>
            4.7 [wed]Digital Single Release
          </div>

          <div v-if="modalInfo.otherImageUrl != null" class="disc-other-image">
            <img :src="modalInfo.otherImageUrl">
          </div>

          <div v-if="modalInfo.comment != null" class="disc-comment">
            [▼COMMENT]<br>

            {{ modalInfo.comment }}
          </div>
        </div>
        <!-- <div class="character-info">
                    {{modalInfo.character.characterInfo}}

                </div>
                <div class="character-info-detail">
                    {{modalInfo.character.characterDetail}}

                </div> -->
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

    @Component
export default class DiscBookDetail extends Vue {
        @Prop({ required: true, default: null })
        modalInfo:Object;
}
</script>

<style scoped>

.disc-image{
    text-align:center;
}

.disc-name{
    font-size:20px;
}

.disc-row img,
.disc-other-image img{
    width:100%;
}

.disc-row{
    padding:0;
}

.disc-row img {
    position: sticky;
    top: 0;
    left: 0;
}

.disc-composer{
    margin: 25px 0;
    font-size: 13px;
}

.disc-staff-detail{
    height:100%;
    justify-content: center;
    align-items: center;
}

.disc-comment{
    margin-bottom:20px;
}

</style>
