// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // if (parseFloat(json) !== NaN) {
  //    return parseFloat(json);
  //  } else 
  if (json[0] === '[') { //array
    var arr = [];
    var testString = json.slice(1, json.length-1);
    testString.split(',').forEach(function(v, i) {
      arr.push(parseJSON(v));
    });
    return arr;
  } else if (json[0] === '{') { //object
    var obj = {};
    var testString = json.slice(1, json.length-1);
    //iteration over split by comma
    ///split by colon and assign key/value pairs
    ///add to obj
    testString.split(',').forEach(function(v, i) {

    });
    return obj;
  } else if(json === 'null'){ return null;
  } else if(parseFloat(json) !== NaN){
    return parseFloat(json);
  } else if (json === 'true' || 'false') {
    return json === "true" ? true : false;
  } else { //string
    return json; //json.slice(1, json.length - 1);
  }
}

//input string
//output text in string in type implied by string

