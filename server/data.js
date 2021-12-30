const _ = require("lodash");

const data = {
    "chineseGreenTea": {
        "name": "Chinese Grean Tea",
        "items": [
            {
                "name": "Long Jing",
                "id": 1,
                "description": "Hand rolled using traditional tea processing techniques. Made in Huiming.",
                "price": 32,
                "imageUrl": "https://live.staticflickr.com/65535/51160674192_26de942c61_b.jpg"
            },
            {
                "name": "Dragon Jasmine Pearls",
                "id": 2,
                "description": "Fragranced with fresh jasmine flowers.",
                "price": 14,
                "imageUrl": "https://live.staticflickr.com/3840/14573300652_4de0af9f45_o.jpg"
            },
            {
                "name": "De Jian Bamboo Dragon",
                "id": 3,
                "description": "Originated from Guizhou China, 1200 meters above sea level.",
                "price": 25,
                "imageUrl": "https://live.staticflickr.com/65535/51254939227_799d311e8e_b.jpg"
            }
        ]
    },
    "japaneseGreenTea": { 
        "name": "Japanese Green Tea",
        "items": [
            {
                "name": "Bancha",
                "id": 4,
                "description": "Originates from Kagoshima region in southern Japan.",
                "price": 10,
                "imageUrl": "https://live.staticflickr.com/65535/50346368626_65b14300d8_b.jpg"
            },
            {
                "name": "Genmaicha",
                "id": 5,
                "description": "Blend of green tea leaves and grilled rice.",
                "price": 9,
                "imageUrl": "https://live.staticflickr.com/8102/29361561745_c95795aed2_o.jpg"
            }
        ]
    },
    "indianTea": {
        "name": "Indian Tea",
        "items": [
            {
                "name": "Assam Banaspaty",
                "id": 6,
                "description": "From the vast plains of Assam in India, the Banaspaty garden offers us this black tea with uniform and slightly broken leaves.",
                "price": 8,
                "imageUrl": "https://live.staticflickr.com/65535/51420419975_8d593fb4ed.jpg"
            },
            {
                "name": "Celebration Tea Organic",
                "id": 7,
                "description": "In the tradition of spicy chai, this tea asserts subtle citrus aromatics with the warm woody notes of an Indian black tea.",
                "price": 14,
                  "imageUrl": "https://live.staticflickr.com/4472/38058493492_059c8646d9.jpg"
            },
            {
                "name": "Assam Doomni",
                "id": 8,
                "description": "This orthodox black tea from the plains of Assam in India is composed of fine whole leaf and a generous amount of golden tips.",
                "price": 18,
                "imageUrl": "https://live.staticflickr.com/65535/51338050502_9911db313d.jpg"
            },
            {
                "name": "Chai Camellia",
                "id": 9,
                "description": "Directly inspired by our numerous tea trips to India, our house-blend chai tea is a true classic in style.",
                "price": 9,
                "imageUrl": "https://live.staticflickr.com/65535/51418749927_f9cf1f3b47.jpg"
            },
            {
                "name": "Ceylan Uva Adawatte",
                "id": 10,
                "description": "A classic Ceylan for all black tea lovers!",
                "price": 8,
                "imageUrl": "https://live.staticflickr.com/1564/25559418410_d174c45379.jpg"
            }
        ]
    }
}

const categories = Object.keys(data);

const getData = (category) => {
    if (data[category] === undefined) {
        return null
    }
    return _.cloneDeep(data[category])
};

const getCategories = () => ({ categories: _.cloneDeep(categories) });

module.exports = {getData, getCategories};