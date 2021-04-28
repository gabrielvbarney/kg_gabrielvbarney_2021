function main() {

    // need error checking?
    
    var i, j;
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

    for (i = 2; i < process.argv.length; i++) {
        for (j = 0; j < process.argv[i].length; j++) {
            phonetic_eq += num_dict[process.argv[i][j]];
        }
        phonetic_eq += ",";
    }

    console.log(phonetic_eq.slice(0, -1)); // remove final comma

}

main()