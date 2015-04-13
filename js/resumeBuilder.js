
//$("#main").append(["Thang Nguyen"]);
//$("$header").prepend(name)

var name = "Thang Nguyen";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Accountant";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName, formattedRole);


var mobile = "(714)809-3329";
var formattedmobile = HTMLmobile.replace("%data%", mobile);

var email = "thang@fromttm.com";
var formattedemail = HTMLemail.replace("%data%", email);

var twitter = "thangtheman";
var formattedtwitter = HTMLtwitter.replace("%data%", twitter);

var github = "thangtheman";
var formattedgithub = HTMLgithub.replace("%data%", github);

var city = "Orange County";
var formattedcity = HTMLlocation.replace("%data%", city);




$("#topContacts").append(formattedmobile, formattedemail, formattedtwitter, formattedgithub, formattedcity);