let currentResume;
let currentIndex = 0;
let resumeData;
let appliedFor = document.getElementById("appliedFor");
let technicalSkillsUl = document.getElementById("info2");
let hobbiesUl = document.getElementById("info3");
let workExperienceDiv = document.getElementById("workExp");
let resumeName = document.getElementById("name");
let phoneNo = document.getElementById("mobNumber");
let email = document.getElementById("email");
let linkedin = document.getElementById("#");

let error = document.getElementById("error");
let resumeDiv = document.getElementById("resume");

let userImage = document.getElementById("logo");

let companyName = document.getElementById("companyName");
let companyPosition = document.getElementById("position");
let companyStartDate = document.getElementById("startDate");
let companyEndDate = document.getElementById("endDate");
let companySummary = document.getElementById("summary");

let projectDesc = document.getElementById("project");
// let projectSpan = document.getElementById("project-span");

let educationUG = document.getElementById("ug");
let educationPU = document.getElementById("pu");
let educationHS = document.getElementById("hs");

let intCompanyName = document.getElementById("i-companyName");
let intCompanyPosition = document.getElementById("i-position");
let intCompanyStartDate = document.getElementById("i-startDate");
let intCompanyEndDate = document.getElementById("i-endDate");
let intCompanySummary = document.getElementById("i-summary");

let achievements = document.getElementById("achievementList");

let previousButton = document.getElementById("btn1");
let nextButton = document.getElementById("btn2");

let search = document.getElementById("search");

window.onload = () => {
  if (data.resume.length != 0) {
    error.style.display = "none";

    resumeData = data.resume;
    currentResume = resumeData[currentIndex];
    previousButton.disabled = true;
    if (resumeData.length <= 1) nextButton.disabled = true;
    updateResumeHtml();
  } else {
    previousButton.disabled = true;
    nextButton.disabled = true;
    error.style.display = "block";
    resume.style.display = "none";
  }
};

function updateResumeHtml() {
  appliedFor.innerHTML = currentResume.basics.AppliedFor;
  resumeName.innerHTML = currentResume.basics.name;
  phoneNo.innerHTML = currentResume.basics.phone;
  email.innerHTML = currentResume.basics.email;
  linkedin.innerHTML = currentResume.basics.profiles.url;

  companyName.innerHTML =
    "<span class='s-companyName'>Company Name:</span>" +
    currentResume.work["Company Name"];
  companyPosition.innerHTML =
    "<span class='s-position'>Position:</span>" +
    currentResume.work.Position;
  companyStartDate.innerHTML =
    "<span class='s-startDate'>Start Date:</span>" +
    currentResume.work["Start Date"];
  companyEndDate.innerHTML =
    "<span class='s-endDate'>End Date:</span>" +
    currentResume.work["End Date"];
  companySummary.innerHTML =
    "<span class='s-summary'>Summary:</span>" + currentResume.work.Summary;

  projectSpan.innerHTML = currentResume.projects.name;
  projectDesc.innerHTML += ": " + currentResume.projects.description;

  educationUG.innerHTML =
    "<span class='s-education'>UG: </span>" +
    currentResume.education.UG.institute +
    ", " +
    currentResume.education.UG.course +
    ", " +
    currentResume.education.UG["Start Date"] +
    ", " +
    currentResume.education.UG["End Date"] +
    ", " +
    currentResume.education.UG["cgpa"];
  educationPU.innerHTML =
    "<span class='s-education'>PU: </span>" +
    currentResume.education["Senior Secondary"].institute +
    ", " +
    currentResume.education["Senior Secondary"].cgpa;
  educationHS.innerHTML =
    "<span class='s-education'>High School: </span>" +
    currentResume.education["High School"].institute +
    ", " +
    currentResume.education["High School"].cgpa;

  intCompanyName.innerHTML =
    "<span class='i-s-companyName'>Company Name:</span>" +
    currentResume.Internship["Company Name"];
  intCompanyPosition.innerHTML =
    "<span class='i-s-position'>Position:</span>" +
    currentResume.Internship.Position;
  intCompanyStartDate.innerHTML =
    "<span class='i-s-startDate'>Start Date:</span>" +
    currentResume.Internship["Start Date"];
  intCompanyEndDate.innerHTML =
    "<span class='i-s-endDate'>End Date:</span>" +
    currentResume.Internship["End Date"];
  intCompanySummary.innerHTML =
    "<span class='i-s-summary'>Summary:</span>" +
    currentResume.Internship.Summary;

  userImage.src = currentResume.basics.image
    ? currentResume.basics.image
    : "../assets/pngwing.com.png";

  updateTechnicalSkills(currentResume.skills.keywords);
  updateHobbies(currentResume.interests.hobbies);
  updateAchievements(currentResume.achievements.Summary);
}

function updateTechnicalSkills(keywords) {
  let str = "";
  for (const skill of keywords) {
    str += `<li class='info2'>${skill}</li>`;
  }
  technicalSkillsUl.innerHTML = str;
}

function updateHobbies(keywords) {
  let str = "";
  for (const hobby of keywords) {
    str += `<li class='info3'>${hobby}</li>`;
  }
  hobbiesUl.innerHTML = str;
}

function updateAchievements(keywords) {
  let str = "";
  for (const ach of keywords) {
    str += `<li class='achievementList'>${ach}</li>`;
  }
  achievements.innerHTML = str;
}

previousButton.addEventListener("click", (e) => {
  if (currentIndex > 0) {
    nextButton.disabled = false;
    currentIndex--;
    currentResume = resumeData[currentIndex];
    updateResumeHtml();
  }

  if (currentIndex == 0) previousButton.disabled = true;
});

nextButton.addEventListener("click", (e) => {
  if (currentIndex < resumeData.length - 1) {
    previousButton.disabled = false;
    currentIndex++;
    currentResume = resumeData[currentIndex];
    updateResumeHtml();
  }

  if (currentIndex == resumeData.length - 1) nextButton.disabled = true;
});

search.addEventListener("input", (e) => {
  previousButton.disabled = true;
  nextButton.disabled = true;

  let searchedValue = e.target.value;
  resumeData = [];
  for (const resume of data.resume) {
    if (resume.basics.AppliedFor.toLowerCase() === searchedValue.toLowerCase())
      resumeData.push(resume);
  }
  currentIndex = 0;
  if (resumeData.length != 0) {
    error.style.display = "none";
    resumeDiv.style.display = "flex";
    if (resumeData.length > 1) nextButton.disabled = false;
    currentResume = resumeData[currentIndex];
    updateResumeHtml();
  } else {
    error.style.display = "block";
    resumeDiv.style.display = "none";
  }
});
