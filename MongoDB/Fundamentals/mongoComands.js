// Reading your documents
// find() -> return you an array
// db.orders.find();
// db.inventory.find();

// // findOne - > will return you a single object
// db.inventory.findOne();




db.orders.insertMany([
  {
      _id: 1,
      item: "almonds",
      price: 12,
      quantity: 2
    },
    {
      _id: 2,
      item: "pecans",
      price: 20,
      quantity: 1
    },
    {
      _id: 3
    }
]);


//  Output: { acknowledged: true, insertedIds: { '0': 1, '1': 2, '2': 3 } }

db.inventory.insertMany([
{
      _id: 1,
      sku: "almonds",
      description: "product 1",
      instock: 120
    },
    {
      _id: 2,
      sku: "bread",
      description: "product 2",
      instock: 80
    },
    {
      _id: 3,
      sku: "cashews",
      description: "product 3",
      instock: 60
    },
    {
      _id: 4,
      sku: "pecans",
      description: "product 4",
      instock: 70
    },
    {
      _id: 5,
      sku: null,
      description: "Incomplete"
    }
]);

// {  acknowledged: true, insertedIds: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }}

db.orders.find();
// [
//   { _id: 1, item: 'almonds', price: 12, quantity: 2 },
//   { _id: 2, item: 'pecans', price: 20, quantity: 1 },
//   { _id: 3 }
// ]

db.inventory.find();
// [
//   { _id: 1, sku: 'almonds', description: 'product 1', instock: 120 },
//   { _id: 2, sku: 'bread', description: 'product 2', instock: 80 },
//   { _id: 3, sku: 'cashews', description: 'product 3', instock: 60 },
//   { _id: 4, sku: 'pecans', description: 'product 4', instock: 70 },
//   { _id: 5, sku: null, description: 'Incomplete' }
// ]


db.inventory.findOne();
// { _id: 1, sku: 'almonds', description: 'product 1', instock: 120 }


db.orders.find({item: "almonds"})
// [ { _id: 1, item: 'almonds', price: 12, quantity: 2 } ]

db.orders.find({_id: 2});
// [ { _id: 2, item: 'pecans', price: 20, quantity: 1 } ]



// to apply conditions in searching documents in mongo you need to specify it inside the argument of the find function
db.orders.find({item: "almonds"});
db.orders.findOne({_id: 2});


// greater than -> $gt
// greate than on equal -> $gte
// less than -> $lt
// less than or equal ti -> $lte
// equal to -> $eq
// not equal to -> $ne
// matchches value in array -> $in
// does not match value in array -> $nin




// greater than -> $gt
db.orders.find({
    price: { $gt: 12 }
})

// [ { _id: 2, item: 'pecans', price: 20, quantity: 1 } ]




// greate than on equal -> $gte
db.orders.find({
    price: { $gte: 12 }
})
// // [
//   { _id: 1, item: 'almonds', price: 12, quantity: 2 },
//   { _id: 2, item: 'pecans', price: 20, quantity: 1 }
// ]

// less than -> $lt
db.orders.find({
    price: { $lt: 15 }
})
// [ { _id: 1, item: 'almonds', price: 12, quantity: 2 } ]




// less than or equal ti -> $lte
db.orders.find({
    price: { $lte: 12 }
})
// [ { _id: 1, item: 'almonds', price: 12, quantity: 2 } ]


// equal to -> $eq
db.inventory.find({
    instock: { $eq: 80 }
})
// [ { _id: 2, sku: 'bread', description: 'product 2', instock: 80 } ]


// not equal to -> $ne
db.orders.find({
    price: { $ne: 12 }
})
// [ { _id: 2, item: 'pecans', price: 20, quantity: 1 }, { _id: 3 } ]



// matchches value in array -> $in
db.inventory.find({
    sku: { $nin: ['almonds', 'bread'] }
})

// [
//   { _id: 1, sku: 'almonds', description: 'product 1', instock: 120 },
//   { _id: 2, sku: 'bread', description: 'product 2', instock: 80 }
// ]



