import mongoose from 'mongoose';

const cpufanSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	partType: {
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
	},
	socketCompatibility: [
		name: {type: String},
		value: {type: Boolean, default: false}
	]
}, {
	timestamps: true
})

const Cpufan = mongoose.model('Cpufan', cpufanSchema)
export default Cpufan