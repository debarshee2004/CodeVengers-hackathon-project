const parkingData = [
  {
    id: PARKOL001,
    name: "Central Parking Garage",
    location: "123 Main Street, Cityville",
    totalSpaces: 300,
    availableSpaces: 150,
    hourlyRate: 2.5,
    isOpen: true,
    coordinates: {
      latitude: 40.7128,
      longitude: -74.0060
    }
  },
  {
    id: PARKOL002,
    name: "Downtown Plaza Parking",
    location: "456 Elm Avenue, Townsville",
    totalSpaces: 200,
    availableSpaces: 50,
    hourlyRate: 3.0,
    isOpen: true,
    coordinates: {
      latitude: 34.0522,
      longitude: -118.2437
    }
  },
  {
    id: PARKOL003,
    name: "Riverside Parking Lot",
    location: "789 River Road, Villagetown",
    totalSpaces: 100,
    availableSpaces: 10,
    hourlyRate: 1.75,
    isOpen: false,
    coordinates: {
      latitude: 39.9526,
      longitude: -75.1652
    }
  },
  {
    id: PARKLOT025,
    name: "Parking Zone",
    location: "Barrackpore station Road,West Bengal 700120",
    totalSpaces: 200,
    availableSpaces: 100,
    hourlyRate: 60,
    isOpen: false,
    coordinates: {
      latitude: 22.760074,
      longitude: 88.370822
    }
  },
  {
    id: PARKLOT026,
    name: "Jubilee Car Parking Service",
    location: "Azad Hind Bag, Maniktala, Kolkata-700006",
    totalSpaces: 300,
    availableSpaces: 120,
    hourlyRate: 60,
    isOpen: true,
    coordinates: {
      latitude: 22.588775,
      longitude: 88.369607
    }
  },  
  {
    id: PARKLOT027,
    name: "CC2 Parking Lot",
    location: "Action Area IID, Newtown,West Bengal-700052",
    totalSpaces: 250,
    availableSpaces: 100,
    hourlyRate: 80,
    isOpen: true,
    coordinates: {
      latitude: 22.623199,
      longitude: 88.450145
    }
  },
  {
    id: PARKLOT028,
    name: "Parking Zone",
    location: "Barrackpore station Road,West Bengal 700120",
    totalSpaces: 200,
    availableSpaces: 100,
    hourlyRate: 60,
    isOpen: false,
    coordinates: {
      latitude: 22.760074,
      longitude: 88.370822
    }
  },
  {
    id: PARKLOT029,
    name: "Car Parking",
    location: "V9WX+V5J, Chinsurah R S, Chinsurah, West Bengal 712101",
    totalSpaces: 200,
    availableSpaces: 80,
    hourlyRate: 70,
    isOpen: true,
    coordinates: {
      latitude: 22.897218,
      longitude: 88.397893
    }
  },
  {
    id: PARKLOT030,
    name: "Paul Car Parking",
    location: "9, Naihati, Kolkata, West Bengal 743165",
    totalSpaces: 150,
    availableSpaces: 70,
    hourlyRate: 60,
    isOpen: false,
    coordinates: {
      latitude: 22.893286,
      longitude: 88.424144
    }
  }, 
  {
    id: PARKLOT031,
    name: "Jyoti Parking",
    location: "Sukhsanatantala,Chandannagar,West Bengal-712136",
    totalSpaces: 100,
    availableSpaces: 50,
    hourlyRate: 70,
    isOpen: true,
    coordinates: {
      latitude: 22.857103,
      longitude: 88.355642
    }
  },
  {
    id: PARKLOT032,
    name: "Dakshineswar Temple Complex Car Parking 2",
    location: "M945+H8P, Dakshineswar, Kolkata, West Bengal 700076",
    totalSpaces: 200,
    availableSpaces: 180,
    hourlyRate: 60,
    isOpen: false,
    coordinates: {
      latitude: 22.656445,
      longitude: 88.358355
    }
  },
  {
    id: PARKLOT033,
    name: "Rangoli Mall Parking",
    location: "68, Ram Lochan Shire St, Belur Math, Howrah, West Bengal 711202",
    totalSpaces: 120,
    availableSpaces: 50,
    hourlyRate: 60,
    isOpen: true,
    coordinates: {
      latitude: 22.624692,
      longitude: 88.353680
    }
  },
  {
    id: PARKLOT034,
    name: "City Center-1 Parking",
    location: "CITY CENTRE 1 DC BLOCK PARKING LOT. SEC 1 KOLKATA 700064, DC Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
    totalSpaces: 300,
    availableSpaces: 200,
    hourlyRate: 80,
    isOpen: false,
    coordinates: {
      latitude: 22.589212,
      longitude: 88.408775
    }
  },
  {
    id: PARKLOT035,
    name: "Parking Place",
    location: "IB-172, IB-172, IB Block, Sector 3, Kolkata, West Bengal 700106",
    totalSpaces: 250,
    availableSpaces: 100,
    hourlyRate: 80,
    isOpen: true,
    coordinates: {
      latitude: 22.572509,
      longitude: 88.413432
    }
  },
  {
    id: PARKLOT036,
    name: "Parking Place",
    location: "HCMG+HHX, CK Block, Sector II, Bidhannagar, Kolkata, West Bengal 700091",
    totalSpaces: 200,
    availableSpaces: 100,
    hourlyRate: 80,
    isOpen: false,
    coordinates: {
      latitude: 22.572509,
      longitude: 88.413432
    }
  },
  {
    id: PARKLOT037,
    name: "Car Parking Garage",
    location: "H7VV+88C, Ramrajatala, Howrah, West Bengal 711104",
    totalSpaces: 250,
    availableSpaces: 100,
    hourlyRate: 60,
    isOpen: true,
    coordinates: {
      latitude: 22.593305,
      longitude: 88.293279
    }
  },
  {
    id: PARKLOT038,
    name: "RKG Garage",
    location: "19/62, Mall Rd, K.B.Sarani, Arjunpur, Dum Dum, Kolkata, West Bengal 700080",
    totalSpaces: 300,
    availableSpaces: 200,
    hourlyRate: 60,
    isOpen: false,
    coordinates: {
      latitude: 22.628571,
      longitude: 88.425438
    }
  },
  {
    id: PARKLOT039,
    name: "ISI Parking Lot",
    location: "J9XG+CG5, Dunlop, Bonhooghly Government Colony, Baranagar, West Bengal 7001080",
    totalSpaces: 200,
    availableSpaces: 100,
    hourlyRate: 60,
    isOpen: true,
    coordinates: {
      latitude: 22.648511,
      longitude: 88.376340
    }
  },     // Add more parking lots here...
];

module.exports = parkingData;
