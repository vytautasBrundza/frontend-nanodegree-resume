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
	var contactsList;
	if(JSONbio.contacts.mobile){
		contactsList=HTMLmobile.replace("%data%",JSONbio.contacts.mobile);
	}
	if(JSONbio.contacts.email){
		contactsList=contactsList+HTMLemail.replace("%data%",JSONbio.contacts.email);
	}
	if(JSONbio.contacts.github){
		contactsList=contactsList+HTMLgithub.replace("%data%",JSONbio.contacts.github);
	}
	if(JSONbio.contacts.twitter){
		contactsList=contactsList+HTMLemail.replace("%data%",JSONbio.contacts.twitter);
	}
	if(JSONbio.contacts.location){
		contactsList=contactsList+HTMLlocation.replace("%data%",JSONbio.contacts.location);
	}
	$("#topContacts").append(contactsList);
	$("#footerContacts").append(contactsList);
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
      document.getElementById('footerContacts').style.display = 'none';
      console.log("contacts hidden");
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

// EDUCATION
function FillEducation(JSONeducation)
{
	console.log("replacing education data");
	// schools
	if(JSONeducation.schools){
		for (i = 0; i < JSONeducation.schools.length; i++) {
			// create single school HTML
			var HTMLschool=HTMLschoolStart;
			// create container for all single school details
			var schoolDetails;
			// fill work HTML with specific school data
    		schoolDetails=HTMLschoolName.replace("%data%",JSONeducation.schools[i].name)
    		+HTMLschoolDegree.replace("%data%",JSONeducation.schools[i].degree)
    		+HTMLschoolDates.replace("%data%",JSONeducation.schools[i].dates)
    		+HTMLschoolLocation.replace("%data%",JSONeducation.schools[i].location);
    		if(JSONeducation.schools[i].majors)
    		{
    			for (j = 0; j < JSONeducation.schools[i].majors.length; j++) {
    				schoolDetails=schoolDetails+HTMLschoolMajor.replace("%data%",JSONeducation.schools[i].majors[j]);
    			}
    		}
    		// add all details to the container
    		HTMLschool=HTMLschool.insertAt(29,schoolDetails);
    		// append school to the page
    		$("#education").append(HTMLschool);
		}
	}
	else{console.log("schools data not valid");}
	// online courses
	if(JSONeducation.onlineCourses){
		for (i = 0; i < JSONeducation.onlineCourses.length; i++) {
			// create single school HTML
			var HTMLcourse=HTMLschoolStart;
			// create container for all single school details
			var courseDetails;
			// fill work HTML with specific school data
    		courseDetails=HTMLonlineTitle.replace("%data%",JSONeducation.onlineCourses[i].title)
    		+HTMLonlineSchool.replace("%data%",JSONeducation.onlineCourses[i].school)
    		+HTMLonlineDates.replace("%data%",JSONeducation.onlineCourses[i].dates)
    		+HTMLonlineURL.replace("%data%",JSONeducation.onlineCourses[i].url);
    		// add all details to the container
    		HTMLcourse=HTMLonlineClasses+HTMLcourse.insertAt(29,courseDetails);
    		// append school to the page

    		$("#education").append(HTMLcourse);
		}
	}
	else{console.log("online courses data not valid");}
}

function HideEducation()
{
	if(document.getElementsByClassName('education-entry').length === 0) {
      document.getElementById('education').style.display = 'none';
      console.log("education hidden");
    }
}

$.ajax({
url: "data/education.json",
success: function (data) {
  console.log("successfully loaded education JSON file");
  FillEducation(JSON.parse(data));
  HideEducation();
},
error: function (data) {
  console.log("could not load education JSON file");
  HideEducation();
}
});
// INTERACTIVE MAP

$("#map-div").append(googleMap);

