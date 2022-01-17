const { model, Schema } = require('mongoose');
// user schema
const userSchema = Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        profile_photo_url: { type: String, required: false },
        roles: [{ type: String, required: true }]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = model('user', userSchema);