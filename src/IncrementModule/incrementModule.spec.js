import { IncrementModule } from './incrementModule';

describe('IncrementModule', () => {
    let incrementModule;
    beforeEach(() => incrementModule = IncrementModule());

    describe('#getValue()', () => {
        it('should return 0 as initial number of Incrementer', () => {
            expect(incrementModule.getValue()).to.equal(0);
        });
    });

    describe('#increase()', () => {
        it('should increase number to 1 after incrementing', () => {
            incrementModule.increase();
            expect(incrementModule.getValue()).to.equal(1);
        });

        it('should correctly increment number', () => {
            incrementModule.increase();
            incrementModule.increase();
            incrementModule.increase();
            expect(incrementModule.getValue()).to.equal(3);
        });
    });
});