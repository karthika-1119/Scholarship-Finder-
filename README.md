AI Scholarship Finder: A Step Towards Empowering Students
1. Introduction: A Vision Beyond Limits
The AI Scholarship Finder project was created as part of a Hackathon with the aim of helping students find scholarships tailored to their needs. The project was built by Boya Karthik and Golla Diwakar Yadav, two aspiring developers who ventured into this project without much prior experience in web development.
We were driven by a vision: to simplify the scholarship search process for students across the globe using Artificial Intelligence. Scholarships can change lives, but the process of finding and applying for the right ones can be confusing. This project aims to bridge the gap between deserving students and the opportunities available for them.
2. What Inspired Us to Build This Project
As students ourselves, we understand how overwhelming it can be to find scholarships. Manually searching for scholarships that align with specific criteria - such as education level, GPA, major, and location - can take hours, if not days. This inspired us to use AI to automate the process.
Even though we are not from a web development background - Karthik specializes in cybersecurity, and Diwakar Yadav focuses on design - we were motivated to take on this challenge. We believed that with hard work and persistence, we could build something impactful.
3. Project Overview
The AI Scholarship Finder is a web-based application that simplifies the scholarship search process for students. It collects user information, processes it, and matches it with relevant scholarships. The platform uses Firebase as a backend and integrates AI-powered recommendations using Gemini API.
Key Features
User-Friendly Interface
A simple and clean UI where students can input their details effortlessly.
Tailored Recommendations
Students receive personalized scholarship suggestions based on their information.
Efficient Data Collection
Information such as GPA, level of education, location, and income is stored securely in Firebase.
AI-Powered Filtering
The system uses AI to match user profiles with relevant scholarships.
Future Deadline Alerts
Alerts for upcoming scholarship deadlines (planned feature).

4. The Challenge We Faced
Despite our best efforts, we faced a significant roadblock: connecting our website to the Firebase database. Since we had limited experience in web development, setting up the database and integrating it into the website turned out to be more challenging than expected.
However, this setback didn't discourage us. We believe that failure is part of the learning process. We made progress up to the deployment stage, and we know this is only the beginning. We will continue to learn, fix the issues, and ensure our project works flawlessly.
"We do not leave our project here. We will continue learning on our own, and one day we will complete and publish it."
5. Technologies Used
HTML/CSS: For building the structure and styling the web pages.
JavaScript: For interactivity and dynamic functionalities.
Firebase: Backend database to store and retrieve user inputs.
Gemini API: AI integration for scholarship recommendations.

6. Code Implementation
Here's a quick look at the core implementation of our project:

HTML Code (index.html)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scholarship Finder</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Scholarship Finder</h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Search</a>
            <a href="#">Contact</a>
        </nav>
    </header>
    <section>
        <h2>Discover Scholarships Tailored Just for You</h2>
        <p>Let AI simplify your scholarship search process.</p>
        <button>Get Started</button>
    </section>
    <div id="form">
        <form id="scholarship-form">
            <input type="text" id="student-level" placeholder="Education Level" required>
            <input type="number" id="gpa" placeholder="GPA" required>
            <input type="text" id="location" placeholder="Location" required>
            <input type="text" id="major" placeholder="Major" required>
            <input type="number" id="income" placeholder="Income" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    <script src="https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js"></script>
    <script src="script.js"></script>
</body>
</html>
JavaScript Code (script.js)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
document.getElementById('scholarship-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const studentData = {
        level: document.getElementById('student-level').value,
        gpa: document.getElementById('gpa').value,
        location: document.getElementById('location').value,
        major: document.getElementById('major').value,
        income: document.getElementById('income').value
    };
    database.ref('students/').push(studentData)
        .then(() => {
            alert('Data stored successfully!');
        })
        .catch(error => console.error('Error: ', error));
});
CSS Code (style.css)
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
}
header {
    background-color: #f0f0f0;
    padding: 10px;
}
nav a {
    margin: 10px;
    text-decoration: none;
    color: black;
}
section {
    background-color: #4a90e2;
    color: white;
    padding: 50px;
}
form input {
    display: block;
    margin: 10px auto;
    padding: 10px;
    width: 80%;
}
button {
    padding: 10px 20px;
    background-color: #4a90e2;
    color: white;
    border: none;
    cursor: pointer;
}
AI Scholarship Finder7. Conclusion: A Project of Perseverance
This project was a great learning experience for us. Despite not having prior knowledge of web development, we pushed ourselves to learn HTML, CSS, JavaScript, and Firebase to build this project. While we encountered challenges with database integration, we remain committed to improving our skills and completing this project.
"We will not leave this project unfinished. By learning and growing, we will one day publish the AI Scholarship Finder and make it available to students worldwide."
Thank you for joining us on this journey. Stay tuned for updates as we continue to develop and improve the AI Scholarship Finder.
By Boya Karthik & Golla Diwakar Yadav.
Checkout the Our Project Here. 
References:
Google Gemini AI: https://gemini.google.com/
Firebase Documentation: https://firebase.google.com/docs
Special Thanks to Mrs.Abirami Sukumaran, Ph.D
LinkedIn Accounts :
Boya Karthik
Golla Diwakar Yadav
