function a(num) {
  inner();
  if(num > 3){
    function inner() {
      console.log('inner');
    }
  }
}
a(2);

//실제 동작 
function a(num) {
  function inner() {
      console.log('inner');
  }
  inner();
  if(num > 3){
    
  }
}
a(2);
