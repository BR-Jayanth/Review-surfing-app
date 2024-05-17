//literal types 
// Enumerations
var customPermissions;
(function (customPermissions) {
    customPermissions["ADMIN"] = "ADMIN";
    customPermissions["READ_ONLY"] = "READ_ONLY";
})(customPermissions || (customPermissions = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));
// Classes
var MainProperty = /** @class */ (function () {
    function MainProperty(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
    return MainProperty;
}());
var reviewTotalDisplay = document.querySelector('#reviews');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var propertyContainer = document.querySelector('.properties');
var reviewContainer = document.querySelector('.reviews');
var container = document.querySelector('.container');
var button = document.querySelector('button');
var footer = document.querySelector('.footer');
var isLoggedIn;
// data
// Reviews
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
];
var you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: customPermissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
// Array of Properties
var properties = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 'SW4 5XW',
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/OIP.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia',
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
];
function showReviewTotal(value, reviewer, isLoyalty) {
    // display recent review on hero section
    var iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    // display user on header - left
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
function showDetails(value, element, price) {
    // render price for card component
    if (value) {
        var priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
function makeMultiple(value) {
    // render recent review count
    if (value > 1) {
        return 's';
    }
    else
        return '';
}
function getTopTwoReviews(reviews) {
    // returns recent highest-rated 2 review
    var sortedReviews = reviews.sort(function (a, b) { return b.stars - a.stars; });
    return sortedReviews.slice(0, 2);
}
// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
// Add the properties
for (var i = 0; i < properties.length; i++) {
    //render card component
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    var image_1 = document.createElement('img');
    image_1.setAttribute('src', properties[i].image);
    card.appendChild(image_1);
    showDetails(you.permissions, card, properties[i].price);
    propertyContainer.appendChild(card);
}
var count = 0;
function addReviews(array) {
    // generate review for button click
    if (!count) {
        count++;
        var topTwo = getTopTwoReviews(array);
        for (var i = 0; i < topTwo.length; i++) {
            var card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener('click', function () { return addReviews(reviews); });
var currentLocation = ['Banglore, ', new Date(), 18];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ',  ' + currentLocation[2] + '°';
// hero image properties
var yourMainProperty = new MainProperty("./images/italian-property.jpg", "Italian House", [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "17-05-2024"
    }]);
var mainImageContainer = document.querySelector('.main-image');
var image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer.appendChild(image);
