// REPLACE DATA FOR BIO
function FillBio(JSONbio)
{
	console.log("replacing bio data");
	// FIRST LINE: NAME AND ROLE
	if(JSONbio.role){
		HTMLheaderRole=HTMLheaderRole.replace("%data%",JSONbio.role);
		$("#header").prepend(HTMLheaderRole);
	}
	if(JSONbio.name){
		HTMLheaderName=HTMLheaderName.replace("%data%",JSONbio.name);
	$("#header").prepend(HTMLheaderName);
	}
	// CONTACTS LIST
	if(JSONbio.contacts.location){
		HTMLlocation=HTMLlocation.replace("%data%",JSONbio.contacts.location);
		$("#topContacts").prepend(HTMLlocation);
	}
	if(JSONbio.contacts.twitter){
		HTMLtwitter=HTMLemail.replace("%data%",JSONbio.contacts.twitter);
		$("#topContacts").prepend(HTMLtwitter);
	}
	if(JSONbio.contacts.github){
		HTMLgithub=HTMLgithub.replace("%data%",JSONbio.contacts.github);
		$("#topContacts").prepend(HTMLgithub);
	}
	if(JSONbio.contacts.email){
		HTMLemail=HTMLemail.replace("%data%",JSONbio.contacts.email);
		$("#topContacts").prepend(HTMLemail);
	}
	if(JSONbio.contacts.mobile){
		HTMLmobile=HTMLmobile.replace("%data%",JSONbio.contacts.mobile);
		$("#topContacts").prepend(HTMLmobile);
	}
	// IMAGE ROW
	if(JSONbio.biopic){
		HTMLbioPic=HTMLbioPic.replace("%data%",JSONbio.biopic);
	$("#header").append(HTMLbioPic);
	}
	if(JSONbio.welcomeMessage){
		HTMLwelcomeMsg=HTMLwelcomeMsg.replace("%data%",JSONbio.welcomeMessage);
	$("#header").append(HTMLwelcomeMsg);
	}
	if(JSONbio.skills){
		$("#header").append(HTMLskillsStart);
		for (i = 0; i < JSONbio.skills.length; i++) {
    		var HTMLskill=HTMLskills.replace("%data%",JSONbio.skills[i]);
    		$("#header").append(HTMLskill);
		}
	}
}

// LOAD BIO
$.ajax({
url: "data/bio.json",
success: function (data) {
  console.log("successfully loaded bio JSON file");
  FillBio(JSON.parse(data));
  HideBio();
},
error: function (data) {
  console.log("could not load bio JSON file");
  HideHeader();
}
});

function HideBio()
{
	if(document.getElementsByTagName('h1').length === 0) {
      document.getElementById('header').style.display = 'none';
    }
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.display = 'none';
    }
}