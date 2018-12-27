// create your object
import { traitly } from '../../src/core/index.mjs';
import { ConsoleDebuggable, LogLevels, Taggable } from '../../src/devTools/index.mjs'

const Wrong = o => {
    o.require('foo', 'not-exists');
    o.provide('wrong');
    return {...o,
        foo(){
            this.log("foo is invoked");
            return 'foo';
        }
    };
}

const Foo = o => {
    o.provide('foo')
    return ({...o,
        foo(){
            console.log("foo is invoked");
            return 'foo';
        }
    })
};

const Bar = o => {
    o.require('prerequisite','foo')
    o.provide('bar', false);
    return ({...o,
        bar(){
            console.log("bar is invoked");
            return `${this.foo()}:foo`;
        }
    });
}

try{
    const InvalidObject = () => {
        traitly(
            Wrong, 
            Foo
        )();
    }
    const a = InvalidObject();
    console.log('not reachable ', a);
    // console.warn("you shall not se",a);
}catch(ex){
    console.error('!Expected!',ex);
}

const ExampleObject = () => traitly(
        Foo,
        Taggable('ExampleObject'),
        ConsoleDebuggable(LogLevels.WARN),
        Bar
    )()

const sample = ExampleObject();
// sample.log("not print because of log level");//unrelated
// sample.warn('yes', sample);//unrelated
sample.setLogLevel(LogLevels.LOG);
sample.bar();


try {
    const DuplicateTraitObject = () => traitly(
        Foo,
        Foo,
    )()
    const notAllow = DuplicateTraitObject();
    console.log(notAllow);
} catch (ex){
    console.error('!Expected!',ex)
}

console.log('-----')
const AllowDuplicateTraitObject = () => traitly(
    Foo,
    Bar,
    Bar,
)()

const d = AllowDuplicateTraitObject();

console.log(d);