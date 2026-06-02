// getting-started.js
const mongoose = require('mongoose');

main()
  .then((res) => {
        console.log("Connection successfully!");
    })  
  .catch((err)  => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const User = mongoose.model('User', userSchema);
// const Employee = mongoose.model('Employee', userSchema);

// // Create a new user
// const user1 = new User({
//     name: 'John Doe',
//     age: 30,
//     email: "john.doe@example.com"
// });

// user1.save();

// user2 = new User({
//     name: "Eve",
//     age: 25,
//     email: "eve.doe@example.com"
// });
// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


user.insertMany([
    { name: "Alice", age: 28, email: "alice.doe@example.com" },
    { name: "Bob", age: 35, email: "bob.doe@example.com" },
    { name: "Charlie", age: 40, email: "charlie.doe@example.com" }
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
