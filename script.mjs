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


//Part 2

const str1 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26,`

let row1 = str1.split("\n");

console.log(row1);

let row1Header = row1[0].split(",");
console.log(row1Header);

//Declare a variable that stores the number of columns in each row of data within the CSV.

let colcount = row1Header.length; //first row has 4 entries

console.log(colcount);

let col = " ";



for(let i = 0 ; i < row1.length; i++) {

    let numRows = row1[i].split(",");
    console.log(numRows);
    

    if (numRows === ',')
        console.log("print");

    else {
        console.log("np");
        
    }

}



