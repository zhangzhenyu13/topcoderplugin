//window.alert("hi, world");
//console.log("topcoderRS plugin running instance start");
var mode=1;
var data=null;

var prank=document.getElementById("ranking");
var fetching=false;
var taskID= chrome.extension.getBackgroundPage().taskID;
var current_user=chrome.extension.getBackgroundPage().taskID;

//select mode
window.alert(url);
function setmode(choice){
  if(choice!=mode){
    mode=choice;
    //console.log("display mode set: "+mode);
    window.alert("setting mode"+mode);
    if(fetching) return;
    showResult();
  }
}

//
function showResult(){
  if(data.code!=200){
    prank.innerHTML="Currently not available, but we are trying to update data.";
    return;
  };
  var userlist=data.data;
  console.log(userlist);
  var i_rank=userlist.indexOf(current_user);
  
  n_users=userlist.length;

  if(i_rank!=-1){
    if(mode==1){
      rate=1-i_rank/n_users;
      prank.innerHTML=rate;
    }
    else if(mode==2){
      document.getElementById("ranking title").innerHTML="Your Ranking Position is";
      prank.innerHTML=i_rank+" amoung "+n_users;
    }
  }
}
//set data
function setRank(){
  fetching=true;
  prank.innerHTML="Loading...";
  var request=new XMLHttpRequest();

  var restAPI="http://192.168.7.112/topcoder/recommend/task?taskId="+taskID;

  document.getElementById("username").value=current_user;
  document.getElementById("challengeid").value=taskID;
  
  request.open('GET', restAPI,true);
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
    //console.log('Status:', this.status,typeof this.status);
    //console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    data=JSON.parse(this.responseText);
    fetching=false;
    showResult();
    }
  };
  
  request.send();
  
}