import console from 'console';
import LogLevels from './LogLevels.mjs';

const ConsoleDebuggable = (initLevel) => o => {
  o.require('taggable');
  o.provide('logger');// it is called logger instead of ConsoleDebuggable, as all logger shall share same interface and expect only have one 
  return {
    ...o,
    minLogLevel: (typeof initLevel === 'number' && LogLevels.NONE <= initLevel <= LogLevels.LOG ) ? initLevel : LogLevels.NONE,
    /**
     * Print log to default console
     */
    log(...args) {
      if(this.minLogLevel >= LogLevels.LOG){
        console.log(this.getTag(),':log:',...args)
      }
    },
    /**
     * Print warning to default console
     */
    warn(...args) {
      if(this.minLogLevel >= LogLevels.WARN){
        console.warn(this.getTag(),':warn:',...args)
      }
    },
    /**
     * Print error to default console
     */
    error(...args) {
      if(this.minLogLevel >= LogLevels.ERROR){
        console.error(this.getTag(),':error:',...args)
      }
    },
    /**
     * 
     * @param {LogLevels} level 
     */
    setLogLevel(level) {
      this.minLogLevel = level;
      return this;
    },
  }
}

export default ConsoleDebuggable;
