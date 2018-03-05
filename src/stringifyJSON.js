// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(obj === undefined || typeof obj === 'function'){
    return '';
  } else if(typeof obj === 'string'){
    return '"' + obj + '"';
  } else if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
    return '' + obj;
  } else if(Array.isArray(obj)){
    var stringArr = '[';
    for(var i = 0; i < obj.length; i++){
      stringArr += stringifyJSON(obj[i]);
      if (i < obj.length - 1) { //check for indexing
        stringArr += ',';
    }}
    return stringArr + ']';
  } else if(typeof obj === 'object'){
    var stringObj = '{'
    for(var prop in obj){
      if(obj[prop] === undefined || typeof obj[prop] === 'function'){
        continue;
      } else {
      stringObj += stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]);
      if (Object.keys(obj)[Object.keys(obj).length - 1] !== prop) { // no i
        stringObj += ',';
      }}}
    return stringObj + '}';
    }
};
