/**
 * Subscribe to the console output 
 *
 * @author Samson Radu
 */ 
let Consolify = {
    init: function(cb){
        if (typeof cb !== 'function'){
            console.error("You must pass a callback function");
            return false;
        }

        let oLog = console.log;
        let oWarn = console.warn;
        let oErr = console.error;

        console.log = console.info = function(){
            if (oLog){
                oLog.call(console, ...arguments);
            }
            cb("info", arguments);
        };

        console.warn = function(){
            if (oWarn){
                oWarn.call(console, ...arguments);
            }
            cb("warn", arguments);
        };

        console.error = function(){
            if (oErr){
                oErr.call(console, ...arguments);
            }
            cb("error", arguments);
        };
    }
}
