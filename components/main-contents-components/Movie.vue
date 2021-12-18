<template>
  <CommonPartsTemplate :image-path="imagePath">
    <template #content>
      <CommonCarousel :data="movieData" :movie-flg="true" />

      <!-- <CommonMoreBtn :marginTopNoneFlg="false" @commonBtnClick="commonBtnClick"/> -->
    </template>
  </CommonPartsTemplate>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

    @Component
export default class Movie extends Vue {
        imagePath:string = '/images/movie-title.svg';

        movieData:Object = [
          {
            imageUrl: '/images/oddtaxi-disc.jpg',
            imageTitle: 'オープニングテーマ「ODDTAXI」',
            movieUrl: 'https://www.youtube.com/watch?v=UFbx3Mg5sE0&feature=youtu.be'
          },
          {
            imageUrl: '/images/oddtaxi-disc.jpg',
            imageTitle: 'オープニングテーマ「ODDTAXI」',
            movieUrl: 'https://www.youtube.com/watch?v=UFbx3Mg5sE0&feature=youtu.be'
          },
          {
            imageUrl: '/images/oddtaxi-disc.jpg',
            imageTitle: 'オープニングテーマ「ODDTAXI」',
            movieUrl: 'https://www.youtube.com/watch?v=UFbx3Mg5sE0&feature=youtu.be'
          },
          {
            imageUrl: '/images/oddtaxi-disc.jpg',
            imageTitle: 'オープニングテーマ「ODDTAXI」',
            movieUrl: 'https://www.youtube.com/watch?v=UFbx3Mg5sE0&feature=youtu.be'
          },
          {
            imageUrl: '/images/oddtaxi-disc.jpg',
            imageTitle: 'オープニングテーマ「ODDTAXI」',
            movieUrl: 'https://www.youtube.com/watch?v=UFbx3Mg5sE0&feature=youtu.be'
          },
          {
            imageUrl: '/images/oddtaxi-disc.jpg',
            imageTitle: 'オープニングテーマ「ODDTAXI」',
            movieUrl: 'https://www.youtube.com/watch?v=UFbx3Mg5sE0&feature=youtu.be'
          },
          {
            imageUrl: '/images/oddtaxi-disc.jpg',
            imageTitle: 'オープニングテーマ「ODDTAXI」',
            movieUrl: 'https://www.youtube.com/watch?v=UFbx3Mg5sE0&feature=youtu.be'
          },
          {
            imageUrl: '/images/oddtaxi-disc.jpg',
            imageTitle: 'オープニングテーマ「ODDTAXI」',
            movieUrl: 'https://www.youtube.com/watch?v=UFbx3Mg5sE0&feature=youtu.be'
          }

        ]

        commonBtnClick () {
          const obj:Object = {
            modalType: 'movieDetail'
          }
          this.$store.commit('store/setModalInfo', obj)
        }
}
</script>

<style scoped>

</style>
