let myArray = [
  { name: 'jano', element: 'iron' },
  { name: 'miro', element: 'copper' },
  { name: 'dezo', element: 'iron' }
];

const hasElement = (thing, obj) => obj.element === thing;
const hasElement2 = thing => obj => obj.element === thing;

let hasIron = myArray.filter(x => hasElement('iron', x));
let hasIron2 = myArray.filter(hasElement2('iron'));

console.log("not curried: " + hasIron);
console.log("curried: " + hasIron2);
