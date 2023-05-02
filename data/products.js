const foodCategory = [
  {
    name: "Fruits",
    image: require("../assets/images/fruits.png"),
    amountAvailable: 335,
  },
  {
    name: "Vegetables",
    image: require("../assets/images/vegetables.png"),
    amountAvailable: 1243,
  },
  {
    name: "Poultry",
    image: require("../assets/images/poultry.png"),
    amountAvailable: 300,
  },
];

// foood schemer
const FOODS = [
  {
    id: 1,
    name: "Carrots",
    image: require("../assets/images/carrots.png"),
    pricePerKg: 150,
    unitPrice: "N/A",
    category: "vegetable",
    popular: true,
    inStock: true,
    inCart: false,
    reviews: [
      {
        reviewer_id: 101,
        reviewer_name: "",
        reviewer_email: "",
        reviewer_rating: "",
        reviewer_avatar: "",
      },
    ],
    average_rating: 4.0,
  },
  {
    id: 2,
    name: "Tomatoes",
    image: require("../assets/images/tomatoes.png"),
    pricePerKg: 250,
    unitPrice: "N/A",
    category: "vegetable",
    popular: true,
    inStock: true,
    inCart: false,
    reviews: [
      {
        reviewer_id: 160,
        reviewer_name: "",
        reviewer_email: "",
        reviewer_rating: "",
        reviewer_avatar: "",
      },
    ],
    average_rating: 4.0,
  },
  {
    id: 3,
    name: "Green Pepper",
    image: require("../assets/images/greenpeppers.png"),
    pricePerKg: 89.99,
    unitPrice: "N/A",
    category: "vegetable",
    popular: false,
    inStock: true,
    inCart: false,
    reviews: [
      {
        reviewer_id: 211,
        reviewer_name: "",
        reviewer_email: "",
        reviewer_rating: "",
        reviewer_avatar: "",
      },
    ],
    average_rating: 4.0,
  },
  // {
  //   id: 4,
  //   name: "Chicken Eggs",
  //   image: require("../assets/images/eggs.png"),
  //   pricePerKg: 299.99,
  //   unitPrice: 8,
  //   category: "poultry",
  //   popular: true,
  //   inStock: true,
  //   reviews: [
  //     {
  //       reviewer_id: 233,
  //       reviewer_name: "",
  //       reviewer_email: "",
  //       reviewer_rating: "",
  //       reviewer_avatar: "",
  //     },
  //   ],
  //   average_rating: 4.0,
  // },
  // {
  //   id: 5,
  //   name: "Full Chicken",
  //   image: require("../assets/images/fullrawchicken.png"),
  //   pricePerKg: 175,
  //   unitPrice: 175,
  //   category: "poultry",
  //   popular: true,
  //   inStock: true,
  //   reviews: [
  //     {
  //       reviewer_id: 98,
  //       reviewer_name: "",
  //       reviewer_email: "",
  //       reviewer_rating: "",
  //       reviewer_avatar: "",
  //     },
  //   ],
  //   average_rating: 4.0,
  // },
  // {
  //   id: 6,
  //   name: "Chicken Legs",
  //   image: require("../assets/images/chickenlegs.png"),
  //   pricePerKg: 85,
  //   unitPrice: 85,
  //   category: "poultry",
  //   popular: false,
  //   inStock: true,
  //   reviews: [
  //     {
  //       reviewer_id: 567,
  //       reviewer_name: "",
  //       reviewer_email: "",
  //       reviewer_rating: "",
  //       reviewer_avatar: "",
  //     },
  //   ],
  //   average_rating: 4.0,
  // },
  {
    id: 7,
    name: "Oranges",
    image: require("../assets/images/oranges.png"),
    pricePerKg: 40,
    unitPrice: "N/A",
    category: "fruit",
    popular: true,
    inStock: true,
    inCart: false,
    reviews: [
      {
        reviewer_id: 543,
        reviewer_name: "",
        reviewer_email: "",
        reviewer_rating: "",
        reviewer_avatar: "",
      },
    ],
    average_rating: 4.0,
  },
  {
    id: 8,
    name: "Mangoes",
    image: require("../assets/images/mangoes.png"),
    pricePerKg: 95,
    unitPrice: "N/A",
    category: "fruit",
    popular: true,
    inStock: true,
    inCart: false,
    reviews: [
      {
        reviewer_id: 32,
        reviewer_name: "",
        reviewer_email: "",
        reviewer_rating: "",
        reviewer_avatar: "",
      },
    ],
    average_rating: 4.0,
  },
  {
    id: 9,
    name: "Strawberries",
    image: require("../assets/images/strawberries.png"),
    pricePerKg: 400,
    unitPrice: "N/A",
    category: "fruit",
    popular: false,
    inStock: true,
    inCart: false,
    reviews: [
      {
        reviewer_id: 21,
        reviewer_name: "",
        reviewer_email: "",
        reviewer_rating: "",
        reviewer_avatar: "",
      },
    ],
    average_rating: 4.0,
  },
];
export { foodCategory, FOODS };
