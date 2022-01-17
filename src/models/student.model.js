const { model, Schema } = require('mongoose');
// student schema
const studentSchema = Schema(
    {
        student_code: { type: String, required: true },
        batch: { type: String, required: true },
        current_status: { type: String, required: true, default: "active" },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = model('student', studentSchema);