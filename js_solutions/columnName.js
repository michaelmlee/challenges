function printColName(input){
    const alphabet = ["Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"];
    let i = input;
    let colNameArray = [];

    while (i > 0){
        const remainder = i % 26;
        colNameArray.unshift(alphabet[remainder]);
        i = remainder === 0 ? Math.floor(i / 26) - 1 : Math.floor(i / 26);
    }
    return colNameArray.join("");
}

function main(){
    //uncomment to test
    // console.log(printColName(26)); //Z
    // console.log(printColName(27)); //AA
    // console.log(printColName(51)); //AY
    // console.log(printColName(52)); //AZ  
    // console.log(printColName(80)); //CB
    // console.log(printColName(676)); //YZ
    // console.log(printColName(702)); // ZZ
    // console.log(printColName(703)); // AAA
    // console.log(printColName(705)); //AAC
    // console.log(printColName(1406)); //BBB
    // console.log(printColName(88888)); //EALT
    // console.log(printColName(145145)); //HFRM
    // console.log(printColName(234899)); //MILO
    // console.log(printColName(234863)); // MIKE
    // console.log(printColName(10000000)); //UVXWJ
    // console.log(printColName(48151623)); //OOFZIEP
}

//for testing
main();

module.exports = {
    printColName
};