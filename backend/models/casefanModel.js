import mongoose from 'mongoose';

const casefanSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	brand: {
		type: String,
		required: true
	},
	series: {
		type: String,
		required: true
	},
	size: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
})

const Casefan = mongoose.model('Casefan', casefanSchema)
export default Casefan