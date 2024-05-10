let row1 =[``, ``, ``, ``];

let c =''; //empty string reader
let count = 0; // counter var
const csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
//create a loop that has c go through the string, logging in the texts. if c encounters a comma, uptick the counter. Then check to see if the counter is at a specific number.
//Once count reaches a number, print whatever c has logged into the array index. 
// if encounter a \n, reset count to 1 and continue with loop. 

//csv.split

for (c of csv) { //for loop with string c of csv reading through the string csv.
    if (c === `,`) { //have the string c go through the csv string until it reaches a comma.
        count++; //uptick the counter when c has encountered the comma. 
    } else if(c === `\n`){ //if c encounters \n
        count = 0; //reset count then move on to next array
        console.log(row1);
        row1 =[``, ``, ``, ``]
        continue; //countinue with loop
    } else{
        if (count === 0) {
            row1[count] += c; //Concatenate and asign cell1 with string c since count = 1. 
            

        }else if (count === 1) {
            row1[count] += c; //Concatenate and asign cell1 with string c since count = 1. 
            

        } else if (count === 2) {
            row1[count] += c; //Concatenate and asign cell2 with string c since count = 2. 
            

        } else if (count === 3) {
            row1[count] += c; //Concatenate and asign cell3 with string c since count = 3. 
            
        } 
        
    }
    console.log(count)
    if (count > 3) {
        console.log(count);
    }
}