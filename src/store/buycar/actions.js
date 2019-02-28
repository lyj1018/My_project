






//动作的触发者

import { SYNC_UPDATE } from './const'
import router from '../../router'





export default{
  //初始化
  initCar( { commit } ){
    //当数据更新后执行初始化，出现一个cars
    let cars = getCars();//要初始化就要更新数据
    commit(SYNC_UPDATE, cars ) 
  },
    addCar( {commit},list){
        
            let cars = getCars();//获取本地存储的数据

            // some(callback) 返回的是true或false
            let isHas = cars.some( items => {
                if(items.productId === list.productId){
                    items.num ++
                    return true
                }
            })
            if( !isHas) {
                list.num = 1
                cars.push( list )
            }
            localStorage.cars = JSON.stringify( cars )
            commit(SYNC_UPDATE,cars)
    

       
    },
    reduceCar( {commit},list ){
        
            let cars = getCars();
        cars = cars.filter((item) => {
           if(item.productId === list.productId){
               item.num--
               if(item.num <= 0){
                   return false
               }
               return true
           }
           return true
        })
       localStorage.cars = JSON.stringify(cars)
       commit(SYNC_UPDATE,cars) 
        
    }
}


function getCars(){
    return JSON.parse(localStorage.cars? localStorage.cars : '[]')
}