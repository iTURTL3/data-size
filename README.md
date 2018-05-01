# Data Length to Data Size
calculate the data size of data (GB,MB,KB,B) in javascript

## Example
```JS
var length = document.documentElement.innerHTML.length;
var size   = lengthToSize(length);
console.log(Math.round(size.size) + ' ' + size.suffix);
```

JSFiddle example: https://jsfiddle.net/ijake/gtar9uoc/
