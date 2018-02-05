var current_user="Ghost_141";
var taskID=30036437;
var url="";
//checkurl

function checkForValidUrl(tabId, changeInfo, tab) {
    var str=tab.url.toLowerCase();
    var patt="https://www.topcoder.com/challenges/";
    //console.log(str);
    if(str.search(patt)>-1){
        //window.alert("matched web");
        //window.alert(str);
        chrome.pageAction.show(tabId);
    }
  };
  

function getchallengeID(){
  var urlheader="https://www.topcoder.com/challenges/";
  var str=url.substring(urlheader.length,url.length);
  //window.alert(str);
  let pos=str.indexOf("/");
  if(pos>-1){
    taskID=Number(str.substring(0,str.indexOf("/")));
  }
  else{
      taskID=Number(str)
  }
}
//window.alert("b_1");
chrome.runtime.onMessage.addListener(function(msg) {
    current_user=msg.username;
    url=msg.url;
    //window.alert("b_2");
    //window.alert(url);
    //console.log("url",url);
    //console.log("name",current_user);
    getchallengeID();
    //window.alert(taskID);

});
//window.alert("b_3");
chrome.tabs.onUpdated.addListener(checkForValidUrl);
//window.alert("b_4");
