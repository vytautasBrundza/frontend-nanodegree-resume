// Helper function (http://stackoverflow.com/questions/4364881/inserting-string-at-position-x-of-another-string)
String.prototype.insertAt=function(index, string) {
  return this.substr(0, index) + string + this.substr(index);
}

// BIO
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

$.ajax({
url: "data/bio.json",
success: function (data) {
  console.log("successfully loaded bio JSON file");
  FillBio(JSON.parse(data));
  HideBio();
},
error: function (data) {
  console.log("could not load bio JSON file");
  HideBio();
}
});

function HideBio()
{
	if(document.getElementsByTagName('h1').length === 0) {
      document.getElementById('header').style.display = 'none';
      console.log("header hidden");
    }
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.display = 'none';
      console.log("top contacts hidden");
    }
}

// WORK
function FillWork(JSONwork)
{
	console.log("replacing work data");
	if(JSONwork.jobs){
		for (i = 0; i < JSONwork.jobs.length; i++) {
			// create single work HTML
			var HTMLwork=HTMLworkStart;
			// create container for all single work details
			var workDetails;
			// fill work HTML with specific work data
    		workDetails=HTMLworkEmployer.replace("%data%",JSONwork.jobs[i].employer)
    		+HTMLworkTitle.replace("%data%",JSONwork.jobs[i].title)
    		+HTMLworkDates.replace("%data%",JSONwork.jobs[i].dates)
    		+HTMLworkLocation.replace("%data%",JSONwork.jobs[i].location)
    		+HTMLworkDescription.replace("%data%",JSONwork.jobs[i].description);
    		// add all details to the container
    		HTMLwork=HTMLwork.insertAt(24,workDetails);
    		// append job to the page
    		$("#workExperience").append(HTMLwork);
		}
	}
	else{console.log("work data not valid");}
}

function HideWork()
{
	if(document.getElementsByClassName('work-entry').length === 0) {
      document.getElementById('workExperience').style.display = 'none';
      console.log("work hidden");
    }
}

$.ajax({
url: "data/work.json",
success: function (data) {
  console.log("successfully loaded work JSON file");
  FillWork(JSON.parse(data));
  HideWork();
},
error: function (data) {
  console.log("could not load work JSON file");
  HideWork();
}
});

// PROJECTS
function FillProjects(JSONprojects)
{
	console.log("replacing project data");
	if(JSONprojects.projects){
		for (i = 0; i < JSONprojects.projects.length; i++) {
			// create single project HTML
			var HTMLproject=HTMLprojectStart;
			// create container for all single project details
			var projectDetails;
			// fill work HTML with specific project data
    		projectDetails=HTMLprojectTitle.replace("%data%",JSONprojects.projects[i].title)
    		+HTMLprojectDates.replace("%data%",JSONprojects.projects[i].dates)
    		+HTMLprojectDescription.replace("%data%",JSONprojects.projects[i].description);
    		if(JSONprojects.projects[i].images)
    		{
    			for (j = 0; j < JSONprojects.projects[i].images.length; j++) {
    				projectDetails=projectDetails+HTMLprojectImage.replace("%data%",JSONprojects.projects[i].images[j]);
    			}
    		}
    		// add all details to the container
    		HTMLproject=HTMLproject.insertAt(27,projectDetails);
    		// append project to the page
    		$("#projects").append(HTMLproject);
		}
	}
	else{console.log("project data not valid");}
}

function HideProjects()
{
	if(document.getElementsByClassName('project-entry').length === 0) {
      document.getElementById('projects').style.display = 'none';
      console.log("projects hidden");
    }
}

$.ajax({
url: "data/projects.json",
success: function (data) {
  console.log("successfully loaded projects JSON file");
  FillProjects(JSON.parse(data));
  HideProjects();
},
error: function (data) {
  console.log("could not load projects JSON file");
  HideProjects();
}
});