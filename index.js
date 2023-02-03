function receivesAFunction(spy) {
    spy();
  }
  function returnsANamedFunction() {
    function returnsANamedFunction(){
        console.log("returns a function")
    }
    return returnsANamedFunction
  }
 function returnsAnAnonymousFunction() {
   return () => console.log("returns an anonymous function");
 }