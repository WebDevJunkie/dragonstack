const Dragon = require('./dragon');

var baloo = new Dragon({ birthdate: new Date(), nickname: 'baloo' });

setTimeout(() => {
    const fooey = new Dragon({ birthdate: new Date(), nickname: 'fooey' });
    console.log('fooey: ', fooey);
}, 3000);

console.log('baloo: ', baloo);
