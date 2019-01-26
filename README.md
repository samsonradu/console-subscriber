# Consolify
 
 A drop-in tool to capture console output. Can be useful when debugging scripts on a device without a console eg. mobile devices. 
 
 ## Usage
 <pre>
 Consolify.init(function(category, args){
     // you have the category (info/warn/error) and the arguments of the console call
     document.getElementById('console').innerHTML += (category + ": " + JSON.stringify(args));
 });
 </pre>
