/* eslint-disable @typescript-eslint/no-unused-vars */

import * as api from '../src/api';
import {Logger} from '../src/Logger';

describe('Public API', () => {
    it('Logger', () => {
        expect(api.Logger).toBe(Logger);
    });
});
