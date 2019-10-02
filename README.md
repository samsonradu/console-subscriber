# Console subscriber
 
A drop-in tool to subscribe to the console output. Useful for debugging JS scripts on a device where the console is not easily accessible like mobile device browsers, or even in Node environments.
 
## Usage

<pre>
let cs = require('console-subscriber');

/**
 * Function to be called on console output
 * WARNING: calling console.log inside the callback would lead to an infinite recursion
 *
 * @param string $category info|warn|error
 * @param array $args initial arguments of the call 
 */
let callback = (category, args) => {

    // In a browser env you could write to a DOM element
    let message = category + ": " + JSON.stringify(args) + "\n";
    document.getElementById('console').innerHTML += message; 

    // In a Node env you could store the console output (errors)
    if (category === "ERROR"){
        redisClient.sadd("console:error", JSON.stringify(args));
    }
};

// Bind callback fn. Multiple functions can be bound.
cs.bind(callback); 

// Prevent writing to the console and let the callback function handle the args.
let preventLogging = true;  
cs.bind(callback, preventLogging); 

// Restore defaults
cs.unbind();    
</pre>

## License
MIT
