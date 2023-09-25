import { Injectable } from '@angular/core';
import { LogLevel } from './log-level.enum';
import {environment} from '../../../environments/environment';
// ?message.enum, ?environment.admin

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private static level: LogLevel = LogLevel.DEBUG;
  constructor() { }
  
  public static debug(...message: any): void {
    LoggerService.writeToLog(LogLevel.DEBUG, ...message);
  }

  public static log(...message: any) {
    LoggerService.writeToLog(LogLevel.INFO, ...message);
  }

  public static warn(...message: any) {
    LoggerService.writeToLog(LogLevel.WARN, ...message);
  }

  public static error(...message: any) {
    LoggerService.writeToLog(LogLevel.ERROR, ...message);
  }


  private static shouldLog(level: LogLevel): boolean {
    return (level >= 2)
  }
// LogLevel[environment.LOG_LEVEL]

  private static writeToLog(level: LogLevel, ...messsage: any) {
    if (this.shouldLog(level)) {
      if (level <= LogLevel.INFO) {
        console.log(LoggerService.getLogDate(), );
      } else if ( level === LogLevel.ERROR) {
        console.error(LoggerService.getLogDate(),);
      } else if (level === LogLevel.WARN ) {
        console.warn(LoggerService.getLogDate(),)
      }
    }
  }
  // ...message
  private static getLogDate(): string {
    const date = new Date();
    return '[' +
    date.getUTCFullYear() + '/' +
    (date.getUTCMonth() + 1 ) + '/' +
    date.getUTCDate() + '/' +
    date.getUTCHours() + ':' +
    date.getUTCMinutes() + ':' +
    date.getUTCSeconds() + '.' +
    date.getMilliseconds() + '/' + ']'
  }
}
