// BIO
function FillBio(JSONbio)
{
	console.log("replacing bio data");
	// FIRST LINE: NAME AND ROLE
	if(JSONbio.role){
		$("#header").prepend(HTMLheaderRole.replace("%data%",JSONbio.role));
	}
	if(JSONbio.name){
		$("#header").prepend(HTMLheaderName.replace("%data%",JSONbio.name));
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
		$("#header").append(HTMLbioPic.replace("%data%",JSONbio.biopic));
	}
	if(JSONbio.welcomeMessage){
		$("#header").append(HTMLwelcomeMsg.replace("%data%",JSONbio.welcomeMessage));
	}
	if(JSONbio.skills){
		$("#header").append(HTMLskillsStart);
		for (i = 0; i < JSONbio.skills.length; i++) {
    		$("#header").append(HTMLskills.replace("%data%",JSONbio.skills[i]));
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
			// create container for all single work details and fill with specific work data
    		var workDetails=HTMLworkEmployer.replace("%data%",JSONwork.jobs[i].employer)
    		+HTMLworkTitle.replace("%data%",JSONwork.jobs[i].title)
    		+HTMLworkDates.replace("%data%",JSONwork.jobs[i].dates)
    		+HTMLworkLocation.replace("%data%",JSONwork.jobs[i].location)
    		+HTMLworkDescription.replace("%data%",JSONwork.jobs[i].description);
    		// add all details to the container and append job to the page
    		$("#workExperience").append(HTMLworkStart.insertAt(24,workDetails));
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
			// create container for all single school details and fill with specific school data
    		var schoolDetails=HTMLschoolName.replace("%data%",JSONeducation.schools[i].name)
    		+HTMLschoolDegree.replace("%data%",JSONeducation.schools[i].degree)
    		+HTMLschoolDates.replace("%data%",JSONeducation.schools[i].dates)
    		+HTMLschoolLocation.replace("%data%",JSONeducation.schools[i].location);
    		if(JSONeducation.schools[i].majors)
    		{
    			for (j = 0; j < JSONeducation.schools[i].majors.length; j++) {
    				schoolDetails=schoolDetails+HTMLschoolMajor.replace("%data%",JSONeducation.schools[i].majors[j]);
    			}
    		}
    		// add all details to the container and append school to the page
    		$("#education").append(HTMLschoolStart.insertAt(29,schoolDetails));
		}
	}
	else{console.log("schools data not valid");}
	// online courses
	if(JSONeducation.onlineCourses){
		for (i = 0; i < JSONeducation.onlineCourses.length; i++) {
			// create container for all single school details and fill with specific school data
    		var courseDetails=HTMLonlineTitle.replace("%data%",JSONeducation.onlineCourses[i].title)
    		+HTMLonlineSchool.replace("%data%",JSONeducation.onlineCourses[i].school)
    		+HTMLonlineDates.replace("%data%",JSONeducation.onlineCourses[i].dates)
    		+HTMLonlineURL.replace("%data%",JSONeducation.onlineCourses[i].url);
    		// add all details to the container and append school to the page
    		$("#education").append(HTMLonlineClasses+HTMLschoolStart.insertAt(29,courseDetails));
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

