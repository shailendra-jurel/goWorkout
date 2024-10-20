// console.log(this);

var person = {
    name :  'Shailendra' ,
    run :  function(){
        console.log(this.name + "  run")
    }
}
var x = person.run;

x();

// console.log(person.run());
// person.run();
// console.log(x);
// console.log(x());