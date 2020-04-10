 /**
 * * Converts character to full binary string
 * @param {string} encodedDecimal -
 * @return {string} decodedCharacter - the characters that were original decoded 
 */


export function decodeCipherNumber(encodedDecimal){
    try 
    {
        if(isNaN(encodedDecimal)){
            throw "must be a number"
        }
        let encodedHex = ((parseInt(encodedDecimal, 10).toString(16)));
        let encodedBinary = (parseInt(encodedHex, 16).toString(2)).padStart("32", 0);
        let decodedBinary ="";
        let startPoint = 0
        let n = 0;
        while (decodedBinary.length < 32) {
            decodedBinary += encodedBinary[n]         
            n+=4;
            if(n > 31){
                startPoint += 1 ;
                n = startPoint
            }
        } 
        let decodedBinaryArray = decodedBinary.match(/.{1,8}/g).reverse();
        let decodedCharacter = decodedBinaryArray.map((currentBinary) => {
             return String.fromCharCode(parseInt(currentBinary, 2).toString())
        }).join("")
        return decodedCharacter.replace(/\0/g, '');
    } 
    catch (error) 
    {
        return "Input " + error
    }
}