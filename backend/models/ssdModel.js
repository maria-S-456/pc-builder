import mongoose from 'mongoose';

const ssdSchema = mongoose.Schema({
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
	formFactor: {
		type: String,
		required: true
	},
	capacity: {
		type: Number,
		required: true
	},
	unit: {
		type: String,
		required: true,
		default: 0
	}
}, {
	timestamps: true
})

const Ssd = mongoose.model('Ssd', ssdSchema)
export default Ssd