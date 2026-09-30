import mongoose from "mongoose";
const testSchema =  new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    age: {
        type: Number,
        required : true,
    },
    course: {
        type: String,
        required : true,
    },
})

const Test = mongoose.model("Test", testSchema);
const connectDB = async() => {
    try{
        mongoose.connection.on('connected', () => {
            console.log("Db is connected")
        })
        await mongoose.connect(`${process.env.MONGO_URL}/test`)

        // const result = await Test.create({
        //     name: "test name",
        //     age: "5",
        //     course: "test Course"
        // })

        // const result = await Test.insertMany([
        //     {name: "Ashish", age : 23, course: "BTech"},
        //     {name: "Sourav", age : 24, course: "BCom"},
        //     {name: "Meghna", age : 25, course: "Bsc"},
        //     {name: "Pranav", age : 23, course: "MTech"},
        //     {name: "Manu", age : 22, course: "BTech"},
        // ])

        // console.log( await Test.find({}));
        // console.log(await Test.find({course: "Bsc"}));

        // console.log(result);


        // Update 
        // const result = await Test.updateOne({name: "Pranav"},
        //     {
        //         $set: {
        //             age: 25,
        //             course: "Ttech"
        //         }
        //     }
        // )



        const result = await Test.deleteOne({_id: "6abcdf291fb70b3b4c98c961"})
        console.log(result);
        // console.log(await Test.find({_id: "6abcdf291fb70b3b4c98c961"}));
        

    }
    catch(error){
        console.log(error.message);
    }
}

export default connectDB;
