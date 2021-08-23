function printLabel(labeledObj : {label : string}) {
    console.log(labeledObj.label);
}

let myObj = {size : 10, label : "Size 10 Object"};
printLabel(myObj);

interface LabeledValue {
    label : string;
}

function printLabel2(labeledObj2 : LabeledValue) {
    console.log(labeledObj2.label);
}

let myObj2 = {size : 10, label : "Size 20 Object"};
printLabel2(myObj2);