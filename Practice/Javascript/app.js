function foo () {
  a=a*2;
  a=a+3;
}

var a = 10;

foo ();

console.log(a);

foo();
foo();

console.log(a);


function foo (b) {
  a=a*2;
  a=a+b;
}
var a = 10;

foo(5);
foo(25);
foo(100);

console.log(a);

/**/
function foo (b) {
  a=a*2;
  a=a+b;
  return a/2;
}

var a = 10;
var b = foo(3);

console.log(a);

/**/
var x = 1;
while (x <=10) {
  console.log(x + " Mississippi");
  x = x + 1;
}
