
//literal types 

type Price = 25 | 30 | 35 | 45;
type Country = 'Colombia' | 'Poland' | 'United Kingdom' | 'Malaysia';

// Enumerations

enum customPermissions {
    ADMIN = 'ADMIN',
    READ_ONLY = 'READ_ONLY'
}

enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}

// interface

interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: (number | string);
        country: Country;
    };
    contact: [number, string];
    isAvailable: boolean;
}

// Classes
class MainProperty {
    src: string
    title: string
    reviews: Review[]
    constructor(src: string, title: string, reviews: Review[]) {
        this.src = src
        this.title = title
        this.reviews = reviews
    }
}


const reviewTotalDisplay = document.querySelector('#reviews') as HTMLHeadingElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLSpanElement
const userNameDisplay = document.querySelector('#user') as HTMLSpanElement
const propertyContainer = document.querySelector('.properties') as HTMLDivElement
const reviewContainer = document.querySelector('.reviews') as HTMLDivElement
const container = document.querySelector('.container') as HTMLDivElement
const button = document.querySelector('button') as HTMLButtonElement
const footer = document.querySelector('.footer') as HTMLDivElement

let isLoggedIn: boolean

// data


// Reviews
const reviews: Review[] = [
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
]

const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: customPermissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}


// Array of Properties
const properties: Property[] = [
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
]





function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    // display recent review on hero section
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay
}

function populateUser(isReturning: boolean, userName: string) {
    // display user on header - left
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

function showDetails(value: boolean | customPermissions, element: HTMLDivElement, price: number) {
    // render price for card component
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

function makeMultiple(value: number): string {
    // render recent review count
    if (value > 1) {
        return 's'
    } else return ''
}

function getTopTwoReviews(reviews: Review[]): Review[] {
    // returns recent highest-rated 2 review
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0, 2)
}





// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

// Add the properties
for (let i = 0; i < properties.length; i++) {
    //render card component
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    showDetails(you.permissions, card, properties[i].price)
    propertyContainer.appendChild(card)
}



let count = 0
function addReviews(array: Review[]): void {
    // generate review for button click
    if (!count) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button)
    }
}

button.addEventListener('click', () => addReviews(reviews))

let currentLocation: [string, Date, number] = ['Banglore, ', new Date(), 18]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ',  ' + currentLocation[2] + '°'



// hero image properties
let yourMainProperty = new MainProperty(
    "./images/italian-property.jpg",
    "Italian House",
    [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "17-05-2024"
    }]
)

const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)