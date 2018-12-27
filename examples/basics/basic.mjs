// create your object
import { traitly } from '../../src/core/index.mjs';
import { ConsoleDebuggable, LogLevels, Taggable } from '../../src/devTools/index.mjs'


const EmptyObject = ({foo}) =>
    traitly(

    )({foo});

const emp = EmptyObject({foo:"Hello"});
console.log(emp);//
console.log('-----')

const BasicObject = ({foo}) =>
    traitly(
        Taggable('BasicObject'),
        ConsoleDebuggable(),
    )({foo});
// export default BasicObject;  // do this if you are making a module

// usage
// `node --experimental-modules examples/basic.mjs`
const obj = BasicObject({foo: "Bar"});
console.log(obj);
    // .setLogLevel(LogLevels.LOG);
// obj.warn("Shall print, ", "later method override earlier method", obj);