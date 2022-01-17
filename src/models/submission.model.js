const { model, Schema } = require('mongoose');
// user schema
const submissionSchema = Schema(
    {
        evalutaion_id: { type: Schema.Types.ObjectId, ref: 'evaluation', required: true },
        answer_by: { type: Schema.Types.ObjectId, ref: 'student', required: true },
        status: { type: String, required: true, default: 'pending' },
        submission_time: { type: Date, required: true },
        score: { type: Number, required: false },
        assessed_by: { type: Schema.Types.ObjectId, ref: 'user', required: false },
        submission_link: { type: String, required: false }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = model('submission', submissionSchema);