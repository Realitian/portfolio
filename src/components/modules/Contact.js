
import './modules.css';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.innerHTML = 'Contact';

container.append( title );

// speech

const speech = document.createElement('P');
speech.innerHTML = "I am eager to answer any information demand and make quotation tailored to your special needs. I you want to discuss verbally, let's organize a Skype or Zoom meeting with you and your team.";

//

const mailLink = document.createElement('A');
mailLink.target = "_blank";
mailLink.href = 'mailto:felix.mariotto@gmail.com';

const mailIcon = document.createElement('I');
mailIcon.classList.add('fa', 'fa-envelope');

mailLink.append( mailIcon, 'felix.mariotto@gmail.com' );

//

const githubLink = document.createElement('A');
githubLink.target = "_blank";
githubLink.href = 'https://github.com/felixmariotto';

const githubIcon = document.createElement('I');
githubIcon.classList.add('fa', 'fa-github');

githubLink.append( githubIcon, 'Github' );

//

const linkedinLink = document.createElement('A');
linkedinLink.target = "_blank";
linkedinLink.href = 'https://www.linkedin.com/in/felixmariotto';

const linkedinIcon = document.createElement('I');
linkedinIcon.classList.add('fa', 'fa-linkedin-square');

linkedinLink.append( linkedinIcon, 'Linkedin' );

//

container.append( speech, mailLink, githubLink, linkedinLink );

//

export default container
