# Consolify
 
 A drop-in tool to capture console output. Useful for debugging scripts on a device where the console is not accessible like mobile devices. 
 
 ## Usage
 <pre>
 Consolify.init(function(category, args){
     // you get the category (info/warn/error) and the arguments of the console call
     document.getElementById('console').innerHTML += (category + ": " + JSON.stringify(args));
     // now you see the output in a DOM element
 });
 </pre>
