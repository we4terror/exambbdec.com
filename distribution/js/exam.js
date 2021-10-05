
let questions = [
  {
    id: 1,
    question: "The legal risks of ethical hacking include lawsuits due to __________ of personal data.",
    answer: "Disclosure",
    options: [
      "Stealing",
      "Disclosure",
      "Deleting",
      "Hacking"
    ]
  },
  {
    id: 2,
    question: "After performing ____________ the ethical hacker should never disclose client information to other parties.",
    answer: "Penetration Testing",
    options: [
      "Hacking",
      "Cracking",
      "Penetration Testing",
      "Exploiting"
    ]
  },
  {
    id: 3,
    question: "_____________ is the technique used in business organizations and firms to protect IT assets.",
    answer: "Ethical hacking",
    options: [
      "Ethical hacking",
      "Unethical hacking",
      "Fixing bugs",
      "Internal data-breach"
    ]
  },
  {
    id: 4,
    question: "________ helps to classify arguments and situations, better understand a cyber-crime and helps to determine appropriate actions.",
    answer: "Cyber-ethics",
    options: [
      "Cyber-ethics",
      "Social ethics",
      "Cyber-bullying",
      "Corporate behaviour"
    ]
  },
  {
    id: 5,
    question: "Performing a shoulder surfing in order to check other’s password is ____________ ethical practice.",
    answer: "a bad",
    options: [
      "a good",
      "not so good",
      "very good social engineering practice",
      "a bad"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "result.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
