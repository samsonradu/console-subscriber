/**
 * Subscribe to the console output 
 *
 * @author Samson Radu
 */
(function () {

    const CATEGORY_INFO = "info";
    const CATEGORY_WARN = "warn";
    const CATEGORY_ERROR = "error";
    const CATEGORY_DEBUG = "debug";

    var _log = console.log;
    var _warn = console.warn;
    var _error = console.error;
    var _debug = console.debug;

    var ConsoleSubscriber = {
        unbind: function () {
            console.log = _log;
            console.warn = _warn;
            console.error = _error;
            console.debug = _debug;
        },
        bind: function (cb, preventLogging) {
            if (typeof cb !== 'function') {
                console.error("You must pass a valid callback function.");
                return false;
            }

            preventLogging = Boolean(preventLogging); //force bool

            console.log = console.info = function () {
                if (!preventLogging && typeof _log === 'function') {
                    _log.call(console, ...arguments);
                }
                cb(CATEGORY_INFO, arguments);
            };

            console.warn = function () {
                if (!preventLogging && typeof _warn === 'function') {
                    _warn.call(console, ...arguments);
                }
                cb(CATEGORY_WARN, arguments);
            };

            console.error = function () {
                if (!preventLogging && typeof _error === 'function') {
                    _error.call(console, ...arguments);
                }
                cb(CATEGORY_ERROR, arguments);

            };

            console.debug = function () {
                if (!preventLogging && typeof _debug === 'function') {
                    _debug.call(console, ...arguments);
                }
                cb(CATEGORY_DEBUG, arguments);
            };
        }
    }

    //export
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = ConsoleSubscriber;
    }
    else if (window && typeof window === 'object') {
        window.ConsoleSubscriber = ConsoleSubscriber;
    }
    else {
        console.error("Failed to export module.");
    }
})();
