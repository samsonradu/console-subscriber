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

        let write = function (args, category, cb){ 
            cb(args, category);
        } 

        console.log = console.info = function(){
            if (oLog){
                oLog.call(console, ...arguments);
            }
            write(arguments, "info", cb);
        };

        console.warn = function(){
            if (oWarn){
                oWarn.call(console, ...arguments);
            }
            write(arguments, "warn", cb);
        };

        console.error = function(){
            if (oErr){
                oErr.call(console, ...arguments);
            }
            write(arguments, "error", cb);
        };
    }
}
