import mongoose from 'mongoose';

const formFactorSchema = mongoose.Schema({
	name: {type: String, required: true}
})

const fanSchema = mongoose.Schema({
	onetwenty: {type: Boolean},
	oneforty: {type: Boolean},
	numOf: {type: Number, default: 0}
	position: {type: String}
})

const caseSchema = mongoose.Schema({
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
	type: {
		type: String,
		required: true
	},
	formFactor: [formFactorSchema],
	gpuLength: {
		type: Number,
		required: true,
		default: 0
	},
	psuLength: {
		type: String,
		required: true,
		default: 0
	},
	topFanPosition: [fanSchema],
	bottomFanPosition: [fanSchema]
	rearFanPosition: [fanSchema]
	frontFanPosition: [fanSchema]
}, {
	timestamps: true
})

const Case = mongoose.model('Case', caseSchema)
export default Case