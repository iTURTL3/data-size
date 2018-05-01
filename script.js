/*
   @https://github.com/jakemadness/data-size
*/
var lengthToSize = function(length) {
   var response = {};
   if ( length >= 1073741824 ) {
      response.size   = length / 1073741824;
      response.suffix = response.size >= 2 ? 'Gigabytes' : 'Gigabyte';
   }
   else if ( length >= 1048576 ) {
      response.size   = length / 1048576;
      response.suffix = response.size >= 2 ? 'Megabytes' : 'Megabyte';
   }
   else if ( length >= 1024 ) {
      response.size   = length / 1024;
      response.suffix = response.size >= 2 ? 'Kilobytes' : 'Kilobyte';
   }
   else {
      response.size   = length;
      response.suffix = response.size !== 1 ? 'Bytes' : 'Byte';
   }
   return response;
};
