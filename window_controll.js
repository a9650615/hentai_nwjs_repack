var dialog = require('dialog');

global.Path_Selector=function(def){
  var paths = dialog.showOpenDialog(null, {defaultPath:def, properties: [ 'openFile', 'openDirectory', '' ]});
  return  paths;
};
