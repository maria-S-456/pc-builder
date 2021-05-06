import mongoose from 'mongoose';

const hddSchema = mongoose.Schema({
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

const Hdd = mongoose.model('Hdd', hddSchema)
export default Hdd