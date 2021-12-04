
export const state = () => ({
    topScrollDoneFlg:false,
    thankYouAnimalFlg:false,
    modalInfo:null
});

export const mutations = {
    setTopScrollDoneFlg(state, flg){
        state.topScrollDoneFlg = flg
    },
    setThankYouAnimalFlg(state, flg){
        state.thankYouAnimalFlg = flg
    },
    setModalInfo(state, obj){
        state.modalInfo = obj
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
    getModalInfo (state) {
        return state.modalInfo
     } ,
 
  }