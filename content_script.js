//window.alert("c_1");
var msg = {
    username:document.getElementsByClassName("r6kbgd")[0].innerHTML,
    url: document.URL
};
//window.alert("c_2");
//window.alert(msg.url);
chrome.runtime.sendMessage(msg);
//window.alert("c_3");
//window.alert("Welcome, "+msg.username+"!");