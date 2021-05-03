function main() {

    var i, j;
    var val;
    var phonetic_eq = "";

    var num_dict = {
        "0" : "Zero",
        "1" : "One",
        "2" : "Two",
        "3" : "Three",
        "4" : "Four",
        "5" : "Five",
        "6" : "Six",
        "7" : "Seven",
        "8" : "Eight",
        "9" : "Nine"
    };

    if (process.argv.length < 3) {
        console.log("usage: node main.js <int1> <int2> ...");
        process.exit(1); // exit failure
    }

    for (i = 2; i < process.argv.length; i++) {
        for (j = 0; j < process.argv[i].length; j++) {

            val = num_dict[process.argv[i][j]];
            
            if (val != undefined) {
                phonetic_eq += val;
            } else {
                phonetic_eq += "Nan"; // Not a Number
            }
            
        }
        phonetic_eq += ",";
    }

    console.log(phonetic_eq.slice(0, -1)); // Remove final comma

}

main();