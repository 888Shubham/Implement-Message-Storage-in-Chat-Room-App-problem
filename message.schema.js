
// Make the necessary imports here
import mongoose from "mongoose";

// Implement the message schema
const messageSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Create a model from the schema
const Message = mongoose.model('Message', messageSchema);

// Export the model
export default Message;
