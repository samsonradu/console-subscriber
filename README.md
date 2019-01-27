# Consolify
 
A drop-in tool to subscribe to the console output. Useful for debugging scripts on a device where the console is not accessible like mobile device browsers. 
 
## Usage

<pre>
/**
 * Function to call on console output
 * WARNING: calling console.log inside the callback would lead to an infinite recursion
 *
 * @param string $category info|warn|error
 * @param array $args original arguments of the call 
 *
 */
let callback = function(category, args){
    // write to a DOM element
    document.getElementById('console').innerHTML += (category + ": " + JSON.stringify(args) + "\n"); 
};

Consolify.bind(callback);

// or skip console output at all
let preventLogging = true;

Consolify.bind(callback, preventLogging);
</pre>

## License
MIT
