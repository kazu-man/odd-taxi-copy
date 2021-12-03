
export const state = () => ({
    topScrollDoneFlg:false,
    thankYouAnimalFlg:false
});

export const mutations = {
    setTopScrollDoneFlg(state, flg){
        state.topScrollDoneFlg = flg
    },
    setThankYouAnimalFlg(state, flg){
        state.thankYouAnimalFlg = flg
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
      }
  
  }