import {decodeCipherNumber} from "./component/decode-number"
import { encodeCharacter } from "./component/encode-string";

export const crypto = (function () {

    const methods = {};
    
    /**
     * @constructor
     * decoded encoded characters
     * @param  {String|Array} params 
     * @return {String} decoded values         
     */
	methods.decode = function (params) {
        if (typeof params === "string")
        {
            params = params.split(",")
        }
        return params.map((r) => decodeCipherNumber(r)).join("");
	};

     /**
     * encode given characters
     * @param  {String} params 
     * @return {Array} - decoded values         
     */

	methods.encode = function (params) {
        return params.match(/.{1,4}/g).map((r) => encodeCharacter(r));

	};

	return methods;
})();
