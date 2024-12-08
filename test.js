function test(string) {

    //   const regex= /[^a-zA-z]/+g;

    const arr = string.replaceAll(".", "").replaceAll(",", "").replaceAll("!", "")
        .replaceAll("'", "").split(" ")//.replace(regex, "");

    // arr.replaceAll("." ,"")
    const cleanstring = arr.join("").toLowerCase(); // we join the string again and convert all chars to lowercase to compare correctly

    console.log(arr.join(""));

    let start = 0; // index start, from start of string
    let end = cleanstring.length - 1;  // index end, from end of string

    while (start !== end) {
        console.log(cleanstring[start], cleanstring[end]);
        if (cleanstring[start] !== cleanstring[end]) return false; //check if a single char doesn't match the other char from other side return false
        start++; end--; // incrementing start index, decrementing the end index
    }

    return true; // if string passed all checks then return true, no more checks



}



console.log(test("Madam, in Eden, I'm Adam")); // normal test case 
console.log(test("Complete the project report"));

console.log(test("Madam, ,,,,in Eden, ..... !!! I'm Adam")); // test case ignores special symbols
