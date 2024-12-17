const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Package = require('./models/Package');

dotenv.config();

const demoPackages = [
  {
    title: "Himalayan Adventure",
    description: "Experience the thrill of trekking in the Himalayas.",
    price: 1200,
    availableDates: ["2024-01-15", "2024-02-10", "2024-03-05"],
    image: "https://example.com/himalayan-adventure.jpg"
  },
  {
    title: "Beach Getaway",
    description: "Relax on the pristine beaches of the Maldives.",
    price: 1500,
    availableDates: ["2024-02-01", "2024-03-15", "2024-04-10"],
    image: "https://example.com/beach-getaway.jpg"
  },
  {
    title: "European Tour",
    description: "Explore the historic cities and countryside of Europe.",
    price: 2500,
    availableDates: ["2024-04-01", "2024-05-15", "2024-06-10"],
    image: "https://example.com/european-tour.jpg"
  },
  {
    title: "Safari Adventure",
    description: "Witness the wildlife in Africa's most famous safaris.",
    price: 1800,
    availableDates: ["2024-05-20", "2024-06-25", "2024-07-10"],
    image: "https://example.com/safari-adventure.jpg"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected");

    await Package.deleteMany(); // Clear existing data
    console.log("Existing data cleared");

    await Package.insertMany(demoPackages);
    console.log("Demo data inserted");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
