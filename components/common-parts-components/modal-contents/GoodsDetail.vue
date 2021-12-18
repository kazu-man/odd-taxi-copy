<template>
  <div class="goods-detail">
    <div class="goods-title">
      <div class="goods-name">
        {{ modalInfo.imageTitle }}
      </div>
      <div class="goods-name sub-name">
        発売元：　{{ modalInfo.companyName }}
      </div>
    </div>
    <div v-if="modalInfo.additionalImages != null" class="goods-images">
      <div v-for="(image , index) in modalInfo.additionalImages" :key="index" class="goods-image">
        <img :src="image.url">
      </div>
    </div>

    <div v-if="modalInfo.goodsInfo != null" class="goods-info">
      {{ modalInfo.goodsInfo }}
    </div>

    <div v-if="modalInfo.price != null" class="goods-price">
      {{ modalInfo.price }} 円
    </div>

    <a href="https://special.canime.jp/oddtaxi/">https://special.canime.jp/oddtaxi/</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

    @Component
export default class GoodsDetail extends Vue {
        @Prop({ required: true, default: null })
        modalInfo:Object;
}
</script>

<style scoped>

.goods-title{
    border-bottom: 1px rgb(244, 95, 74) solid;
}

.goods-name{
    font-size:30px;
}

.goods-image{
    text-align:center;
}

.goods-name{
    font-size:20px;
}

.sub-name{
    margin:10px 0;
}

.goods-images{
    margin:30px;
}

.goods-price{
    margin-bottom:20px;
}

.goods-images img{
    width:100%;
}
.goods-image{
    margin:20px;
}
.goods-row img,
.goods-other-image img{
    width:100%;
}

.goods-row{
    padding:0;
}

.goods-row img {
    position: sticky;
    top: 0;
    left: 0;
}

.goods-composer{
    margin: 25px 0;
    font-size: 13px;
}

.goods-staff-detail{
    height:100%;
    justify-content: center;
    align-items: center;
}

.goods-comment{
    margin-bottom:20px;
}
a{
    color:rgb(244, 95, 74) !important;
}
</style>
