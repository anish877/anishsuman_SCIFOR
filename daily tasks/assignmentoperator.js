
let x = 10;
let y = 20;

if (x > y) {
    console.log('✅ X is greater than Y.');
} else {
    console.log('✅ Y is greater than or equal to X.');
}

if (x >= 8) {
    console.log('✅ X is greater than or equal to 8.');
} else {
    console.log('❌ X is less than 8.');
}

console.log(`Is X exactly equal to 8? ${x === 8}`);

console.log(`Is X not equal to 5? ${x !== 5}`);

console.log(`Are both conditions true (X > 5 AND Y > 10)? ${x > 5 && y > 10}`);

console.log(`Is at least one condition true (Y > 20 OR X < 5)? ${y > 20 || x < 5}`);

console.log('--- Evaluation Completed ---');
