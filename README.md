# Consolify
 
A drop-in tool to subscribe to the console output. Useful for debugging scripts on a device where the console is not accessible like mobile device browsers. 
 
## Usage

<pre>
/**
 * Function to call on console output
 * WARNING: calling console.log inside the callback would lead to an infinite recursion
 *
 * @param string $category info|warn|error
 * @param array $args
 *
 */
let callback = function(category, args){
    // You have category (info/warn/error) and the arguments of the log call
    document.getElementById('console').innerHTML += (category + ": " + JSON.stringify(args) + "\n"); //dump to page   
};

//skip console output at all
let preventLogging = true;

Consolify.init(callback, preventLogging);
</pre>

## License
MIT
