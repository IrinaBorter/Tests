import { IncrementModule } from './IncrementModule/incrementModule';
import { ArrayModule } from './ArrayModule/arrayModule';

function hello() {
    console.log('hello my name is Ira and I am a cool girl');
}

hello();

const m1 = IncrementModule();

console.log(m1.getValue());
m1.increase();
console.log(m1.getValue());

const m2 = ArrayModule();

m2.add(1);
m2.add(3);
console.log(m2.getList());
console.log(m2.concat([5,6,7]));