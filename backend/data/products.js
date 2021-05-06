const products = [
	{
		partType: 'mb',
		name: 'MSI MPG Z590 GAMING FORCE',
		brand: 'MSI',
		series: '',
		socketType: 'LGA 1200',
		numOfSlots: 4,
		memorySlotPins: 288,
		maxMemorySupported: 128,
		memoryStandard: 'DDR4',
		cpubrand: 'AMD',
		supportedChannel: 'dual',
		formFactor: 'ATX',
		storageSsd: true,
		storageHhd: false,
		storagem2: true
	},
	{
		partType: 'mb',
		name: 'ASUS H81M-K',
		brand: 'ASUS',
		series: '',
		socketType: 'LGA 1150',
		numOfSlots: 2,
		memorySlotPins: 240,
		maxMemorySupported: 16,
		memoryStandard: 'DDR3',
		cpubrand: 'Intel',
		supportedChannel: 'dual',
		formFactor: 'ATX',
		storageSsd: true,
		storageHhd: false,
		storagem2: true
	},
	{
		partType: 'mb',
		name: 'GIGABYTE Z590 AORUS ELITE AX',
		brand: 'GIGABYTE',
		series: '',
		socketType: 'LGA 1200',
		numOfSlots: 4,
		memorySlotPins: 288,
		maxMemorySupported: 128,
		memoryStandard: 'DDR4',
		cpubrand: 'Intel',
		supportedChannel: 'dual',
		formFactor: 'ATX',
		storageSsd: true,
		storageHhd: false,
		storagem2: true
	},
	{
		partType: 'mb',
		name: 'MSI CREATOR TRX40',
		brand: 'MSI',
		series: '',
		socketType: 'sTRX4',
		numOfSlots: 8,
		memorySlotPins: 288,
		maxMemorySupported: 256,
		memoryStandard: 'DDR4',
		cpubrand: 'AMD',
		supportedChannel: 'quad',
		formFactor: 'Extended ATX',
		storageSsd: true,
		storageHhd: false,
		storagem2: true
	},
	{
		partType: 'memory',
		name:'CORSAIR Vengeance LPX',
		brand:'CORSAIR',
		capacity: 16,
		unit:'GB',
		memory_type:'DDR4',
		pin_type: 288
	},
	{
		partType: 'memory',
		name:'GeIL ORION AMD Edition',
		brand:'GeIL',
		capacity: 8,
		unit:'GB',
		memory_type:'DDR3',
		pin_type: 288
	},
	{
		partType: 'hdd',
		name: 'Seagate BarraCuda ST2000DM008',
		brand: 'Seagate',
		series: 'BarraCuda',
		capacity: 2,
		unit: 'TB'
	},
	{
		partType: 'memory',
		name: "4GB (2x2GB) DDR2 800 (PC2 6400)",
		brand: "NEMIX RAM",
		capacity: 4,
		unit: 'GB',
		memory_type: 'DDR2',
		pin_type: 240
	},
	{
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
		partType: 'memory',
		name: "OLOY ND4U1632162BRWDE",
		brand: "OLOy",
		capacity: 32,
		unit: 'GB',
		memory_type: 'DDR4',
		pin_type: 288
	},
	{
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

export default products