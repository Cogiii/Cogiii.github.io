const buttons = document.querySelectorAll(".links > button");
const sections = document.querySelectorAll("main > section");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        const sectionClass = this.id.replace(/([A-Z])/g, "-$1").toLowerCase();
        
        sections.forEach(section => section.style.display = "none");
        
        document.querySelector(`.${sectionClass}`).style.display = "block";
        toggleMenu()
    });
});

const skillsData = [
    { 
        name: 'HTML', 
        percentage: '96.5%', 
        imgSrc: 'assets/icons/html_logo.png' 
    },
    { 
        name: 'CSS', 
        percentage: '84.8%', 
        imgSrc: 'assets/icons/css_logo.png' 
    },
    { 
        name: 'JavaScript', 
        percentage: '70.3%', 
        imgSrc: 'assets/icons/js_logo.png' 
    },
    { 
        name: 'Python', 
        percentage: '70.3%', 
        imgSrc: 'assets/icons/python_logo.png' 
    },
    { 
        name: 'Java', 
        percentage: '82%', 
        imgSrc: 'assets/icons/java_logo.png' 
    },
    { 
        name: 'MySQL', 
        percentage: '73.5%', 
        imgSrc: 'assets/icons/mysql_logo.png' 
    },
    { 
        name: 'NodeJS', 
        percentage: '45.6%', 
        imgSrc: 'assets/icons/nodejs_logo.png' 
    },
    { 
        name: 'Bootstrap', 
        percentage: '85%', 
        imgSrc: 'assets/icons/bootstrap_logo.png' 
    }
];

const skillsContainer = document.querySelector('.box');

skillsData.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.classList.add('skills');

    const skillImg = document.createElement('img');
    skillImg.src = skill.imgSrc;
    skillImg.alt = skill.name;

    const description = document.createElement('div');
    description.classList.add('description');

    const upper = document.createElement('div');
    upper.classList.add('upper');

    const skillName = document.createElement('p');
    skillName.textContent = skill.name;

    const skillPercentage = document.createElement('p');
    skillPercentage.textContent = skill.percentage;

    upper.appendChild(skillName);
    upper.appendChild(skillPercentage);

    const lower = document.createElement('div');
    lower.classList.add('lower');

    const progressBar = document.createElement('div');
    progressBar.classList.add('progressBar');

    const barValue = document.createElement('div');
    barValue.classList.add('barValue');
    barValue.style.width = skill.percentage;

    progressBar.appendChild(barValue);
    lower.appendChild(progressBar);

    description.appendChild(upper);
    description.appendChild(lower);

    skillElement.appendChild(skillImg);
    skillElement.appendChild(description);

    skillsContainer.appendChild(skillElement);
});

function typeAffiliation() {
    const affliations = [
        "CTO of Mapua Malayan Developer Student Club", 
        "Aspiring Software Engineer", 
        "Aspiring Fullstack Developer", 
        "Logistics Head of Computing Student Society", 
        "Research and Development Committee of API"
    ];
    let currentAffliation = 0;
    const affliationsTag = document.getElementById("affiliations");

    function typeText(affliation) {
        affliationsTag.textContent = '';
        affliationsTag.style.height = '2vw';
        [...affliation].forEach((char, i) => {
            setTimeout(() => {
                affliationsTag.textContent += char
                affliationsTag.style.height = 'auto';  
            }, i * 100);
        });

        setTimeout(() => reverseText(affliation), affliation.length * 100 + 1000);
    }

    function reverseText(affliation) {
        let currentText = affliationsTag.textContent;
        let currentIndex = currentText.length;

        const reverseInterval = setInterval(() => {
            affliationsTag.textContent = currentText.slice(0, currentIndex - 1);
            currentIndex--;
            if (currentIndex === 0) {
                clearInterval(reverseInterval);
                affliationsTag.textContent = ''
                affliationsTag.style.height = '2vw';
                setTimeout(() => {
                    currentAffliation = (currentAffliation + 1) % affliations.length;
                    typeText(affliations[currentAffliation]);
                }, 500);
            }
        }, 50);
    }

    typeText(affliations[currentAffliation]);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".projects .content .box .project .more a img").forEach((btnImg) => {
        btnImg.addEventListener("mouseenter", () => {
            btnImg.src = "assets/icons/arrow_top_right_active.png";
        });

        btnImg.addEventListener("mouseleave", () => {
            btnImg.src = "assets/icons/arrow_top_right.png";
        });
    });
});


const projects = [
    {
        image: "assets/projects/MyPortfolio.png",
        name: "My Personal Website",
        description: "A dynamic project portfolio website built using HTML, CSS, and JavaScript, showcasing various projects with interactive hover effects and responsive design.",
        stack: "HTML, CSS &Javascript",
        link: "/myportfolio"
    },
    {
        image: "assets/projects/AidVocate.png",
        name: "AidVocate",
        description: "AidVocate is a donation platform that connects donors with trusted charities. It helps organizations gain visibility and makes it easier for people to support causes they care about.",
        stack: "Javascript, NodeJS, MySQL & CSS",
        link: ""
    },
    {
        image: "assets/projects/FeedbackSystem.png",
        name: "MMCM Libary Feedback System",
        description: "Feedback System is a simple web application that allows users to rate their experience and provide comments. This was deployed in MMCM Library.",
        stack: "Javascript,  NodeJS, SQLite & CSS",
        link: "https://github.com/Cogiii/feedbackSystem"
    },
    {
        image: "assets/projects/EmployeeSystem.png",
        name: "Employee Management System",
        description: "A software application that keeps track of employee work hours and payroll. Built with JavaFX, it supports user login and role-based access. Made for Java Programming course.",
        stack: "Java, JavaFx & CSS",
        link: "https://github.com/Cogiii/EmployeeSystem"
    },
    {
        image: "assets/projects/POS.png",
        name: "Point of Sale (POS) System",
        description: "An application for restaurants, built with CustomTkinter and Excel, that streamlines order processing, tracks performance, and provides visual insights for menu optimization.",
        stack: "Python, Customtkinter & Excel",
        link: "https://github.com/Cogiii/Order-Management-System"
    }, 
    {
        image: "assets/projects/jewelry_express_website.png",
        name: "Jewelry Express Appointment System",
        description: "Jewelry Express is a booking appointment website designed for jewelry-related services, allowing customers to schedule consultations, repairs, or custom orders with ease.",
        stack: "HTMl, CSS, JavaScript, & NodeJS",
        link: "https://github.com/Cogiii/feedbackSystem"
    }
];

const projectContainer = document.querySelector(".projects > .content > .box");

projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    let moreDiv = "";
    if (project.link !== "") {
        moreDiv = `
            <div class="more">
                <p>Go To</p>
                <a href="${project.link}" target="_blank"><img src="assets/icons/arrow_top_right.png" alt="Go To"></a>
            </div>
        `;
    }
    
    projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.name}">
        <h2 class="projectName">${project.name}</h2>
        <p class="projectDescription">${project.description}</p>
        <p class="projectStack">${project.stack}</p>
        ${moreDiv}
    `;
    

    projectContainer.appendChild(projectElement);
});


function toggleMenu() {
    document.querySelector(".links").classList.toggle("show");
}



window.onload = function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('mainContent');
  
    home.classList.add("active")
    setTimeout(typeAffiliation, 500);

    loader.style.opacity = '0';  
    setTimeout(() => {
      loader.style.display = 'none';  
      content.style.display = 'block';
      content.classList.add('visible');
    }, 1000);  
};
  
  