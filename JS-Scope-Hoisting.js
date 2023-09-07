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
// console.log(block) // not defined
// console.log(funcScope); // not defined
console.log(global); // 'global'

scopeTest()

// #2

hoistingTest()
function hoistingTest(){
  fistVar // not defined
  // secondLet // Cannot access 'secondLet' before initialization
  //thirdConst // Missing initializer in const declarations
  var fistVar;
  let secondLet;
  const thirdConst = 'const';
  fistVar;
  secondLet;
  thirdConst;
  console.log('test');
}
hoistingTest();

// #3 Hoist Challenge

function hoistChallenge(){
  console.log(typeof fakeFunction);
  if(true){
    function fakeFunction(){
      console.log('fake Function');
    }
  }

  console.log(typeof fakeFunction);
  fakeFunction();
}

hoistChallenge();