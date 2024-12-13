function manipulateArray(inputArray) {
    inputArray.push("VOLVO");
    
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i].toUpperCase();
    }
    
    return inputArray;
}
manipulateArray("string1","string2","string4");
