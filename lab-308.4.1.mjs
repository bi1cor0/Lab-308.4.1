//Part 1 recontextualize previous lab's code

//create a loop that has var c go through the string, logging in the characters. if c encounters a comma, uptick a counter var. Then check to see if the counter is at a specific number.
//Once var count reaches a number, print whatever c has logged into the array index. 
// if encounter a \n, or the placeholder has reached the end of the string, print whatever the array has, then reset count to 10 empty the array and continue with loop. 

let row1 =[]; //create empty array, but with 4 cells with empty strings.
let content = ``;
let placehold = 0; //create a placeholder var that counts the length of the string csv
let c =''; //empty string reader
const csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
//
// commenting this out so that part 2 can go off without any other hitch. 
//for (c of csv) { //for loop with string c of csv reading through the string csv.   
//    placehold++;
//    if (c === `,`) { //have the string c go through the csv string until it reaches a comma.
//        row1.push(content);
//        content = ``;
//    } else if(c === `\n`){ //if c encounters \n 
//        row1.push(content)
//        console.log(row1); //print out what was recorded up to the point of \n or the end of the string.
//        row1 =[] //empty the array
//        content = ``;
//    } else if (placehold === csv.length){ //now if the string has ended, placehold should be the length of the string. if the c is at the string's end, input all the text from that point into the array.
//        content += c; //print the last character.
//        row1.push(content); //count should still be at 3, but this line should also print out the last character in the string. 
//        console.log(row1); //print out what was recorded up to the point of \n or the end of the string.
//        row1 =[]
//        content = ``;
//    } else{ //if c doesn't encounter a comma, check to see if count equals one of the following:
//        content += c;        
//    }
//    
//} 

//Part 2
//create a loop that will run the string to create a 2D array. Each row is it's own array. 

placehold = 0;
let bigArray = [];

for (c of csv){
    placehold++;
    if (c === ','){
        row1.push(content);
        content = ``;
    } else if (c === `\n`){
        row1.push(content);
        bigArray.push(row1);
        row1 =[];
        content = ``;
    } else if (placehold === csv.length){
        content += c;
        row1.push(content);
        bigArray.push(row1);
        row1 =[];
        content = ``;
    }
    else{
        content += c;
    }
} //console.log(bigArray)

//Part 3
//convert the bigArray so that each row becomes an object. Each object has a key name of each column in the array. And gather all objects into a new array.
//Ex.: {id: 42, name: Bruce, occupation: Knight, age: 41}
//this algorithim should have the same concept as the previous exercises. 


let keys = bigArray[0].map(v => v.toLowerCase()); //set up an array that is a copy of the first row of the bigArray but written in lowercase.
let objects = []; //set up empty array to store the objects in it when created. 

//create a for loop that goes through the big array starting at the second row (i = 1). Using a normal for loop as I want to just copy the indexes into the object.  
for (let i = 1; i < bigArray.length; i++) { //as long as i is less than the bigArray's length, keep the loop going. 
    let obj = {}; //create empty object
    for (let j = 0; j < keys.length; j++) { //nested for loop that deals with the columns of the bigArray. var keys will keep track of the columns, but will also give the object its keys.
        obj[keys[j]] = bigArray[i][j]; //j will reference the position of keys, which in turn will hold the name of the key that has yet to be written onto the obj. j will uptick during the loop.
        //vars i and j will reference the columns and indexes respectively on the bigArray and will assign the index over to the object key.
    }
    objects.push(obj);//push the created object on to the array. 
}

//console.log(objects)

//Part 4

let obj2 ={ id: "48", name: "Barry", occupation: "Runner", age: "25" };
let obj3 ={ id: "7", name: "Bilbo", occupation: "None", age: "111" };
let sum = 0;
objects.splice(3, 1, obj3)
objects.splice(1, 1, obj2)


//go through the objects array and pick out the ages from each class by using a variable to go through each index. 

for(let i = 0; i < objects.length; i++){
    sum += Number(objects[i].age)
    console.log(sum)
}

console.log(objects, `Average age of all employees is: ${sum / objects.length}` )
