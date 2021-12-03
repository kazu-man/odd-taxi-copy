import Vue from 'vue'

Vue.mixin({
  methods: {
        afterTitleAnimationEnter(el) {
            el.style.transitionDelay = 1000 + 'ms'
        },
        toTwitter(){
            const url = 'https://twitter.com/intent/tweet?text=TV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E3%82%AA%E3%83%83%E3%83%89%E3%82%BF%E3%82%AF%E3%82%B7%E3%83%BC%E3%80%8D%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88%202021%E5%B9%B44%E6%9C%88%E3%81%8B%E3%82%89%E3%83%86%E3%83%AC%E3%83%93%E6%9D%B1%E4%BA%AC%E3%83%BBAT-X%E3%81%AB%E3%81%A6%E6%94%BE%E9%80%81%E9%96%8B%E5%A7%8B%20%23%E3%82%AA%E3%83%83%E3%83%89%E3%82%BF%E3%82%AF%E3%82%B7%E3%83%BC%20https%3A%2F%2Foddtaxi.jp&related=oddtaxi_'
            window.open(url, '_blank')
        },
        toLine(){
            const url = 'https://access.line.me/oauth2/v2.1/login?loginState=O0S0TpOH7RwdYyGsULTMAk&loginChannelId=1446101138&returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fscope%3Dopenid%2Bprofile%2Bfriends%2Bgroups%2Btimeline.post%2Bmessage.write%26response_type%3Dcode%26state%3Dbb606a9fd370c895a81db13d0fea71%26redirect_uri%3Dhttps%253A%252F%252Fsocial-plugins.line.me%252Flineit%252FloginCallback%253FreturnUrl%253Dhttps%25253A%25252F%25252Fsocial-plugins.line.me%25252Flineit%25252Fshare%25253Furl%25253D%252526text%25253DTV%252525E3%25252582%252525A2%252525E3%25252583%2525258B%252525E3%25252583%252525A1%252525E3%25252580%2525258C%252525E3%25252582%252525AA%252525E3%25252583%25252583%252525E3%25252583%25252589%252525E3%25252582%252525BF%252525E3%25252582%252525AF%252525E3%25252582%252525B7%252525E3%25252583%252525BC%252525E3%25252580%2525258D%252525E5%25252585%252525AC%252525E5%252525BC%2525258F%252525E3%25252582%252525B5%252525E3%25252582%252525A4%252525E3%25252583%25252588%252525202021%252525E5%252525B9%252525B44%252525E6%2525259C%25252588%252525E3%25252581%2525258B%252525E3%25252582%25252589%252525E3%25252583%25252586%252525E3%25252583%252525AC%252525E3%25252583%25252593%252525E6%2525259D%252525B1%252525E4%252525BA%252525AC%252525E3%25252583%252525BBAT-X%252525E3%25252581%252525AB%252525E3%25252581%252525A6%252525E6%25252594%252525BE%252525E9%25252580%25252581%252525E9%25252596%2525258B%252525E5%252525A7%2525258B%25252520%25252523%252525E3%25252582%252525AA%252525E3%25252583%25252583%252525E3%25252583%25252589%252525E3%25252582%252525BF%252525E3%25252582%252525AF%252525E3%25252582%252525B7%252525E3%25252583%252525BC%2525250Ahttps%2525253A%2525252F%2525252Foddtaxi.jp%252526from%25253Dline_scheme%26client_id%3D1446101138#/'
            window.open(url, '_blank')
        },
        toInstagram(){
            const url = 'https://www.instagram.com/oddtaxi_/'
            window.open(url, '_blank')
        },
        toTikTok(){
            const url = 'tiktok.com/@oddtaxi'
            window.open(url, '_blank')
        }
  
  },
  computed:{
    topScrollDoneFlg(){
        return this.$store.getters["store/topScrollDoneFlg"]
    },
    thankYouAnimalFlg(){
        return this.$store.getters["store/thankYouAnimalFlg"]
    },
    getNewsContent(){
        return this.$store.getters["store/getNewsContent"];
    }
  }

})