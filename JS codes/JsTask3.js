const numdiv = (number) => {
    numArray = []
    for(count=1; count<=number; count++){
        value =  count;
        stringValue = [];
        if (count%2 == 0){
            stringValue.push("yu");

        }
        if (count%3 == 0){
            stringValue.push("gi");
        }
        if (count%5 == 0){
            stringValue.push("oh");
        }
        if (stringValue.length != 0){
            value = stringValue.join("-");
        }
        else {
            value = count
        }
        numArray.push(value);
        
    }
    console.log(numArray);
    return numArray;
}
numdiv(100);
numdiv(30);