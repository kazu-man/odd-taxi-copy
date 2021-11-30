
export const state = () => ({
    topScrollDoneFlg:false
});

export const mutations = {
    setTopScrollDoneFlg(state, flg){
        state.topScrollDoneFlg = flg
    },

}

export const actions = {

}


export const getters = {
    topScrollDoneFlg (state) {
      return state.topScrollDoneFlg
    }
  }