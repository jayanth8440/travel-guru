// packages and services array object
const packages = [
    {
        image: "./Images/france.jpg",
        title: "France",
        subTitle: "A place where we celebrate love❤.",
        price: 1000,
        rating: 4.5
    },
    {
        image: "./Images/maldives.jpg",
        title: "Maldives",
        subTitle: "Always Natural🙌.",
        price: 300,
        rating: 3.0
    },
    {
        image: "./Images/dubai.jpg",
        title: "Dubai",
        subTitle: "Make it happen🎁.",
        price: 500,
        rating: 4.0
    },
    {
        image: "./Images/taj.jpg",
        title: "India",
        subTitle: "Incrediable India!😍.",
        price: 250,
        rating: 4.8
    },
    {
        image: "./Images/srilanka.jpg",
        title: "Sri Lanka",
        subTitle: "You'll come back for more✨.",
        price: 200,
        rating: 4.7
    },
    {
        image: "./Images/malasia.jpg",
        title: "Malaysia",
        subTitle: "Malaysia truly Asia😜.",
        price: 250,
        rating: 2.8
    },
    {
        image: "./Images/indo.jpg",
        title: "Indonesia",
        subTitle: "Wonderful Indonasia😎.",
        price: 320,
        rating: 3.1
    },
    {
        image: "./Images/sa.jpg",
        title: "South Africa",
        subTitle: "Inspiring new ways👌.",
        price: 599,
        rating: 4.0
    },
    {
        image: "./Images/china.jpg",
        title: "China",
        subTitle: "Beautiful China👀.",
        price: 480,
        rating: 3.2
    },
]

const services = [
    {
        name: "Affordable Hotel",
        description: "Booking and reservation services for hotels, resorts, lodges, and vacation rentals"
    },
    {
        name: "Food & Drinks",
        description: "Engage travelers in interactive and educational experiences related to food and beverages"
    },
    {
        name: "Safety Guide",
        description: "Be aware of your surroundings and trust your instincts"
    },
    {
        name: "Travel Insurance",
        description: "Offer travel insurance options to ensure travelers' safety and security during their trips"
    },
    {
        name: "Transportation Assistance",
        description: "Arrangement of airport transfers, car rentals, and transportation between destinations"
    },
    {
        name: "Wellness & Spa",
        description: "Wellness retreats and spa for relaxation and rejuvenation"
    },
]

const galleryImages = [
    {
        imageUrl: "./Images/g1.jpg"
    },
    {
        imageUrl: "./Images/g2.jpg"
    },
    {
        imageUrl: "./Images/g3.jpg"
    },
    {
        imageUrl: "./Images/g4.jpg"
    },
    {
        imageUrl: "./Images/g5.jpg"
    },
    {
        imageUrl: "./Images/g6.jpg"
    },
    {
        imageUrl: "./Images/g7.jpg"
    },
    {
        imageUrl: "./Images/g8.jpg"
    }

]

// package and service section reference.
const packageSection = document.getElementById('package-section');
const serviceSection = document.getElementById('services-section');
const gallerySection = document.getElementById('gallery-section');

const packageBookingBtn = document.getElementById('packageBookingBtn');

// form input elements reference.
const whereTo = document.getElementById('whereTo');
const persons = document.getElementById('persons');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const description = document.getElementById('description');

// error elements reference for input fields.
const whereToError = document.getElementById('whereToError');
const personsError = document.getElementById('personsError');
const startDateError = document.getElementById('startDateError');
const endDateError = document.getElementById('endDateError');
const descriptionError = document.getElementById('descriptionError');

// booking form reference
const bookingForm = document.getElementById('bookingForm');

