
let integerValue = 9;
let stringValue = 'Anish';
let booleanValue = true;
let nullValue = null;
let undefinedValue;

function displayType(value, description) {
    console.log(`${description}: ${typeof value}`);
}

console.log('--- Data Types ---');
displayType(integerValue, 'Integer Value');
displayType(stringValue, 'String Value');
displayType(booleanValue, 'Boolean Value');
displayType(nullValue, 'Null Value');
displayType(undefinedValue, 'Undefined Value');

console.log(`\nNote: In JavaScript, 'null' is considered an ${typeof nullValue}, which is a historical bug.`);
