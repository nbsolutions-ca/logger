
import * as api from '../src/api';
import {Logger} from '../src/Logger';
import {LoggerManager} from '../src/LoggerManager';

describe('Public API', () => {
    it('Logger', () => {
        expect(api.Logger).toBe(Logger);
    });

    it('LoggerManager', () => {
        expect(api.LoggerManager).toBe(LoggerManager);
    });
});
