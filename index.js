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

    let _log = console.log;
    let _warn = console.warn;
    let _error = console.error;
    let _debug = console.debug;

    let _callbacks = []; // callbacks    

    var ConsoleSubscriber = {
        unbind: function (cb) {
            if (!cb) {
                _callbacks = [];
            }
            else {
                _callbacks = _callbacks.filter(_cb => _cb !== cb);
            }
        },
        bind: function (cb) {
            if (typeof cb !== 'function') {
                console.error("You must pass a valid callback function.");
                return false;
            }

            _callbacks.push(cb);
        }
    }

    console.log = console.info = function () {
        _log.call(console, ...arguments);
        _callbacks.forEach(cb => cb(CATEGORY_INFO, arguments));
    };

    console.warn = function () {
        _warn.call(console, ...arguments);
        _callbacks.forEach(cb => cb(CATEGORY_WARN, arguments));
    };

    console.error = function () {
        _error.call(console, ...arguments);
        _callbacks.forEach(cb => cb(CATEGORY_ERROR, arguments));

    };

    console.debug = function () {
        _debug.call(console, ...arguments);
        _callbacks.forEach(cb => cb(CATEGORY_DEBUG, arguments));
    };

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
