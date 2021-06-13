// import World from './world';
//
// const root = document.getElementById('root');
// const world = new World('Hello TOra!');
// world.sayHello(root);

// import {notExistSample, primitiveSample, anySample, unknownSample} from "./basic";
// primitiveSample();
// notExistSample();
// anySample();
// unknownSample();

import {logMessage} from './function';
import {isUserSignIn, isUserSignIn2, sumPrice} from "./function/parameters";

logMessage('Hello TOra!');
isUserSignIn('DFE');
isUserSignIn2('AAA');
sumPrice(100, 200, 300, 400);