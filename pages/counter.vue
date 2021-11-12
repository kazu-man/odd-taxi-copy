<template>
  <div>
    <p>Data: {{ myCount }}</p>
    <p>Data: {{ myWatch }}</p>
    <p>Computed: {{ countByComputed }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script lang="ts">

// Vue Property Decorator と Vue Class Component をインポートする
import { Vue, Component, Watch } from 'vue-property-decorator'

// Vue Class Component を使う
@Component
export default class CounterComponent extends Vue {

  // data
  myCount: number = 0
  myWatch: number = 0

  // 算出プロパティ (computed property)
  // myCount の値が更新されたときに呼び出される
  get countByComputed(): number {
    console.log('countByComputed')
    return this.myCount
  }

  // 監視プロパティ (watched property)
  // myCount の値が更新されたときに呼び出される
  @Watch('myCount')
  countByWatched() {
    console.log('countByWatched')
    // 2倍の値をセット
    this.myWatch = this.myCount * 2
  }

  // メソッド (method)
  // 「+」ボタンクリック時に呼ばれる
  increment() {
    console.log('increment')
    this.myCount++
  }

  // メソッド (method)
  // 「-」ボタンクリック時に呼ばれる
  decrement() {
    console.log('decrement')
    this.myCount--
  }
}
</script>