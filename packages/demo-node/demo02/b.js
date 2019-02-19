import {foo} from "./a.js";
export function bar(){
    var ranVal = Math.random();
    console.log("b.js: ", ranVal);
    if(ranVal>0.5){
        foo();
    }
}
