import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://jiraya00:n2s2hwyn@products.iejyytf.mongodb.net/e-commerce?retryWrites=true&w=majority`)

const db=mongoose.connection;

export default db