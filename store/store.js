
export const state = () => ({
    topScrollDoneFlg:false,
    thankYouAnimalFlg:false,
    newsContent:null
});

export const mutations = {
    setTopScrollDoneFlg(state, flg){
        state.topScrollDoneFlg = flg
    },
    setThankYouAnimalFlg(state, flg){
        state.thankYouAnimalFlg = flg
    },
    setNewsContent(state, num){
        state.newsContent = num
    },

}

export const actions = {

}


export const getters = {
    topScrollDoneFlg (state) {
      return state.topScrollDoneFlg
    },
    thankYouAnimalFlg (state) {
        return state.thankYouAnimalFlg
      },
    getNewsContent (state) {
       return state.newsContent
    } 
  }