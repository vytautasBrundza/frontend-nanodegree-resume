function createObjectFromJSON(file, source)
{
	switch(source) {
    case "file":
        $.ajax({
			url: file,
			success: function (data) {
				console.log('successfully loaded '+file);
				var obj=JSON.parse(data);
				obj.FillData=new Function("return ("+obj.fillData+")")();
				obj.HideSections=new Function("return ("+obj.hideSections+")")();
				obj.FillData();
				obj.HideSections();
			},
			error: function (data) {
		  		console.log('could not load '+file);
			}
		});
        break;
    case "variable":
        var obj=JSON.parse(file);
		obj.FillData=new Function("return ("+obj.fillData+")")();
		obj.HideSections=new Function("return ("+obj.hideSections+")")();
		obj.FillData();
		obj.HideSections();
		return obj;
        break;
    default:
    	console.log("source type not specified!");
    	break;
	}
}
// INTERACTIVE MAP
$('#map-div').append(googleMap);

// uncomment this out to read data from files
/*
var JSONbio='data/bio.json';
var JSONwork='data/work.json';
var JSONprojects='data/projects.json';
var JSONeducation='data/education.json';
*/
// JSON data stored in variables, rather than files (comment this out if want to read from files)

var JSONbio="{  \"name\": \"Vytautas Brundza\",  \"role\": \"Junior Web Developer\",  \"contacts\": {    \"mobile\": \"078784935\",    \"email\": \"vytautas.brundza@cohaesus.co.uk\",    \"github\": \"https://github.com/vytautasBrundza\",    \"twitter\": \"\",    \"location\": \"London\"  },  \"welcomeMessage\": \"Hello World\",  \"skills\": [    \"C#\",    \"Photoshop\",    \"Skateboarding\"  ],  \"biopic\": \"http://cohaesus.co.uk/wp-content/uploads/2015/03/Vytautas-0231.jpeg\",  \"fillData\": \"function(){console.log('replacing bio data');if(this.role){$('#header').prepend(HTMLheaderRole.replace('%data%',this.role));}if(this.name){$('#header').prepend(HTMLheaderName.replace('%data%',this.name));}var contactsList;if(this.contacts.mobile){contactsList=HTMLmobile.replace('%data%',this.contacts.mobile);}if(this.contacts.email){contactsList=contactsList+HTMLemail.replace('%data%',this.contacts.email);}if(this.contacts.github){contactsList=contactsList+HTMLgithub.replace('%data%',this.contacts.github);}if(this.contacts.twitter){contactsList=contactsList+HTMLemail.replace('%data%',this.contacts.twitter);}if(this.contacts.location){contactsList=contactsList+HTMLlocation.replace('%data%',this.contacts.location);}$('#topContacts').append(contactsList);$('#footerContacts').append(contactsList);if(this.biopic){$('#header').append(HTMLbioPic.replace('%data%',this.biopic));}if(this.welcomeMessage){$('#header').append(HTMLwelcomeMsg.replace('%data%',this.welcomeMessage));}if(this.skills){$('#header').append(HTMLskillsStart);for (i = 0; i < this.skills.length; i++) {$('#header').append(HTMLskills.replace('%data%',this.skills[i]));}}}\",  \"hideSections\": \"function(){if(document.getElementsByTagName('h1').length === 0){document.getElementById('header').style.display = 'none';console.log('header hidden');}if(document.getElementsByClassName('flex-item').length === 0) {document.getElementById('topContacts').style.display = 'none';document.getElementById('footerContacts').style.display = 'none';console.log('contacts hidden');}}\"}";

var JSONwork="{  \"jobs\": [{    \"employer\": \"Cohaesus\",    \"title\": \"Junior Web Developer\",    \"location\": \"London\",    \"dates\": \"31-06-2013 - now\",    \"description\": \"Working as junior web developer\"  }  ],  \"fillData\": \"function(){console.log('replacing work data');if(this.jobs){for (i = 0; i < this.jobs.length; i++){var workDetails=HTMLworkEmployer.replace('%data%',this.jobs[i].employer)+HTMLworkTitle.replace('%data%',this.jobs[i].title)+HTMLworkDates.replace('%data%',this.jobs[i].dates)+HTMLworkLocation.replace('%data%',this.jobs[i].location)+HTMLworkDescription.replace('%data%',this.jobs[i].description);$('#workExperience').append(HTMLworkStart.insertAt(24,workDetails));}}else{console.log('work data not valid');}}\",  \"hideSections\": \"function(){if(document.getElementsByClassName('work-entry').length === 0) {document.getElementById('workExperience').style.display = 'none';console.log('work hidden');}}\"}";

