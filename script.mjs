//Part 1: Refactoring Old Code
// What are we accomplishing:
//Loop through the characters of a given CSV string.
// Store each "cell" of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the "\r\n" sequence, move to the next "row."
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

//Assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than "\n".

// Variables to hold string and cell data
// const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26,`

let cell = "";
let row =  [];

//'Loop through the characters of a given CSV string.
for (let i =0 ; i < str.length; i++){
    // Store each "cell" of data in a variable.
    let char = str[i];
   // When you encounter a comma, push the current cell to the row array.
    if(char === " ,"){
        row.push(cell);
        cell = " ";
        //console.log(row);
    } else if (char === '\n'){
        row.push(cell);
       // console.log(row.join(','));
        row = [ ];
        cell = " ";
 
    } else {
        cell += char;
    }

    if (row.length > 0) {
       // console.log(row.join(', '));
    }

}

//--------///

//Part 2

const str1 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26,`

let row1 = str1.split("\n");

//console.log(row1);

let row1Header = row1[0].split(",");
//console.log(row1Header);

//Declare a variable that stores the number of columns in each row of data within the CSV.

let colcount = row1Header.length; //first row has 4 entries

//console.log(colcount);

const finalData = [];

for(let i = 1 ; i < row1.length; i++) {

    let numRows = row1[i].split(",");
    //console.log(numRows);
    
    let rowDesc =  [];

    for (let j = 0 ; j < colcount; j++) {
        rowDesc.push(numRows[j]);
    }

   //console.log(rowDesc);

   finalData.push(rowDesc);

}

finalData.unshift(row1Header);

//console.log(finalData);

//-------------------------//

//Part -3 

const str2 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26,`

//Split it into row
let row2 = str2.split("\n");
//console.log(row2);

//heading
const row2Header = row2[0].split(",");
//console.log(row2Header);

//no of columns

const colcount2 = row2Header.length;
//console.log(colcount2);

const finalData1 = [];

for (let i = 1 ; i < row2.length ; i++){
    const numRows1 = row2[i].split(',');
   // console.log(numRows1);
    //create new object
    const rowDesc = {};
    for(let j = 0; j < colcount2; j++ ){
        const heading  = row2Header[j].toLowerCase();
        //console.log(heading);
        rowDesc[heading] = numRows1[j];
        //console.log(rowDesc);
    }

     //console.log(rowDesc);

    finalData1.push(rowDesc);

}
 // console.log(finalData1);

 // Part 4 : Sorting and manipulating Data

 // Remove the last element from sorted array

 finalData1.pop();
 //console.log(finalData1);

 // Insert the following object at index 1:

 const newObj = {id : "48" , name: "Barry" , occupation: "Runner" , age: "25"}

 finalData1.splice(1, 0, newObj);

 //console.log(finalData1);

 //Add the following object to the end of the array:

 const newObj1 = {id: "7", name: "Bilbo", occupation: "None", age: "111"}
 finalData1.push(newObj1);
 //console.log(finalData1);

 // calculate average age of the group
 let totalAge = 0 ;

 for(let i = 0; i < finalData1.length; i++) {
    const age = parseInt(finalData1[i].age);
    //console.log(age);

    totalAge += age;
    // console.log(totalAge);
 }

 //average age

 const avgAge = totalAge/ finalData1.length;
 //console.log(avgAge);

 //----------------------------------------------//

 //Part 5 

 let orginalData = " ";
 console.log(finalData);

 for(let i = 0 ; i < finalData.length; i++) {
    const values = Object.values(finalData[i]);
    console.log(values);

    orginalData += values.join(',') + '\n' ;
 }

console.log(orginalData);



 
 





