import mongoose from 'mongoose';

const storageSchema = mongoose.Schema({
	name: {type: Boolean, required: true}
})

const mbSchema = mongoose.Schema({
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
	numOfSlots: {
		type: Number,
		required: true,
		default: 0
	},
	memorySlotPins: {
		type: String,
		required: true
	},
	maxMemorySupported: {
		type: String,
		required: true
	},
	supportedChannel: {
		type: String,
		required: true
	},
	formFactor: {
		type: String,
		required: true
	},
	storageSsd: {
		type: Boolean
	},
	storageHhd: {
		type: Boolean
	},
	storagem2: {
		type: Boolean
	}
}, {
	timestamps: true
})

const Mb = mongoose.model('Mb', mbSchema)
export default Mb