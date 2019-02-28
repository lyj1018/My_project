export default {
  total:(state) =>{
    let total = { num: 0, Price: 0}
    state.cars.forEach(item =>{
      total.num+=item.num
      total.Price += item.num * item.activityPrice
    })
    return total
  }
}