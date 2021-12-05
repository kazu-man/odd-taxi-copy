<template>
    <div class="cast-staff-detail">

            <div class="cast-title">
                <div class="cast-position">
                    {{modalInfo.castStaff.position}}
                </div>

                <div class="cast-name">
                    {{modalInfo.castStaff.castName}}
                </div>
            </div>

            <div class="cast-image">
                <img :src="'/images/' + modalInfo.castStaff.castImage" />
            </div>

            <div class="cast-comment" v-if="modalInfo.castStaff.castComment != ''">
                [COMMENT]<br />
                {{modalInfo.castStaff.castComment}}
            </div>

            <div class="cast-prfile" v-if="modalInfo.castStaff.castProfile != ''">
                [PROFILE]<br />
                {{modalInfo.castStaff.castProfile}}
            </div>

    </div>

</template>

 <script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

    @Component
    export default class CastStaffDetail extends Vue {

        @Prop({required:true, default:null})
        modalInfo:Object;
    }
</script>

<style scoped>

.cast-title{
    border-bottom: 1px rgb(244, 95, 74) solid;
}

.cast-position,
.cast-image,
.cast-name{
    text-align:center;
}

.cast-name{
    font-size:30px;
}

.cast-image img{
    max-height: 300px;
}

.cast-staff-detail{
    height:100%;
    justify-content: center;
    align-items: center;
}

.cast-comment{
    margin-bottom:20px;
}

</style>
