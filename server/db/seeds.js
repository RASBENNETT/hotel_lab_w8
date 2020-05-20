use hotel;
db.dropDatabase();

db.bookings.insertMany([

    {
        name: "Dennis",
        email: "DennistheMenace@trouble.com",
        checkedIn: true
    },

    {
        name: "Rasher",
        email: "pigs@nobacon.com",
        checkedIn: false
    },

    {
        name: "Walter",
        email: "walter_the_softy@hotamil.com",
        checkedIn: true
    }

])
