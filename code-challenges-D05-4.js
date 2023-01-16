// 4. create a multiplication table for 1x1 to 10x10 using loops

// gets the row of 10, starts at 1 because 0 isnt part of the table
for (let i = 1; i <= 10; i++) {
  // creates an empty string so that it can list out the row, 10 times
    let row = "";
    for (let j = 1; j <= 10; j++) {
      // it then sets row multiply i by j, 100 times because 10x10=100 (the loop runs 100 times.)
      // then it will add columns because each time its run it will print another column, of which it will do 10 times
      row += i * j + " ";
    }
    console.log(row);
  }
  