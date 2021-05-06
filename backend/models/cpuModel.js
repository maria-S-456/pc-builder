import mongoose from 'mongoose';

const cpuSchema = mongoose.Schema({
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
	socketType: {
		type: String,
		required: true
	},
	numOfCores: {
		type: Number,
		required: true,
		default: 0
	},
	memoryType: {
		type: String,
		required: true
	}
}, {
	timestamps: true
})

const Cpu = mongoose.model('Cpu', cpuSchema)
export default Cpu