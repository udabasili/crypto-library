/**
 *  encode the given string
 * @param  {String} string - 
 * @returns {String} decodedDecimal - the encoded value in decimal form
 */
export function encodeCharacter (string) {
    let hexValueArray = string.split('')
       .map(x => x.charCodeAt(0).toString(16))
       .join("")
       .match(/.{1,2}/g)
       .reverse();
    let decodedBinary = hexValueArray.reduce((accumulatedBinary, currentBinary) =>{
         return accumulatedBinary += (parseInt(currentBinary, 16).toString(2)).padStart(8, '0')
    },"");
    let decodedBinaryArray = decodedBinary.
       padStart(32, 0)
       .split("");
   let encodedBinary ="";
   let startPoint = 0;
   let n = 0;
   while (encodedBinary.length < 32) 
    {
       encodedBinary += decodedBinaryArray[n]         
       n += 8;
       if(n > 31)
        {
           startPoint += 1 ;
           n = startPoint;
        }
    }    
   let encodedHex = ((parseInt(encodedBinary, 2).toString(16)));
   let encodedDecimal = ((parseInt(encodedHex, 16).toString(10)));
   return encodedDecimal;
}