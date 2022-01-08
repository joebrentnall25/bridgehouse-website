const data = {
    areasData: {
        Restaurant: {
            link: "https://www.bbc.co.uk",
            description: "This is a description about the restaurant",
            imgLink: "./assets/images/hero.jpg"
        },
        Bar: {
            link: "#",
            description: "This is a description about the bar",
            imgLink: "./assets/images/hero.jpg"
        },
        Garden: {
            link: "#",
            description: "This is a description about the garden",
            imgLink: "./assets/images/hero.jpg"
        },
        Takeaway: {
            link: "#",
            description: "This is a description about the takeaway",
            imgLink: "./assets/images/hero.jpg"
        }
    },
    reviews: [
        {
            name: "John Doe",
            year: "2021",
            review: "This is a test review to show what the review box would show"
        },
        {
            name: "Fred Smith",
            year: "2021",
            review: "This is a test review to show what the review box would show. This review is slightly different."
        }
    ],
    menu: {
        drinks: [
            {
                item: "Latte",
                description: "",
                category: "Coffee"
            },
            {
                item: "Cappuccino",
                description: "",
                category: "Coffee"
            },
            {
                item: "Espresso",
                description: "",
                category: "Coffee"
            },
            {
                item: "Black Coffee",
                description: "Americano",
                category: "Coffee"
            },
            {
                item: "Flat White",
                description: "",
                category: "Coffee"
            },
            {
                item: "Macchiato",
                description: "",
                category: "Coffee"
            },
            {
                item: "Coffee & Cream",
                description: "",
                category: "Coffee"
            },
            {
                item: "Mocha",
                description: "",
                category: "Coffee"
            },
            {
                item: "Plain Hot Chocolate",
                description: "",
                category: "Hot Chocolate"
            },
            {
                item: "Loaded Hot Chocolate",
                description: "",
                category: "Hot Chocolate"
            },
            {
                item: "English Breakfast",
                description: "",
                category: "Tea"
            },
            {
                item: "Earl Grey",
                description: "",
                category: "Tea"
            },
            {
                item: "Lady Grey",
                description: "",
                category: "Tea"
            },
            {
                item: "Red Bush",
                description: "",
                category: "Tea"
            },
            {
                item: "Green Tea",
                description: "",
                category: "Tea"
            },
            {
                item: "Berry",
                description: "",
                category: "Tea"
            },
            {
                item: "Chamomile",
                description: "",
                category: "Tea"
            },
            {
                item: "Orange Juice",
                description: "",
                category: "Cold"
            },
            {
                item: "Apple Juice",
                description: "",
                category: "Cold"
            },
            {
                item: "Cranberry Juice",
                description: "",
                category: "Cold"
            },
            {
                item: "Bottled Still Water",
                description: "",
                category: "Cold"
            },
            {
                item: "Bottled Carbonated Water",
                description: "",
                category: "Cold"
            }
        ],
        main: [
            {
                item: "Full English",
                description: "Sausage, bacon, black pudding, hash browns, fresh tomato, mushrooms, egg, beans, tinned tomatoes, toast, fried bread",
                symbols: ["vAvailable"],
                category: "breakfast"
            },
            {
                item: "Lighter Breakfast",
                description: "Choose 6 items from Full Breakfast",
                symbols: ["vAvailable"],
                category: "breakfast"
            },
            {
                item: "Cobs & Sandwiches",
                description: "Bacon / Sausage|Add 70p for extra item|Egg, tomatoes, cheese, black pudding, hash brown, mushrooms",
                symbols: ["vAvailable"],
                category: "breakfast"
            },
            {
                item: "Eggs Benedict",
                description: "Poached eggs, crispy bacon and hollandaise sauce served on malted toast",
                symbols: [],
                category: "breakfast"
            },
            {
                item: "Eggs Royale",
                description: "Poached eggs, smoked salmon and hollandaise sauce served on malted toast",
                symbols: [],
                category: "breakfast"
            },
            {
                item: "Eggs Florentine",
                description: "Poached eggs, spinach and hollandaise sauce serverd on malted toast",
                symbols: [],
                category: "breakfast"
            },
            {
                item: "Avocado on Toast with chilli flakes",
                description: "",
                symbols: ["hot"],
                category: "brunch"
            },
            {
                item: "Smoked Salmon, Avocado or Scrambled Eggs on Focaccia Bread",
                description: "",
                symbols: [],
                category: "brunch"
            }, 
            {
                item: "Smoked Haddock with Poached Eggs & Hollandaise",
                description: "",
                symbols: [],
                category: "brunch"
            }, 
            {
                item: "Welsh Rarebit",
                description: "Add bacon",
                symbols: ["vAvailable"],
                category: "brunch"
            },
            {
                item: "Sardines on Toast",
                description: "",
                symbols: [],
                category: "brunch"
            }, 
            {
                item: "Name an Omelette",
                description: "Choose what you want in your omelette",
                symbols: [],
                category: "brunch"
            }, 
            {
                item: "Halloumi, Avocado & Crispy Bacon",
                description: "",
                symbols: ["vAvailable"],
                category: "brunch"
            }, 
            {
                item: "Mushrooms on Toasted Focaccia with Cherry Tomatoes",
                description: "",
                symbols: [],
                category: "brunch"
            },
            {
                item: "Potato & Leek Fritters with Asparagus & Chilli",
                description: "",
                symbols: [],
                category: "brunch"
            },
            {
                item: "Pancakes with Crispy Bacon & Syrup",
                description: "",
                symbols: ["vAvailable"],
                category: "breakfast"
            },
            {
                item: "Waffles & Ice Cream with Berries",
                description: "",
                symbols: [],
                category: "breakfast"
            },
            {
                item: "Berry & Yogurt Granola",
                description: "",
                symbols: [],
                category: "breakfast"
            },
            {
                item: "Toasted Tea Cake",
                description: "",
                symbols: [],
                category: "breakfast"
            },
            {
                item: "Toast & Jam",
                description: "",
                symbols: [],
                category: "breakfast"
            },
            {
                item: "The Best Porridge",
                description: "",
                symbols: [],
                category: "breakfast"
            }, 
            {
                item: "Bridge House Sausage & Egg Muffin with Cheese",
                description: "",
                symbols: [],
                category: "children"
            },  
            {
                item: "Beans on Toastie",
                description: "",
                symbols: [],
                category: "children"
            },  
            {
                item: "Bacon Sandwich",
                description: "",
                symbols: ["vAvailable"],
                category: "children"
            },  
            {
                item: "Sausage Sandwich",
                description: "",
                symbols: ["vAvailable"],
                category: "children"
            },  
            {
                item: "Cheese On Toast",
                description: "",
                symbols: [],
                category: "children"
            },  
            {
                item: "Pancakes with Maple Syrup & Bacon",
                description: "",
                symbols: [],
                category: "children"
            },  
            {
                item: "Pancakes with Ice Cream & Berries",
                description: "",
                symbols: [],
                category: "children"
            },  
            {
                item: "Waffles with Ice Cream & Berries",
                description: "",
                symbols: [],
                category: "children"
            },  
            {
                item: "Mini Breakfast",
                description: "Sausage, egg, beans, hash brown, toast",
                symbols: ["vAvailable"],
                category: "children"
            },  
            {
                item: "Toast & Jam",
                description: "",
                symbols: [],
                category: "children"
            },  
            {
                item: "The Best Porridge",
                description: "",
                symbols: [],
                category: "children"
            },  
        ],
        barGarden: [
            {
                item: "Prosecco",
                description: "",
                category: "Drinks"
            },
            {
                item: "Orange Juice",
                description: "",
                category: "Drinks"
            },
            {
                item: "Coffee",
                description: "",
                category: "Drinks"
            },
            {
                item: "Tea",
                description: "",
                category: "Drinks"
            },
            {
                item: "Berries, Granola & Yogurt",
                description: "",
                category: "Start with"
            },
            {
                item: "Croissants & Rolls",
                description: "",
                category: "Start with"
            },
            {
                item: "Eggs Benedict",
                description: "",
                category: "Option 1"
            },
            {
                item: "Eggs Royale",
                description: "",
                category: "Option 1"
            },
            {
                item: "Eggs Florentine",
                description: "",
                category: "Option 1"
            },
            {
                item: "",
                description: "All served buffet style on sharing platters.",
                category: "Option 2"
            },
            {
                item: "Scrambled Eggs",
                description: "",
                category: "Option 2"
            },
            {
                item: "Bacon & Sausage",
                description: "",
                category: "Option 2"
            },
            {
                item: "Vine Tomatoes",
                description: "",
                category: "Option 2"
            },
            {
                item: "Mushrooms",
                description: "",
                category: "Option 2"
            },
            {
                item: "Smoked Salmon",
                description: "",
                category: "Option 2"
            },
            {
                item: "Avocado",
                description: "",
                category: "Option 2"
            },
            {
                item: "Creme Fraiche",
                description: "",
                category: "Option 2"
            },
        ]
    }
}

export default data;