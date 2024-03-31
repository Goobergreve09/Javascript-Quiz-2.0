const questions = [
  {
    question: "What is JavaScript?",
    answers: [
      "JavaScript is a scripting language used to make the website interactive",
      "JavaScript is an assembly language used to make the website interactive",
      "JavaScript is a compiled language used to make the website interactive",
      "None of the Above",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which of the following is correct about JavaScript?",
    answers: [
      "JavaScript is an Object-Based language",
      "JavaScript is Assembly-language",
      "JavaScript is an Object-Oriented language",
      "JavaScript is a High-level language",
    ],
    correctAnswerIndex: 0,
  },

  {
    question: "Inside which HTML element do we put the javascript?",
    answers: ["<body>", "<head>", "<script>", "<style>"],
    correctAnswerIndex: 2,
  },

  {
    question:
      "What is the correct syntax for referring to an external script called 'javascript.js'",
    answers: [
      "<script name ='javascript.js>'",
      "<script href = 'javascript.js'>",
      "<script rel = 'javascript.js'>",
      "<script src = 'javascript.js'>",
    ],
    correctAnswerIndex: 3,
  },

  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      "console.log('hello world')",
      "alert('Hello World')",
      "<h1>'Hello World'<h1>",
      "const alert = 'Hello World'",
    ],
    correctAnswerIndex: 1,
  },

  {
    question: "How do you call a function named 'myFunction'",
    answers: [
      "myFunction()",
      "call function myFunction",
      "myFunction[]",
      "myFunction",
    ],
    correctAnswerIndex: 0,
  },

  {
    question: "IsNaN() Evaluates And Argument To Determine if Given Value:",
    answers: [
      "Is not a Null",
      "Is not a Number",
      "Is not a New Object",
      "None of the Above",
    ],
    correctAnswerIndex: 1,
  },

  {
    question:
      "Which Of The Dialog Box Display a Message And a Data Entry Field?",
    answers: ["Alert()", "Confirm()", "Msg()", "Prompt()"],
    correctAnswerIndex: 3,
  },

  {
    question: "GetMonth() returns The Month as:",
    answers: ["Int", "Float", "Char", "String"],
    correctAnswerIndex: 0,
  },

  {
    question: "A Function Associated With An object is Called:",
    answers: ["Function", "Link", "Method", "String"],
    correctAnswerIndex: 2,
  },

  {
    question: "Which of the following adds a comment in Javascript",
    answers: ["**", "//", "/*", "*/"],
    correctAnswerIndex: 1,
  },
  {
    question: "Which of these are used to declare a variable?",
    answers: ["let", "const", "var", "All of the Above"],
    correctAnswerIndex: 3,
  },

  {
    question: "Which of these get the current date in Javascript?",
    answers: ["Date now()", "new Date ()", "Today's date = ()", "Datenew ()"],
    correctAnswerIndex: 1,
  },
  {
    question: "Which of the following is an array method?",
    answers: ["Map", "Filter", "Reduce", "All of the Above"],
    correctAnswerIndex: 3,
  },

  {
    question: "What is destructuring in JavaScript?",
    answers: [
      "Through destructuring, we can unpack values from arrays or object properties into separate variables.",
      "Destructuring allows us to restructure object properties",
      "Destructuring allows us to restructure array elements.",
      "All of the Above",
    ],
    correctAnswerIndex: 0,
  },

  {
    question: "What will ‘0 == false ’ evaluate to?",
    answers: ["null", "undefined", "Throws Error", "True"],
    correctAnswerIndex: 3,
  },

  {
    question:
      "What is the right syntax to accept an indefinite number of parameters?",
    answers: [
      "Function sum(...theArgs) {}",
      "Function sum(theArgs...) {}",
      "Function sum(theArgs) {} ",
      "Function sum([theArgs]) {}",
    ],
    correctAnswerIndex: 0,
  },
];

export default questions;
