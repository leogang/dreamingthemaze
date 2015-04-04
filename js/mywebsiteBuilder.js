var bio = {
	"name": "cody albert",
	"role": "front-end web developer",
	"contacts": {
    "mobile": "1234567",
    "email": "john@example.com",
    "twitter": "@applejuiced",
    "github": "leogang",
    "blog": "longreader.wordpress.com",
    "location": "San Diego, CA"
  },
  "welcome": "hi, hello, greetings, vilkommen",
	"skills": ["ui design", "web design", "python",
	  "analytical thinking"],
	"pic": "images/moebiusOpp.jpg"
};

var education = {
	"schools": [
	  {
	    "name": "SDSU",
		  "degree": "BA",
      "dates": "2015",
      "location": "San Diego, CA",
		  "major": "Philosophy",
		  "url": "sdsu.edu"
	  }
	],
	"onlineCourses": [
	  {
	    "title": "Front-End Web Developer Nanodegree",
		  "school": "Udacity",
		  "dates": "2015",
		  "url" : "udacity.com"
	  }
	]
};

var work = {
	"jobs": [
	  {
	  	"employer": "Decision Sciences Medical Company",
	  	"title": "GUI Engineer",
	  	"location": "Poway, CA",
	  	"dates": "August 2013 - Present",
	  	"description": "Reverse engineered multiple high-end ultrasonic machine GUI's"
	  },
	  {
	    "employer": "Sphinx Cabinetry",
	  	"title": "Carpenter/Cabinet Maker",
	  	"location": "San Diego, CA",
	  	"dates": "June 2012 - July 2013",
	  	"description": "Custom high-end carpentry and installation"
	  }
	]
};

var projects = {
	"projects": [
	  {
		  "title": "Resume",
		  "dates": "1999 - Present",
		  "description": "Built this very resume that you are right now looking at. Okie Day!",
		  "images": ["images/fry.jpg"]
	  }
    ]
};

// Header
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedPic = HTMLbioPic.replace("%data%", bio.pic);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedPic);

  // create contacts section
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);

  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  $("#topContacts").append(formattedBlog);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);

  // Welcome Message
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome);
  $("#topContacts").append(formattedWelcomeMsg);

  if (bio.skills.length > 0) {
    // create Skills section with title
	  $("#header").append(HTMLskillsStart);

  	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	  $("#skills").append(formattedSkill);

	  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

	  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	  $("#skills").append(formattedSkill);

	  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	  $("#skills").append(formattedSkill);
  }
}

bio.display();

// Work Experience
work.display = function() {
  for(i in work.jobs) {
  	// create new div for work experience
    $("#workExperience").append(HTMLworkStart);

	  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
  }
  // adds the google map at the bottom of the page
  $("#mapDiv").append(googleMap);
}

work.display();

// Projects
projects.display = function() {
	for(i in projects.projects) {
    // create new div for an individual project
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[i].images.length > 0) {
      for(j in projects.projects[i].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display();

// Education
education.display = function() {
  for(i in education.schools) {
    // create new div for schools attended
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    $(".education-entry:last").append(formattedName + formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
    $(".education-entry:last").append(formattedMajor);
  }

  for(i in education.onlineCourses) {
    // include a title and new div for Online Courses
    $("#education").append(HTMLonlineCourses)
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    $(".education-entry:last").append(formattedTitle + formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append(formattedURL);
  }
}

education.display();
