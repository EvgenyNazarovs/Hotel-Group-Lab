use hotel_hub;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "John",
    email: "john@codeclan.co.uk",
    checkInStatus: "Checked In"
  },
  {
    name: "Alex",
    email: "Alex@codeclan.co.uk",
    checkInStatus: "Cancelled"
  }
]);
