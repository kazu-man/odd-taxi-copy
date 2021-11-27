import Vue from 'vue'

Vue.mixin({
  methods: {
        afterTitleAnimationEnter(el) {
            el.style.transitionDelay = 7000 + 'ms'
        }

  }
})