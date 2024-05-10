//Part 1 recontextualize previous lab's code

//create a loop that has var c go through the string, logging in the characters. if c encounters a comma, uptick a counter var. Then check to see if the counter is at a specific number.
//Once var count reaches a number, print whatever c has logged into the array index. 
// if encounter a \n, or the placeholder has reached the end of the string, print whatever the array has, then reset count to 10 empty the array and continue with loop. 

let row1 =[``, ``, ``, ``]; //create empty array, but with 4 cells with empty strings.
let placehold = 0; //create a placeholder var that counts the length of the string csv
let c =''; //empty string reader
let count = 0; // counter var relates to the cell in the array. 
const csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


for (c of csv) { //for loop with string c of csv reading through the string csv.   
    placehold++;
    if (c === `,`) { //have the string c go through the csv string until it reaches a comma.
        count++; //uptick the counter when c has encountered the comma. 
    } else if(c === `\n`){ //if c encounters \n 
        count = 0; //reset count then move on to next array
        console.log(row1); //print out what was recorded up to the point of \n or the end of the string.
        row1 =[``, ``, ``, ``] //empty the array
    } else if (placehold === csv.length){ //now if the string has ended, placehold should be the length of the string. if the c is at the string's end, input all the text from that point into the array.
        row1[count] += c; //count shoud still be at 3, but this line should also print out the last character in the string. 
        console.log(row1); //print out what was recorded up to the point of \n or the end of the string.
        count = 0;
        row1 =[``, ``, ``, ``]
    } else{ //if c doesn't encounter a comma, check to see if count equals one of the following:
        if (count === 0) {
            row1[count] += c; //Concatenate and asign the first array cell with string c since count = 0. 
        }else if (count === 1) {
            row1[count] += c; //Concatenate and asign the second array cel with string c since count = 1. 
        } else if (count === 2) {
            row1[count] += c; //Concatenate and asign the third array cel with string c since count = 2. 
        } else if (count === 3) {
            row1[count] += c; //Concatenate and asign the fourth array cel with string c since count = 3. 
        } 
        
    }
    
} 