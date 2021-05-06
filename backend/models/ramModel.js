import mongoose from 'mongoose';

const ramSchema = mongoose.Schema({
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
	capacity: {
		type: Number,
		required: true
	},
	unit: {
		type: String,
		required: true
	},
	memoryType: {
		type: String,
		required: true
	},
	memoryPins: {
		type: String,
		required: true
	}
}, {
	timestamps: true
})

const Ram = mongoose.model('Ram', ramSchema)
export default Ram