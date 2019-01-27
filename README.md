# Consolify
 
A drop-in tool to capture console output. Useful for debugging scripts on a device where the console is not accessible like mobile device browsers. 
 
## Usage

<pre>
/**
 * Capture console output
 *
 * @param string $category info|warn|error
 * @param array $args
 */
let callback = function(category, args){
    // you have category (info/warn/error) and the arguments of the console call
    document.getElementById('console').innerHTML += (category + ": " + JSON.stringify(args) + "\n");
    
    //calling console.log here without the preventLogging flag set to true would cause a never-ending recursion
};

//in case you don't want any console output at all
let preventLogging = true;

Consolify.init(callback, preventLogging);
</pre>

## License
MIT
