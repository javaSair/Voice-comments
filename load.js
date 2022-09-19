var script = document.createElement('script');
script.onload = function() {
     console.log("Exit Loading file");
};
script.src = "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.0.js";
document.getElementsByTagName('head')[0].appendChild(script);
