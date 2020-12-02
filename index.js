function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log (string.toUpperCase())
}
function logWhisper(string){
  console.log (string.toLowerCase())
}
function sayHiToGrandma(string){

  if (string.toLowerCase() === string) {
  return "I can't hear you!";  //  block of code to be executed if condition1 is true
  
}/* else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }
  
/*
  string.toLowerCase() === string
  return "I can't hear you!";

  string.toUpperCase() === string
  return "YES INDEED!";

  string === "I love you, Grandma"
	return  "I love you, too.";
*/
}