var JSONprojects="{  \"projects\": [{    \"title\": \"Cohaesus\",    \"dates\": \"2015 - 2016\",    \"description\": \"A very cute kittens project\",    \"images\": [\"https://lh4.ggpht.com/M1XTibfCgpi5pgjSDb7kXDh21N8fpn-8evzQVAX-qGFhSyArDmSuCAv1pjVp4jbAt_g=h900\",\"https://lh4.ggpht.com/M1XTibfCgpi5pgjSDb7kXDh21N8fpn-8evzQVAX-qGFhSyArDmSuCAv1pjVp4jbAt_g=h900\",\"http://colourfulrebel.com/en/wp-content/uploads/2015/06/Cute-Kittens-1-Wallpaper-HD.jpg\"]  }  ],  \"fillData\": \"function(){console.log('replacing project data');if(this.projects){for (i = 0; i < this.projects.length; i++) {var HTMLproject=HTMLprojectStart;var projectDetails;projectDetails=HTMLprojectTitle.replace('%data%',this.projects[i].title)+HTMLprojectDates.replace('%data%',this.projects[i].dates)+HTMLprojectDescription.replace('%data%',this.projects[i].description);if(this.projects[i].images){for (j = 0; j < this.projects[i].images.length; j++) {projectDetails=projectDetails+HTMLprojectImage.replace('%data%',this.projects[i].images[j]);}}HTMLproject=HTMLproject.insertAt(27,projectDetails);$('#projects').append(HTMLproject);}}else{console.log('project data not valid');}}\",  \"hideSections\": \"function(){if(document.getElementsByClassName('project-entry').length === 0) {document.getElementById('projects').style.display = 'none';console.log('projects hidden');}}\"}";

var JSONeducation="{  \"schools\": [{    \"name\": \"VGTU\",    \"location\": \"Vilnius\",    \"degree\": \"bachelor\",    \"majors\": [\"major1\"],    \"dates\": \"2013\",    \"url\": \"http://www.vgtu.lt/index.php?lang=2\"  },{    \"name\": \"ELATT\",    \"location\": \"London\",    \"degree\": \"NVQ 2\",    \"majors\":[\"major1\",\"major2\"],    \"dates\": \"2014\",    \"url\": \"http://www.elatt.org.uk/\"  }  ],  \"onlineCourses\": [{    \"title\": \"front end development\",    \"school\": \"Udacity\",    \"dates\": \"\",    \"url\": \"https://www.udacity.com\"  }  ],  \"fillData\": \"function(){console.log('replacing education data');if(this.schools){for (i = 0; i < this.schools.length; i++) {var schoolDetails=HTMLschoolName.replace('%data%',this.schools[i].name)+HTMLschoolDegree.replace('%data%',this.schools[i].degree)+HTMLschoolDates.replace('%data%',this.schools[i].dates)+HTMLschoolLocation.replace('%data%',this.schools[i].location);if(this.schools[i].majors){for (j = 0; j < this.schools[i].majors.length; j++) {schoolDetails=schoolDetails+HTMLschoolMajor.replace('%data%',this.schools[i].majors[j]);}}$('#education').append(HTMLschoolStart.insertAt(29,schoolDetails));}}else{console.log('schools data not valid');}if(this.onlineCourses){for (i = 0; i < this.onlineCourses.length; i++){var courseDetails=HTMLonlineTitle.replace('%data%',this.onlineCourses[i].title)+HTMLonlineSchool.replace('%data%',this.onlineCourses[i].school)+HTMLonlineDates.replace('%data%',this.onlineCourses[i].dates)+HTMLonlineURL.replace('%data%',this.onlineCourses[i].url);$('#education').append(HTMLonlineClasses+HTMLschoolStart.insertAt(29,courseDetails));}}else{console.log('online courses data not valid');}}\",  \"hideSections\": \"function(){if(document.getElementsByClassName('education-entry').length === 0) {document.getElementById('education').style.display = 'none';console.log('education hidden');}}\"}";

var bio=createObjectFromJSON(JSONbio, "variable");
var work=createObjectFromJSON(JSONwork, "variable");
var projects=createObjectFromJSON(JSONprojects, "variable");
var education=createObjectFromJSON(JSONeducation, "variable");
