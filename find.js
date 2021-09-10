var y = ['banana', 'uva'];

y.length;
y[y.length-1];
y.push("pera");
for(var e of y){
  console.log(e);
}
var f = y.find(function(a){
  return a === 'uva'
});
console.log("find:");
console.log(f);
if (f){
  console.log("exists");
}
else{
  console.log("not exists");
}
console.log("find com lambda");
var d = y.find(c => c === "uva");
console.log(d);
