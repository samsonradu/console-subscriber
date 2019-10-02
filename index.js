/**
 * Subscribe to the console output 
 *
 * @author Samson Radu
 */ 
(function(){
    var _log = console.log;
    var _warn = console.warn;
    var _error = console.error;

    var Consolify = {
        unbind: function(){
            console.log = _log;
            console.warn = _warn;
            console.error = _error;
        }, 
        bind: function(cb, preventLogging){
            if (typeof cb !== 'function'){
                console.error("You must pass a valid callback function.");
                return false;
            }

            preventLogging = Boolean(preventLogging); //force bool

            const CATEGORY_INFO = "info";
            const CATEGORY_WARN = "warn";
            const CATEGORY_ERROR = "error";

            console.log = console.info = function(){
                if (_log){
                    if (!preventLogging){
                        _log.call(console, ...arguments);
                    }
                    cb(CATEGORY_INFO, arguments);
                }
            };

            console.warn = function(){
                if (_warn){
                    if (!preventLogging){
                        _warn.call(console, ...arguments);
                    }
                    cb(CATEGORY_WARN, arguments);
                }
            };

            console.error = function(){
                if (_error){
                    if (!preventLogging){
                        _error.call(console, ...arguments);
                    }
                    cb(CATEGORY_ERROR, arguments);
                }
            };
        }
    }

    //export
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
        module.exports = Consolify;
    }
    else if (typeof window === 'object'){
        window.Consolify = Consolify;
    }
    else {
        console.error("Failed to export module.");
    }
})();
