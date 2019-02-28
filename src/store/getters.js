//数据的获取者

let getters = {
  loadingFlag: (state) => {
    return state.loadingFlag
  },
  username: (state) => {
    return state.username[0]
  }
}

export default getters
