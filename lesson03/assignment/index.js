//

const card = [
    {
      "name": "Paolo Maldini",
      "jobTitle": "Front End Developer",
      "company": "Web Weavers",
      "experience": "3 years",
      "school": "University of Washington",
      "major": "Marketing",
      "email": "paolo@example.com",
      "linkedInUrl": "paolo.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Node", "Express"
      ],
      "imageUrl": "img/headshot.jpg"
    },
    {
      "name": "Barbara Bonansea",
      "jobTitle": "Software Engineer",
      "company": "Excellence in the Cloud",
      "experience": "12 years",
      "school": "University of Southern California",
      "major": "Computer Science",
      "email": "barbara@example.com",
      "linkedInUrl": "barbara.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "JavaScript", "C", "Go"
      ],
      "imageUrl": "img/headshot.jpg"
    },
    {
      "name": "Javier Hernandez",
      "jobTitle": "User Experience Engineer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "Seattle University",
      "major": "Performing Arts",
      "email": "javier@example.com",
      "linkedInUrl": "javier.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS"
      ],
      "imageUrl": "img/headshot.jpg"
    },
    {
      "name": "Maribel Dominguez",
      "jobTitle": "Front End Engineer",
      "company": "Bits and Bytes",
      "experience": "6 years",
      "school": "University of Washington",
      "major": "Mechanical Engineering",
      "email": "maribel@example.com",
      "linkedInUrl": "maribel.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
      ],
      "imageUrl": "img/headshot.jpg"
    }
   ];

   const container = document.querySelector('.template-hook')

   // Function to create an employee card component
function createEmployeeCard(employee) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("container");
  
    const leftElement = document.createElement("div");
    leftElement.classList.add("left");
  
    const imageElement = document.createElement("img");
    imageElement.classList.add("employee-image");
    imageElement.src = employee.imageUrl;
    imageElement.alt = "Image of employee";
  
    const nameElement = document.createElement("p");
    nameElement.classList.add("name");
    nameElement.innerHTML = `${employee.name} <span><br>${employee.jobTitle}</span>`;
  
    leftElement.appendChild(imageElement);
    leftElement.appendChild(nameElement);
  
    const rightElement = document.createElement("div");
    rightElement.classList.add("right");
  
    const ulElement = document.createElement("ul");
    for (const key in employee) {
      if (key !== "name" && key !== "role" && key !== "imageUrl" && key !== "linkedInUrl") {
        const liElement = document.createElement("li");
        liElement.innerHTML = `<span>${key}: </span>${employee[key]}`;
        ulElement.appendChild(liElement);
      }
    }
  
    rightElement.appendChild(ulElement);
  
    if (employee.linkedInUrl) {
      const linkedinElement = document.createElement("p");
      linkedinElement.classList.add("linkedin");
      linkedinElement.innerHTML = `<br><img src="img/linkedin.svg" alt="LinkedIn">&nbsp;&nbsp;<span><a class="imagelinkedin" href="https://${employee.linkedInUrl}" target="_blank">${employee.linkedInUrl}</a></span>`;
      rightElement.appendChild(linkedinElement);
    }
  
    cardElement.appendChild(leftElement);
    cardElement.appendChild(rightElement);
  
    return cardElement;
  }
  
  // Function to insert employee cards into the page
  function insertEmployeeCardsIntoPage(employeeData) {
    const cardContainer = document.getElementById("cardContainer");
  
    employeeData.forEach((employee) => {
      const employeeCard = createEmployeeCard(employee);
      cardContainer.appendChild(employeeCard);
    });
  }
  
  // Call the function to insert employee cards into the page
  insertEmployeeCardsIntoPage(card);