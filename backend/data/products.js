const products = [
	{
		_id:'1',
		partType: 'memory',
		name:'CORSAIR Vengeance LPX',
		brand:'CORSAIR',
		capacity: 16,
		unit:'GB',
		memory_type:'DDR4',
		pin_type: 288
	},
	{
		_id:'2',
		partType: 'memory',
		name:'GeIL ORION AMD Edition',
		brand:'GeIL',
		capacity: 8,
		unit:'GB',
		memory_type:'DDR3',
		pin_type: 288
	},
	{
		_id:'3',
		partType: 'hdd',
		name: 'Seagate BarraCuda ST2000DM008',
		brand: 'Seagate',
		series: 'BarraCuda',
		capacity: 2,
		unit: 'TB'
	},
	{
		_id:'4',
		partType: 'psu',
		name: 'EVGA 500 BA 100-BA-0500-K1',
		brand: 'EVGA',
		series: '500BA',
		input_volt_min: 100,
		input_volt_max: 240,
		type: 'ATX12V/EPS12V',
		max_power: '500',
		max_length: '140'
	},
	{
		_id:'5',
		partType: 'psu',
		name: 'EVGA 700 BA 100-BA-0500-K1',
		brand: 'EVGA',
		series: '700BA',
		input_volt_min: 100,
		input_volt_max: 240,
		type: 'ATX12V/EPS12V',
		max_power: '500',
		max_length: '140'
	}

]

module.exports = products