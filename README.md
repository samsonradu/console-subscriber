# Consolify
 
 A drop-in tool to capture console output. Useful for debugging scripts on a device where the console is not accessible like mobile device browsers. 
 
 ## Usage
 <pre>
 Consolify.init(function(category, args){
 
     // pipe console output to a DOM element
     // you have category (info/warn/error) and the arguments of the console call
     document.getElementById('console').innerHTML += (category + ": " + JSON.stringify(args) + "<br><script>alert('123');</script>");
 
 });
 </pre>