// functions to validate the form input fields.
function validateNotEmpty(value, errorElement, errorMessage) {
    if (!value) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validatePositiveInteger(value, errorElement, errorMessage) {
    if (value < 1) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateDateNotInPast(value, currentDateValue, errorElement, errorMessage) {
    if (value < currentDateValue) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateEndDateAfterStartDate(endDateValue, startDateValue, errorElement, errorMessage) {
    if (endDateValue < startDateValue) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateDescriptionLength(value, errorElement, errorMessage, minLength) {
    if (value.length < minLength) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// function to handle booking form.
function handleFormSubmit(e) {
    var currentDate = new Date().toISOString().split('T')[0];

    var isValid = true;

    if (!whereTo.value || !persons.value || !startDate.value || !endDate.value || !description.value) {
        isValid &= validateNotEmpty(whereTo.value, whereToError, "Error: Complete this field.");
        isValid &= validateNotEmpty(persons.value, personsError, "Error: Complete this field.");
        isValid &= validateNotEmpty(startDate.value, startDateError, "Error: Complete this field.");
        isValid &= validateNotEmpty(endDate.value, endDateError, "Error: Complete this field.");
        isValid &= validateNotEmpty(description.value, descriptionError, "Error: Complete this field.");
    } else {
        isValid &= validatePositiveInteger(persons.value, personsError, "Error: Please add at least one person.");
        isValid &= validateDateNotInPast(startDate.value, currentDate, startDateError, "Error: Start Date cannot be in the past.");
        isValid &= validateDateNotInPast(endDate.value, currentDate, endDateError, "Error: End Date cannot be in the past.");
        isValid &= validateEndDateAfterStartDate(endDate.value, startDate.value, endDateError, "Error: End Date cannot be prior to Start Date.");
        isValid &= validateDescriptionLength(description.value, descriptionError, "Error: Description must be at least 50 characters.", 50);
    }

    if (isValid) {
        alert(`Thank You!\nYour package has been booked successfully for ${whereTo.value}.`);
        bookingForm.reset();
    }
    e.preventDefault();
}

//function to handle login form
function handleFormSubmit(e) {

    var isValid = true;

    if (isValid) {
        loginForm.reset();
    }
    e.preventDefault();
}

//function to handle registration form
function handleFormSubmit(e) {

    var isValid = true;

    if (isValid) {
        // alert(`Thank You!\nYour package has been booked successfully for ${whereTo.value}.`);
        registrationForm.reset();
    }
    e.preventDefault();
}



// function to create HTML package card.
function createPackage() {
    packages.map((package) => {
        let packageCard = document.createElement('div');
        let packageCardContent = document.createElement('div');
        let image = document.createElement('img');
        let title = document.createElement('h3');
        let subTitle = document.createElement('p');
        let price = document.createElement('p');
        let rating = document.createElement('div');
        let button = document.createElement('button');

        image.src = package.image;
        image.alt = package.title;
        title.textContent = package.title;
        subTitle.textContent = package.subTitle;
        price.innerHTML = `$${package.price}`;
        button.textContent = 'Book';
        rating.style.marginBlock = '5px';
        price.classList.add('price');

        packageCard.classList.add('package-card');
        packageCardContent.classList.add('card-content');
        packageCardContent.appendChild(title);
        packageCardContent.appendChild(subTitle);
        packageCardContent.appendChild(price);
        packageCardContent.appendChild(rating);

        let stars = 5;
        for (let i = 1; i <= Math.round(package.rating); i++) {
            let starIcon = document.createElement('i');
            starIcon.style.color = '#E5BD46';
            starIcon.style.paddingInline = '1px';
            starIcon.classList.add('bi');
            starIcon.classList.add('bi-star-fill');
            rating.appendChild(starIcon);
            stars -= 1;
        }
        for (let i = 1; i <= stars; i++) {
            let starIcon = document.createElement('i');
            starIcon.style.color = '#BFBFBF'
            starIcon.style.paddingInline = '1px';
            starIcon.classList.add('bi');
            starIcon.classList.add('bi-star-fill');
            rating.appendChild(starIcon);
        }

        packageCardContent.appendChild(button);
        button.classList.add('btn');
        button.classList.add('btn-warning');
        packageCard.appendChild(image);
        packageCard.appendChild(packageCardContent);
        packageSection.appendChild(packageCard)
    })
};

// function to create HTML service card.
function createService() {
    services.map((service) => {
        let serviceCard = document.createElement('div');
        serviceCard.classList.add('service-item');

        let serviceName = document.createElement('h3');
        serviceName.textContent = service.name;
        let serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;
        serviceCard.appendChild(serviceName);
        serviceCard.appendChild(serviceDescription);
        serviceSection.appendChild(serviceCard);
    })
};

// function to create HTML gallery card.
function createGallery() {
    galleryImages.map((image) => {
        let galleryCard = document.createElement('div');
        galleryCard.classList.add('box');

        let galleryImage = document.createElement('img');
        galleryImage.src = image.imageUrl;
        galleryCard.appendChild(galleryImage);
        gallerySection.appendChild(galleryCard);
    })
};

createPackage();
createService();
createGallery();
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}
//registration modal function
function registerModal(modalId1, modalId2) {
    openModal(modalId1);
    closeModal(modalId2);
}
// event listener to submit the form on button click.
packageBookingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleFormSubmit();
});

// event listener to submit the form on form submit.
//to reset booking form
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit();
    bookingForm.reset();
});

