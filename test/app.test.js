import { crypto } from "../index";

describe('result', () => {

    it('should be "Input must be a number" if anything beside a complete number is passed for decoding', () => {
        let result1 = crypto.decode("yy22222");
        let result2 = crypto.decode("wuuuwuw");
        let result3 = crypto.decode("><<>>");
        expect(result1).toBe("Input must be a number"); 
        expect(result2).toBe("Input must be a number");
        expect(result3).toBe("Input must be a number"); 
    });

    it('not be "Input must be a number" if a full number is passed', () => {
        let result = crypto.decode("9922222");
        expect(result).not.toBe("Input must be a number"); 
    });

    it('should for encoded values should be an array', () => {
        let result1 = crypto.encode("lager, sir, is regal");
        let result2 = crypto.encode("wuuuwuw");
        let result3 = crypto.encode("tako");
        expect(Array.isArray(result1)).toBe(true); 
        expect(Array.isArray(result2)).toBe(true);
        expect(Array.isArray(result3)).toBe(true); 
    });

    it('should return true if the decoding of the encoding of an input matches the original input', () => {
        let string1 = "lager, sir, is regal";
        let string2 = "go hang a salami, I'm a lasagna hog";
        let string3 = "egad, a base tone denotes a bad age";
        let string4 = "egad, a base tone denotes a bad age and of course we would  love the best of the wold thing people";
        let result1 =  crypto.decode(crypto.encode(string1));
        let result2 = crypto.decode(crypto.encode(string2));
        let result3 = crypto.decode(crypto.encode(string3));
        let result4 = crypto.decode(crypto.encode(string4));
        expect(string1 == result1).toBeTruthy();
        expect(string2 == result2).toBeTruthy();
        expect(string3 == result3).toBeTruthy();
        expect(string4 == result4).toBeTruthy();
    })
});