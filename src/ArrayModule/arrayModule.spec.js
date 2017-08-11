import { ArrayModule } from './arrayModule';

describe('ArrayModule', () => {
    let arrayModule;

    beforeEach(() => {
        arrayModule = ArrayModule();
    });

    describe('#getList', () => {
        it('should return current array', () => {
            expect(arrayModule.getList()).to.be.a('array');
        });

        it('should return current state of array', () => {
            arrayModule.add(1);
            expect(arrayModule.getList()).to.have.lengthOf(1);
        });
    });

    describe('#add', () => {
        it('should push item to array', () => {
            const item = { a: 1, b: 2 };

            arrayModule.add(item);
            expect(arrayModule.getList()).to.have.lengthOf(1);
        });

        it('should push items to array in the right order', () => {
            const firstItem = { a: 1 };
            const secondItem = { b: 2 };
            const thirdItem = { c: 3 };

            arrayModule.add(firstItem);
            arrayModule.add(secondItem);
            arrayModule.add(thirdItem);

            expect(arrayModule.getList()).to.have.lengthOf(3);
            expect(arrayModule.getList()).to.deep.equal([firstItem, secondItem, thirdItem]);
        });
    });

    describe('#concat', () => {
        it('should join array to existing one', () => {
            const array = [4, 5, 6, 7];

            arrayModule.add(1);
            arrayModule.add(2);
            arrayModule.add(3);
            const resultArray = arrayModule.concat(array);

            expect(resultArray).to.have.lengthOf(7);
            expect(resultArray).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
        });
    });
});