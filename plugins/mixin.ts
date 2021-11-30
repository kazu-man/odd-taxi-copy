import Vue from 'vue'

Vue.mixin({
  methods: {
        afterTitleAnimationEnter(el) {
            el.style.transitionDelay = 1000 + 'ms'
        }
  },
  computed:{
    topScrollDoneFlg(){
        return this.$store.getters["store/topScrollDoneFlg"]
    }
  }

})