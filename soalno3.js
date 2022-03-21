myArray = Array(1, 3, 5, 6, 3, 2, 3, 8, 9, 10, 15, 13);

// print number not in array
for (i = 0; i < myArray.length; i++) {
    if (myArray[i] != i + 1) {
        console.log(i + 1);

    }

}