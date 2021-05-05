import mongoose from 'mongoose';

const storageSchema = mongoose.Schema({
	name: {type: String, required: true}
})

const mbSchema = mongoose.Schema({
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
	supportedChannel: {
		type: String,
		required: true
	},
	formFactor: {
		type: String,
		required: true
	},
	supportedStorage: [storageSchema]
}, {
	timestamps: true
})

const Mb = mongoose.model('Mb', mbSchema)
export default Mb