// to reset the login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit();
    loginForm.reset();
});

// to reset the registration form
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit();
    registrationForm.reset();
});

// Event listeners to remove the error message from input fields when value is updated.
document.getElementById('whereTo').addEventListener('input', function () {
    whereToError.textContent = "";
});

document.getElementById('persons').addEventListener('input', function () {
    personsError.textContent = "";
});

document.getElementById('startDate').addEventListener('input', function () {
    startDateError.textContent = "";
});

document.getElementById('endDate').addEventListener('input', function () {
    endDateError.textContent = "";
});

document.getElementById('description').addEventListener('input', function () {
    descriptionError.textContent = "";
});


// Back to Top 
document.addEventListener("DOMContentLoaded", function () {
    var backToTopBtn = document.getElementById("back-to-top-btn");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});

// Function to open the Register Modal
function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
}

// Function to open the Login Modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Close modals when clicked outside the modal content
window.onclick = function (event) {
    if (event.target === document.getElementById('registerModal')) {
        document.getElementById('registerModal').style.display = 'none';
    }
    if (event.target === document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
}

// Form validation for registration
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const contact = document.getElementById('contact').value;
        // Add other field validations for registration form

        // Example validation (check if any field is empty)
        if (fullName === '' || contact === '') {
            alert('Please fill in all fields.');
            return;
        }
        // If all validations pass, perform further actions (e.g., submit the form or other functionalities)
        // This is a placeholder. You can perform other actions here.
        alert('Registration successful!');
    })
});

// Form validation for login
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        // Example validation (check if email and password are not empty)
        if (email === '' || password === '') {
            alert('Please enter email and password.');
            return;
        }
        if (email === "jayanth@gmail.com" && password === "12345"){
            alert('Login successful!');
            return
        }
        alert("wrong credentials")
        // If all validations pass, perform further actions (e.g., authenticate user or other functionalities)
        // This is a placeholder. You can perform other actions here.
        
        
    });
});

// Define functions to open and close modals

// Close modal function
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Form submission handling

// Registration form submission
document.addEventListener('DOMContentLoaded', function () {
    console.log(document.getElementById('fullName'))
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission action
        // Retrieve form data
        const fullName = document.getElementById('fullName').value;
        const contactNumber = document.getElementById('contactNumber').value;
        const dateOfBirth = document.getElementById('dateOfBirth').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('gender').value;

        // Perform necessary actions with form data (e.g., validation, sending to server)
        // For now, you can log the form data to the console
        console.log('Registration Form Data:');
        console.log('Full Name:', fullName);
        console.log('Contact Number:', contactNumber);
        console.log('Date of Birth:', dateOfBirth);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Gender:', gender);
        alert("registration successful");
        // Close the registration modal after form submission (optional)
        closeModal('registrationModal');

    })
});