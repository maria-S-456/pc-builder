const mongoose = require('mongoose');

const MybuildSchema = new mongoose.Schema({
  selectedCasefan: {
    type: String
  },
  selectedCase:{
    type: String
  },
  selectedCpufan:{
    type: String
  },
  selectedCpu:{
    type: String
  },
  selectedGpu:{
    type: String
  },
  selectedHdd:{
    type:String
  },
  selectedMb:{
    type: String
  },
  selectedMemory:{
    type: String
  },
  selectedPsu:{
    type: String
  },
  selectedSsd: {
    type: String
  }
}, {timestamps: true},
{collection: 'mybuilds'});

const Mybuild = mongoose.model("mybuilds", MybuildSchema)
module.exports = Mybuild