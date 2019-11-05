
var firebaseConfig = {
	apiKey: "AIzaSyB3iOA424jKYZAgMfPDM3qXc6Z2isbg_Qs",
	authDomain: "myfirstapp-5390e.firebaseapp.com",
	databaseURL: "https://myfirstapp-5390e.firebaseio.com",
	projectId: "myfirstapp-5390e",
	storageBucket: "",
	messagingSenderId: "899197736247",
	appId: "1:899197736247:web:eb20d1284ca521d5"
}
firebase.initializeApp(firebaseConfig);


var firebaseRef= firebase.database().ref().child("table_Stories");
function clickMe(){
	var today = new Date();
	// This is for getting data
	var id = document.getElementById("mainID").value;
	var name = document.getElementById("mainText").value;	
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	// This is for storing data
	var x = {name: name, 
		date:date,
		 time: time
		}
	// child (is the primary key )
	// set is for Insert Text
	firebaseRef.child(id).set(x);
}

function RemoveMe(){
	var id = document.getElementById("mainID").value;
	firebaseRef.child(id).remove();
}

firebaseRef.on("child_added",snap =>{
	var name = snap.child("name").val();
	console.log("Content of The  Stories: ",name);
});

firebaseRef.on('child_added', function(data) {
	//data.key will be like -KPmraap79lz41FpWqLI
	
	console.log("Story ID: ",data.key);
 });
var specRef=firebase.database().ref().child("table_Stories/Hello");
specRef.once("value").then(function(snapshot) {
	var user = snapshot.val();
	console.log(user.name);
  });

  var rootRef = firebase.database().ref().child("table_Stories");
  rootRef.on("child_added", snap =>
  {
	  var name = snap.child("name").val();
	  var date= snap.child("date").val();
	  var time = snap.child("time").val();
	  console.log(name,time,date)
	 $("#table_body").append("<tr><td>"+name+"</td><td>"+date+"</td><td>"+time+"</td></tr>");
  });
  var progNum=0;
  function move(){
	
	
	
	progNum=progNum+40;
		
	

  }
  var elem = $('.progress-bar');
  if (progNum <=100){
	elem.css('width',progNum+'%');
	elem.attr('aria-valuenow',progNum);}
	else{
		console.log("SUCCESS");
		clearInterval();
	}






 

