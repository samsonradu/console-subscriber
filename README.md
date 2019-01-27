# Consolify
 
A drop-in tool to capture console output. Useful for debugging scripts on a device where the console is not accessible like mobile device browsers. 
 
## Usage

<pre>
/**
 * Capture console output
 */
Consolify.init(function(category, args){

    // You have category (info/warn/error) and the arguments of the console call. Dump them on the page.
    document.getElementById('console').innerHTML += (category + ": " + JSON.stringify(args) + "\n");

});
</pre>

## License
MIT
