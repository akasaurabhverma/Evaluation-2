const { model, Schema } = require('mongoose');
// student schema
const evaluationSchema = Schema(
    {
        title: { type: String, required: true },
        created_by: { type: Schema.Types.ObjectId, ref: 'user', required: true },
        start_date: { type: Date, required: true },
        end_date: { type: Date, required: true },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = model('evalutaion', evaluationSchema);