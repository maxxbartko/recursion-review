// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var childArr = [];

  function helper(node){
    
    if (node !== undefined && node.className.includes(className)) {
      childArr.push(node);
    }
    
    if (node.hasChildNodes()) {
      //var children = node.childNodes;
      for(var i = 0; i < node.children.length; i++){
        helper(node.children[i]);
      }    
    }
    return childArr;
  }
  
  return helper(document.body);  
};