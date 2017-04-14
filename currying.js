var myArray = [
  { name: 'jano', element: 'iron' },
  { name: 'miro', element: 'copper' },
  { name: 'dezo', element: 'iron' }
];

var hasElement = function(thing, obj){
  return obj.element === thing;
}

var hasElement3 = function(thing){
  var myfunction = function(obj){
    return obj.element === thing;
  }
  return myfunction;
}

var hasIron = myArray.filter(function(x){
  return hasElement('iron', x);
});

var hasIron3 = myArray.filter(hasElement3('iron'));

console.log(hasIron);
console.log(hasIron3);
