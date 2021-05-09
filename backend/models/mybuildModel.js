const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
	mb: { type: String},
	casefan: { type: String},
	case: { type: String},
	cpufan: { type: String},
	gpu: { type: String},
	hdd: { type: String},
	memory: { type: String},
	psu: { type: String},
	ssd: { type: String},
	cpu: { type: String}
})

const mybuildSchema = mongoose.Schema({
	owner: {
		type: String,
		required: true
	},
	mypcbuild: [listSchema]
}, {
	timestamps: true
})
const Mybuild = mongoose.model('Mybuild', mybuildSchema)
module.exports = Mybuild