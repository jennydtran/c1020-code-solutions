var array = [
  {
    isbn: '394-8023-8402',
    title: 'How to Live in a Pineapple...Under the Sea',
    author: 'Sponge Bob'
  },
  {
    isbn: '094-2934-0293',
    title: 'How to Live Under a Rock',
    author: 'Patrick Star'
  },
  {
    isbn: '112-3456-7890',
    title: 'How to Deal with Annoying Coworkers',
    author: 'Squidward'
  }
];

console.log('array of books:', '\n', array);
console.log('typeOf array:', typeof array);

console.log('JSON.stringify result:', '\n', JSON.stringify(array));
console.log('typeof JSON.stringify():', typeof JSON.stringify(array));

var jsonString = '{ "number id": "45424362", "name": "Jenny Tran" }';
console.log('typeof jsonString:', typeof jsonString);
console.log('JSON.parse result:', '\n', JSON.parse(jsonString));
console.log('typeof JSON.parse():', typeof JSON.parse(jsonString));
