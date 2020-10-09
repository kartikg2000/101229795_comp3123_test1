var fs = require('fs');
var gutil = require('gulp-util');

fs.exists('./', function(exists) {
  if(exists) {
    //Show in green
    console.log(gutil.colors.green('File exists. Deleting now ...'));
    fs.unlink('./');
  } else {
    //Show in red
    console.log(gutil.colors.red('File not found, so not deleting.'));
  }
});