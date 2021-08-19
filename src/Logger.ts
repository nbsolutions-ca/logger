
import { LogLevel } from '@nbsolutions/interfaces';

export class Logger {
    private $component: string;
    private $enableVerboseLogging: boolean;
    private $enableDebugLogging: boolean;

    public constructor(component: string = 'Generic') {
        this.$component = component;
        this.$enableVerboseLogging = false;
        this.$enableDebugLogging = false;
    }

    public enableDebugLog(state: boolean): void {
        this.$enableDebugLogging = state;
    }

    public enableVerboseLog(state: boolean): void {
        this.$enableVerboseLogging = state;
    }

    protected _print(message: string, componentStyle: string, levelStyle: string): void {
        console.log(message, componentStyle, levelStyle);
    }

    protected _getColorForLevel(level: LogLevel): string {
        switch (level) {
            case LogLevel.DEBUG: return 'blue';
            case LogLevel.DEPRECATE:
            case LogLevel.WARN:
                return 'yellow';
            case LogLevel.INFO: return 'green';
            case LogLevel.VERBOSE: return 'cyan';
            case LogLevel.ERROR: return 'red';
        }
    }

    protected _getColorForComponent(): string {
        return 'grey';
    }

    public log(level: LogLevel, message: string): void {
        let levelStr: string;

        if (level === LogLevel.DEBUG && !this.$enableDebugLogging) {
            return;
        }

        if (level === LogLevel.VERBOSE && !this.$enableVerboseLogging) {
            return;
        }

        switch (level) {
            case LogLevel.DEBUG:
                levelStr = '[DEBUG]';
                break;
            case LogLevel.VERBOSE:
                levelStr = '[VERBOSE]';
                break;
            case LogLevel.ERROR:
                levelStr = '[ERROR]';
                break;
            case LogLevel.INFO:
                levelStr = '[INFO]';
                break;
            case LogLevel.WARN:
                levelStr = '[WARN]';
                break;
            case LogLevel.DEPRECATE:
                levelStr = '[DEPRECATE]';
                break;
        }

        let header: string = `%c[${this.$component}]%c${levelStr}`;

        let msg: string = `${header}: ${message}`;

        let componentStyle: string = `color: ${this._getColorForComponent()}`;
        let levelStyle: string = `color: ${this._getColorForLevel(level)}`;
        this._print(msg, componentStyle, levelStyle);
    }

    public deprecate(alternative?: string, methodOverride?: string): void {
        let e: Error = new Error();
        let args: any = [];
        
        if (!methodOverride) {
            args.push(this.$getDeprecatedMethodMessage(e));
        }
        else {
            args.push(methodOverride);
        }

        if (alternative) {
            args.push(this.$getDeprecatedAlternativeMessage(alternative));
        }
        
        args.push('\n');
        args.push(e.stack);
        this.log(LogLevel.WARN, args.join('\n'));
    }

    public deprecateParameterType(argumentLocation: number, deprecatedType: string, alternative?: string): void {
        let e: Error = new Error();
        let args: any = [];

        args.push(this.$getDeprecatedParameterMethodMessage(e, argumentLocation, deprecatedType));

        if (alternative) {
            args.push(this.$getDeprecatedParameterAlternativeMessage(alternative,  argumentLocation));
        }
        
        args.push('\n');
        args.push(e.stack);
        this.log(LogLevel.WARN, args.join('\n'));
    }
    
    private $getDeprecatedMethodMessage(e: Error): string {
        let stack = e.stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1');
        let obj: string = 'Method';
        if (stack === "new") {
            stack = e.stack.split('\n')[2].replace(/^\s+at new\s+(.+?)\s.+/g, '$1');
            obj = 'Class';
        }
        return `${obj} ${stack} is deprecated.`
    }

    private $getDeprecatedAlternativeMessage(alternative: string): string {
        return `Use ${alternative} instead.`;
    }

    private $getDeprecatedParameterMethodMessage(e: Error, argumentLocation: number, parameter: string): string {
        let stack = e.stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1');
        let obj: string = 'Method';
        if (stack === "new") {
            stack = e.stack.split('\n')[2].replace(/^\s+at new\s+(.+?)\s.+/g, '$1');
            obj = 'Class';
        }
        return `${obj} ${stack} ${parameter} at parameter ${argumentLocation} is deprecated.`
    }

    private $getDeprecatedParameterAlternativeMessage(alternative: string, argumentLocation: number): string {
        return `Use ${alternative} at parameter ${argumentLocation} instead.`;
    }
}