// does not match value in array -> $nin
db.inventory.find({
    sku: { $nin: ['almonds', 'bread'] }
})

//[
//   { _id: 3, sku: 'cashews', description: 'product 3', instock: 60 },
//   { _id: 4, sku: 'pecans', description: 'product 4', instock: 70 },
//   { _id: 5, sku: null, description: 'Incomplete' }
// ]


// 1. find all records in orders whose price is greater than or equal to 12 (price >= 12) and less then adn equal to 30 (price <= 30)
db.orders.find({
    price: { $gte : 10, $lte: 30}
})

// [
//   { _id: 1, item: 'almonds', price: 12, quantity: 2 },
//   { _id: 2, item: 'pecans', price: 20, quantity: 1 }
// ]


// 2. Find all records in orders whose price is greater than 10 (price >= 10)and quantity is greater than or equal 1 (quantity >= 1)
db.orders.find({
    price: { $gte: 10},
    quantity: {$gte: 1}
});

// [
//   { _id: 1, item: 'almonds', price: 12, quantity: 2 },
//   { _id: 2, item: 'pecans', price: 20, quantity: 1 }
// ]


// 3. Find all records where item is "almonds" or "pecans"
db.orders.find({
    $or:[
        {item:"almonds"},
        {item: "pecans"}
    ]
});


// [
//   { _id: 1, item: 'almonds', price: 12, quantity: 2 },
//   { _id: 2, item: 'pecans', price: 20, quantity: 1 }
// ]


// 4. Fins all records where price > 10 and quantity is >= 1

db.orders.find({
    $and: [
        {price: {$gt: 10}},
        {quantity: {$gte: 1}}
    ]
})

// [
//   { _id: 1, item: 'almonds', price: 12, quantity: 2 },
//   { _id: 2, item: 'pecans', price: 20, quantity: 1 }
// ]



// Projection
// Controlling which feilds are to the returned
// 1-> includes fiels
// 0-> exludes filed
// _id -> it is returned by default unless its specified in the projection

db.inventory.find(
  {}, {
    _id: 0,
    description: 1,
    instock: 1
  }
)

// output:

// [
//   { description: 'product 1', instock: 120 },
//   { description: 'product 2', instock: 80 },
//   { description: 'product 3', instock: 60 },
//   { description: 'product 4', instock: 70 },
//   { description: 'Incomplete' }
// ]



// Sorting
// asc
db.orders.find({}).sort({
  price: 1
});

// op:

// [
//   { _id: 3 },
//   { _id: 1, item: 'almonds', price: 12, quantity: 2 },
//   { _id: 2, item: 'pecans', price: 20, quantity: 1 }
// ]


// desc
db.orders.find({}).sort({
  price: -1
})

// op:
// [
//   { _id: 2, item: 'pecans', price: 20, quantity: 1 },
//   { _id: 1, item: 'almonds', price: 12, quantity: 2 },
//   { _id: 3 }
// ]



// finding the most expensive product
db.orders.find({}).sort({
  price: -1
}).limit(1)

// op: 
// [ { _id: 2, item: 'pecans', price: 20, quantity: 1 } ]



// finding second most expensive product

db.orders.find({}).sort({
  price: -1
}).skip(1).limit(1)




// ot: [ { _id: 1, item: 'almonds', price: 12, quantity: 2 } ]


// Pagination

// if we have to show limited amout of items in a page we do not need fetch all the data we only need those data that need be shown

const page  =1;
const pagesize = 2;
db.orders.find({}).sort({_id: 1}).skip((page -1) * pagesize).limit(pagesize)


// ot: 
// [
//   { _id: 1, item: 'almonds', price: 12, quantity: 2 },
//   { _id: 2, item: 'pecans', price: 20, quantity: 1 }
// ]



// missing fields
// if you search for null vallue it will give the missing field also
db.inventory.find({
    sku : null
})

// current way to search for null values in mango here 10 is bson value for null
db.inventory.find({
    sku: {
        $type : 10
    }
})


// find all the records where sku exists
db.inventory.find({
    sku : {
        $exists : true
    }
})

// install mongodb compass
