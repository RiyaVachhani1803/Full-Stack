const mongoose = require('mongoose');

main()
  .then((res) => {
        console.log("Connection successfully!");
    })  
  .catch((err)  => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazone');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1
    },
    discount: {
        type: Number,
        default: 0,
    },
    categories: {
        type: [String],
        enum: ["Fiction", "History"]
    }
});

const Book = mongoose.model('Book', bookSchema);

let book1 = new Book({
    title: "Gone Girl", 
    author: "Gillian Flynn",
    price: 2000
});
book1
    .save()
    .then((res) => {
        console.log(res); 
    })  
    .catch((err) => {
        console.log(err);
    });