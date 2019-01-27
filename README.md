# Consolify
 
A drop-in tool to capture console output. Useful for debugging scripts on a device where the console is not accessible like mobile device browsers. 
 
## Usage

<pre>
/**
 * Subscribe to console output
 *
 * @param string $category info|warn|error
 * @param array $args
 *
 */
let callback = function(category, args){
    // You have category (info/warn/error) and the arguments of the console call. Dump them on the page.
    document.getElementById('console').innerHTML += (category + ": " + JSON.stringify(args) + "\n");
    
    //calling console log functions would cause an infinite recursion
};

//skip console output at all
let preventLogging = true;

Consolify.init(callback, preventLogging);
</pre>

## License
MIT
