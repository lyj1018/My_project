//动作的触发者

import * as types from './const'
import router from '../router'
let actions = {
  initUser({
    commit
  }) {
    //当数据更新后进行初始化
    let users = getUsers();
    commit(types.REGISTER, users)
  },
  register({
    commit
  }, user) {
    let users = getUsers();
    users.push(user)
    localStorage.users = JSON.stringify(users)
    commit(types.REGISTER, users)
    router.push('./login')
  },
  initUsername({
    commit
  }) {
    //当数据更新后进行初始化
    let username = getUsername();
    commit(types.STORAGE_USERNAME, username)
  },
  login({
    commit
  }, user) {
    let users = getUsers();
    let username = getUsername();
    users.forEach((item, index) => {
      if (item.username === user.username && item.password === user.password) {
        username.push(user.username)
        localStorage.username = JSON.stringify(username)
        commit(types.STORAGE_USERNAME, username)
        router.push('./mine')
      }
    })
    commit(types.LOGIN, users)
  },
  logout({commit},username){
    localStorage.username = ''
    commit(types.LOGOUT, username)
  }
}

export default actions
function getUsers() {
  return JSON.parse(localStorage.users ? localStorage.users : '[]')
}

function getUsername() {
  return JSON.parse(localStorage.username ? localStorage.username : '[]')
}
