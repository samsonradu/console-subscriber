# Consolify
 
A drop-in tool to subscribe to the console output. Useful for debugging JS scripts on a device where the console is not easily accessible like mobile device browsers. 
 
## Usage

<pre>
/**
 * Function to be called on console output
 * WARNING: calling console.log inside the callback would lead to an infinite recursion
 *
 * @param string $category info|warn|error
 * @param array $args original arguments of the call 
 *
 */
let callback = (category, args) => {
    // write to a DOM element
    let message = category + ": " + JSON.stringify(args) + "\n";
    document.getElementById('console').innerHTML += message; 
};

// Bind callback fn. Multiple functions can be bound.
Consolify.bind(callback); 

// Prevent writing to the console and let the callback function handle the args.
let preventLogging = true;  
Consolify.bind(callback, preventLogging); 

// Restore defaults
Consolify.unbind();    
</pre>

## License
MIT
