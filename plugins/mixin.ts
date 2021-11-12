import Vue from 'vue'

Vue.mixin({
  methods: {
        afterTitleAnimationEnter(el) {
            el.style.transitionDelay = 6000 + 'ms'
        }

  }
})