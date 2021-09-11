
import { ILogger } from '@nbsolutions/interfaces';
import {LoggerManager} from '../src/LoggerManager';

describe('LoggerManager', () => {
    class A {}
    class B extends A {}
    let lm: LoggerManager;

    beforeEach(() => {
        lm = new LoggerManager();
    });

    it('A Logger to be tagged as A', () => {
        let logger: ILogger = lm.getLogger(A);
        expect(logger.getComponent()).toBe('A');
    });

    it('B that extends A Logger to be tagged as B', () => {
        let logger: ILogger = lm.getLogger(B);
        expect(logger.getComponent()).toBe('B');
    });

    it('LoggerManager logger', () => {
        let logger: ILogger = lm.getLogger(LoggerManager);
        expect(logger.getComponent()).toBe('LoggerManager');
    });

    it('should hold references', () => {
        let logger1: ILogger = lm.getLogger(A);
        let logger2: ILogger = lm.getLogger(A);

        expect(logger1).toBe(logger2);
    })
});
