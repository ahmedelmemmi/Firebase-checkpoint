
var config = {
    apiKey: "AIzaSyCmj9oW57GsPnNyYbQuMuMApS3p-zZPx-0",
    authDomain: "fir-test-aaede.firebaseapp.com",
    databaseURL: "https://fir-test-aaede.firebaseio.com",
    projectId: "fir-test-aaede",
    storageBucket: "fir-test-aaede.appspot.com",
    messagingSenderId: "648047737927"
  };
  firebase.initializeApp(config);
  var messagesRef = firebase.database().ref("test");
//   var ref = database.ref("test");

document.getElementById("contactForm").addEventListener("submit",submitForm);
function submitForm(e){
e.preventDefault();

var name = getInputVal('name');
var track= getInputVal('track');
var slide= getInputVal('slide');
var msg= getInputVal('msg');
saveMessage(name,track,slide,msg);
document.querySelector('.alert').style.display ='block';
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
 },3000);
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, track,slide,msg){
var newMessagesRef = messagesRef.push();
messagesRef.set({
    name:name,
    track:track,
    slide:slide,
    msg:msg
});
}
























// function submit(){
//     var data={
//         name: e,
//         track: 8,
//         slide :"black",
//         message:"c'est bon"
//     };
//     ref.push(data);
// }











