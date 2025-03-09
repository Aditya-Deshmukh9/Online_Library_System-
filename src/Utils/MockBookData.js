const MockBookData = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "fiction",
    year: 1925,
    genre: "Classic",
    description:
      "A novel about the American dream and the excesses of the Jazz Age, centered around the enigmatic millionaire, Jay Gatsby.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1), // Random rating between 1 and 5
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    category: "fiction",
    year: 1949,
    genre: "Dystopian, Political Fiction",
    description:
      "A chilling portrayal of a totalitarian regime that controls every aspect of life, where the protagonist Winston Smith begins to rebel against the Party.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "fiction",
    year: 1960,
    genre: "Southern Gothic, Drama",
    description:
      "A young girl in the Depression-era South witnesses her father's fight for justice in a racially charged trial, learning about prejudice and empathy.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "fiction",
    year: 1951,
    genre: "Literary Fiction",
    description:
      "The story of Holden Caulfield, a disillusioned teenager who spends a few days in New York City, questioning the world and his place in it.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 5,
    title: "The Road",
    author: "Cormac McCarthy",
    category: "fiction",
    year: 2006,
    genre: "Post-Apocalyptic",
    description:
      "A haunting story of a father and son navigating a post-apocalyptic landscape, struggling to survive amidst the remnants of civilization.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1600241424i/6288.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "fiction",
    year: 1813,
    genre: "Romance, Social Commentary",
    description:
      "The story of Elizabeth Bennet and her complex relationship with the proud Mr. Darcy, set against the backdrop of early 19th-century British society.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 7,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    category: "fiction",
    year: 1890,
    genre: "Philosophical Fiction, Gothic",
    description:
      "A young man named Dorian Gray remains eternally youthful, while his portrait ages, revealing the consequences of a life lived without moral constraints.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1454087681i/489732.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 8,
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "fiction",
    year: 1932,
    genre: "Dystopian, Science Fiction",
    description:
      "A future society where people are conditioned to accept their roles and live in a state of artificial happiness, until one individual begins to question the status quo.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1575509280i/5129.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "nonfiction",
    year: 2011,
    genre: "History, Anthropology",
    description:
      "An exploration of the history of humanity from the Stone Age to the modern age, examining how Homo sapiens came to dominate the planet.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1703329310i/23692271.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 10,
    title: "Educated",
    author: "Tara Westover",
    category: "nonfiction",
    year: 2018,
    genre: "Memoir, Education",
    description:
      "A memoir about a woman raised in a strict and abusive family in rural Idaho, who escapes to learn about the world and pursue education.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 11,
    title: "Becoming",
    author: "Michelle Obama",
    category: "nonfiction",
    year: 2018,
    genre: "Biography, Memoir",
    description:
      "The deeply personal memoir of former First Lady Michelle Obama, chronicling her journey from Chicago to the White House and her experiences in public life.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 12,
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    category: "nonfiction",
    year: 2010,
    genre: "Biography, Science",
    description:
      "The story of Henrietta Lacks, whose cells were taken without her knowledge or consent in the 1950s and became one of the most important tools in medicine.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327878144i/6493208.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 13,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    category: "nonfiction",
    year: 2012,
    genre: "Psychology, Self-Help",
    description:
      "An exploration of the science behind habit formation and how individuals and organizations can change their habits for the better.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1545854312i/12609433.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 14,
    title: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
    author: "Susan Cain",
    category: "nonfiction",
    year: 2012,
    genre: "Psychology, Self-Help",
    description:
      "A compelling examination of the power of introverts in a society that values extroversion, exploring how introverts can thrive in the modern world.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328562861i/8520610.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 15,
    title: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    category: "nonfiction",
    year: 2008,
    genre: "Psychology, Sociology",
    description:
      "A look at the factors that contribute to high levels of success, arguing that success is not just about talent but also about timing, opportunities, and cultural background.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344266315i/3228917.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 16,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: "nonfiction",
    year: 2016,
    genre: "Self-Help",
    description:
      "A counterintuitive self-help guide that emphasizes the importance of caring less about things that don't matter and focusing on what truly brings fulfillment.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1465761302i/28257707.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 17,
    title: "Dune",
    author: "Frank Herbert",
    category: "scifiction",
    year: 1965,
    genre: "Science Fiction, Adventure",
    description:
      "A young nobleman becomes embroiled in a complex struggle for control of a desert planet's valuable resource, the spice melange, while uncovering his own destiny.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 18,
    title: "Neuromancer",
    author: "William Gibson",
    category: "scifiction",
    year: 1984,
    genre: "Cyberpunk, Science Fiction",
    description:
      "A washed-up computer hacker is hired for one last job: to break into a powerful AI system. The novel explores themes of virtual reality and artificial intelligence.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 19,
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    category: "scifiction",
    year: 1969,
    genre: "Science Fiction, Social Science Fiction",
    description:
      "On a planet where inhabitants can change sex, a human envoy must navigate complex political and social challenges, learning about gender, culture, and identity.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1488213612i/18423.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 20,
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    category: "scifiction",
    year: 2008,
    genre: "Hard Science Fiction",
    description:
      "Set during China's Cultural Revolution, this novel explores first contact with an alien civilization and the complex interplay of science, politics, and humanity's fate.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415428227i/20518872.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 21,
    title: "Snow Crash",
    author: "Neal Stephenson",
    category: "scifiction",
    year: 1992,
    genre: "Cyberpunk, Science Fiction",
    description:
      "In a futuristic world where the internet is a virtual reality space, a computer hacker and a sword-wielding courier battle against a new kind of virus that threatens to destroy society.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1656932283i/61240297.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 22,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "scifiction",
    year: 1951,
    genre: "Science Fiction, Space Opera",
    description:
      "A mathematician creates a science of psychohistory to predict the fall of the Galactic Empire, and a group of scientists establishes a foundation to preserve humanity's knowledge and future.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1417900846i/29579.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 23,
    title: "The Martian",
    author: "Andy Weir",
    category: "scifiction",
    year: 2011,
    genre: "Hard Science Fiction, Survival",
    description:
      "An astronaut is stranded on Mars after a botched mission, and must use his engineering and science knowledge to survive and communicate with Earth.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413706054i/18007564.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
  {
    id: 24,
    title: "Hyperion",
    author: "Dan Simmons",
    category: "scifiction",
    year: 1989,
    genre: "Science Fiction, Space Opera",
    description:
      "Seven pilgrims journey to a distant world, each telling their story of how they were affected by a mysterious, deadly force known as the Shrike.",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405546838i/77566.jpg",
    rating: (Math.random() * 4 + 1).toFixed(1),
  },
];
export default MockBookData;
