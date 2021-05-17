const mongoose = require('mongoose');

const MybuildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  partType: {
    type: String,
    required: true
  },
  brand:{
    type: String
  },
  capacity:{
    type: String
  },
  unit:{
    type: String
  },
  memory_type:{
    type: String
  },
  img:{
    type: String
  },
  socketType:{
    type: String
  },
  numOfSlots:{
    type: Number
  },
  memorySlotPins:{
    type: Number
  },
  maxMemorySupported:{
    type: Number
  },
  // standardize memory name later
  memoryStandard:{
    type: String
  },
  memory_type:{
    type: String
  },
  cpubrand:{
    type: String
  },
  supportedChannel:{
    type: String
  },
  formFactor:{
    type: String
  },
  storageSsd:{
    type: Boolean
  },
  storageHhd:{
    type: Boolean
  },
  storagem2:{
    type: Boolean
  },
  pin_type:{
    type: Number
  },
  series:{
    type: String
  },
  input_volt_min:{
    type: Number
  },
  input_volt_max:{
    type: Number
  },
  psutype:{
    type: String
  },
  max_power:{
    type: String
  },
  max_psu_length:{
    type: String
  },
  cpuSocketType:{
    type: String
  },
  numCores:{
    type: String
  },
  max_height:{
    type: String
  },
  compatibility:{
    type: String
  }

}, {timestamps: true},
{collection: 'mybuilds'});

const Mybuild = mongoose.model("mybuilds", MybuildSchema)
module.exports = Mybuild