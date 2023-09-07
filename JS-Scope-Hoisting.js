//Exercises
// #1
let global = 'global';
function scopeTest(){
  if(true){
    var funcScope = 'function';
  }else{
    const block = 'block';
  }
  console.log(funcScope)// 'function'
  // console.log(block) // not defined
  console.log(global); // 'global'
}


scopeTest()