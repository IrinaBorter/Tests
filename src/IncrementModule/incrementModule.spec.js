const assert = require('assert');
import { module1 } from './module1';

describe('module1', function() {
    describe('#getValue()', function() {
        const module = module1();
        let testNumber = 0;

        it('should return 0 if value was not incremented', function() {
            assert.equal(testNumber, module.getValue());
        });
    });
});