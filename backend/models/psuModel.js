import mongoose from 'mongoose';

const psuSchema = mongoose.Schema({
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
	minInputVolt: {
		type: Number,
		required: true
	},
	maxInputVolt: {
		type: Number,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	maxPower: {
		type: Number,
		required: true
	},
	maxLength: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
})

const Psu = mongoose.model('Psu', psuSchema)
export default Psu