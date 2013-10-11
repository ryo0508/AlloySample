var args = arguments[0] || {};

$.login_submit.addEventListener('click', function() {
  var email = $.email.value, password = $.password.value;
  Ti.API.info("=================================================");
  Ti.API.info(email);
  Ti.API.info(password);
  // Ti.API.info("has email? " + Ti.APP.email != "" ? Ti.APP.email : "null");
  // Ti.API.info("has password? " + Ti.APP.password != "" ? Ti.APP.password : "null");
  Ti.API.info("=================================================");
  
  login(email, password);
});

function login(email, password) {
  var url = "http://localhost:3000/api/v1/users/sign_in";
  var xhr = Ti.Network.createHTTPClient();
  
  xhr.onerror = function(e) {
    alert("Error");
  };
  
  xhr.onload = function () {
    var data  = this.responseText;
    var jdata = JSON.parse(data);
    
    Ti.API.info(data);
  };
  
  xhr.open('POST', url);
  
  var params = {
    "user_login": {
      "email": email,
      "password": password
    }
  };
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(JSON.stringify(params));
};