//exercise 1 & exercise 2
onload = function () {
    var savedUsername = localStorage.getItem("username");
    var savedPassword = localStorage.getItem("password");
    var rememberMeChecked = localStorage.getItem("rememberMe") === "true";
    if (savedUsername && savedPassword && rememberMeChecked) {
        document.getElementById("username").value = savedUsername;
        document.getElementById("password").value = savedPassword;
        document.getElementById("rememberMe").checked = true;
    }
};
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("rememberMe").checked;
    if (rememberMe) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("rememberMe", true);
    alert("Login data saved");
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.setItem("rememberMe", false); 
        alert("Login data not saved");
    }
});

// Can You Use Session Storage Instead of Local Storage?
// Yes, you can use session Storage instead of local Storage by replacing all instances of local Storage in the code with session Storage

// Difference Between Local Storage and Session Storage
// local Storage return data even after the browser is closed and reopened.
// session Storage clears data as soon as the browser tab is closed.

//  Can You Access Storage on Another Page?
// Yes, you can access local Storage and session Storage on another page as long as both pages are on the same domain, protocol, and port.


//exercise 3
var student = {
    id: 55,
    name: "Ahmed",
    age: 30,
    address: {
        street: "26 elhelaly Street",
        city: "Assiut",
        state: "Egypt",
        postalCode: "11111"
    },
    skills: ["HTML", "CSS","JavaScript"],
    isLeader: true
};
console.log(student);


//exercise 4
var students = [
    {
        id: 55,
        name: "Ahmed",
        age: 30,
        address: {
            street: "26 elhelaly Street",
            city: "Assiut",
            state: "Egypt",
            postalCode: "11111"
        },
        skills: ["HTML", "CSS","JavaScript"],
        isLeader: true
    },
    {
        id: 50,
        name: "Mohamed",
        age: 29,
        address: null,
        skills: ["c++", "Django", ".Net"],
        isLeader: false
    },
    {
        id: 52,
        name: "Mostafa",
        age: 28,
        address: {
            street: "14 Adly Street",
            city: "Assiut",
            state: "Egypt",
            postalCode: "12345"
        },
        skills: ["Python", "AI", "SQL"],
        isLeader: true
    }
];
students.forEach(student => {
    console.log(`Name: ${student.name}`);
    console.log("Skills:", student.skills.join(", "));
});

// Can JSON Hold null and Boolean Values?
// Yes, JSON can hold null and Boolean values.
// null: Represents the absence of a value, as used for the address field of the second student.
// Boolean Values: Represent true or false, as used in the isLeader field.

// Differences Between XML and JSON
// Structure:
// XML uses a tag-based structure with opening and closing tags to define data (e.g., <name>John</name>). JSON, on the other hand, uses a simpler key-value pair structure, typically surrounded by curly braces (e.g., "name": "John").

// Readability:
// JSON is generally more readable and concise due to its minimal syntax. XML is more verbose because of its repeated opening and closing tags.

// Data Size:
// XML files are larger in size because of the additional tags, whereas JSON is more compact, making it faster to transfer over networks.

// Data Types:
// JSON supports various data types such as strings, numbers, booleans, arrays, objects, and null. XML stores all data as text, so type handling requires additional work.

// Parsing:
// JSON can be parsed directly by most modern programming languages using built-in methods like JSON.parse() in JavaScript. Parsing XML requires dedicated parsers or libraries, which may add complexity.

// Flexibility and Extensibility:
// XML is more flexible and extensible as it supports custom-defined tags and attributes. JSON is less extensible because it relies on a strict structure of keys and values.


//exercise 5
function displayUserById() {
    var userId = document.getElementById("userId").value;
    var url = `https://reqres.in/api/users/${userId}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.data) {
                var user = data.data;
                var userDetails = `
                    <h3>User Details:</h3>
                    <p>First Name: ${user.first_name}</p>
                    <p>Last Name: ${user.last_name}</p>
                    <img src="${user.avatar}"style="width:200px; height:200px;">
                `;
                document.getElementById("userDetails").innerHTML = userDetails;
            } else {
                document.getElementById("userDetails").innerHTML = "<p>User not found</p>";
            }
        })
        .catch(error => console.error("Error:", error));
}
function populateDropdown() {
    var url = "https://reqres.in/api/users";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var users = data.data;
            var dropdown = document.getElementById("userDropdown");
            users.forEach(user => {
                const option = document.createElement("option");
                option.value = user.id;
                option.textContent = `${user.first_name} ${user.last_name}`;
                dropdown.appendChild(option);
            });
        })
        .catch(error => console.error("Error:", error));
}
function displaySelectedUser() {
    var userId = document.getElementById("userDropdown").value;
    if (userId) {
        const url = `https://reqres.in/api/users/${userId}`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.data) {
                    var user = data.data;
                    var userDetails = `
                        <h3>Selected User Details:</h3>
                        <p>First Name: ${user.first_name}</p>
                        <p>Last Name: ${user.last_name}</p>
                        <img src="${user.avatar}" style="width:100px; height:100px;">
                    `;
                    document.getElementById("dropdownUserDetails").innerHTML = userDetails;
                } else {
                    document.getElementById("dropdownUserDetails").innerHTML = "<p>User not found!</p>";
                }
            })
            .catch(error => console.error("Error:", error));
    } else {
        document.getElementById("dropdownUserDetails").innerHTML = '';
    }
}
onload = populateDropdown;


//exercise 6
function validateInput() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var fullNameRegex = /^(?! )[A-Za-z]{3,}( [A-Za-z]{3,})*(?<! )$/;
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|edu|org)\.eg$/;
    if (!fullNameRegex.test(fullName)) {
        document.getElementById("fullNameError").style.display = "inline";
    } else {
        document.getElementById("fullNameError").style.display = "none";
    }
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").style.display = "inline";
    } else {
        document.getElementById("emailError").style.display = "none";
    }
    if (fullNameRegex.test(fullName) && emailRegex.test(email)) {
        alert("Form submitted");
    }
}












