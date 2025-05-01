import mongoose from 'mongoose';

const dbConnect = () => {

    mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(5000, () => {
        console.log('Connected to DB')
        console.log("Server started on port 5000")
    }))
    .catch((err) => console.log(err));

}

export default dbConnect()

