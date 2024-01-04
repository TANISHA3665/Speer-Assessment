const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: true,
        },
        shareWith: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: User
            }
        ]
    },
    {timestamps: true}
);

const Note = mongoose.model('Note', noteSchema);

module.exports = {
    Note
}