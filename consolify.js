/**
 * Subscribe to the console output 
 *
 * @author Samson Radu
 */ 
(function(){
    var Consolify = {
        init: function(cb){
            if (typeof cb !== 'function'){
                console.error("You must pass a callback function");
                return false;
            }

            const CATEGORY_INFO = "info";
            const CATEGORY_WARN = "warn";
            const CATEGORY_ERROR = "error";

            let oLog = console.log;
            let oWarn = console.warn;
            let oErr = console.error;

            console.log = console.info = function(){
                if (oLog){
                    oLog.call(console, ...arguments);
                    cb(CATEGORY_INFO, arguments);
                }
            };

            console.warn = function(){
                if (oWarn){
                    oWarn.call(console, ...arguments);
                    cb(CATEGORY_WARN, arguments);
                }
            };

            console.error = function(){
                if (oErr){
                    oErr.call(console, ...arguments);
                    cb(CATEGORY_ERROR, arguments);
                }
            };
        }
    }

    //export
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
        module.exports = Consolify;
    }
    else {
        window.Consolify = Consolify;
    }

})();
