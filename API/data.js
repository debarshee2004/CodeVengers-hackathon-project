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
    id: PARKLOT001,
    name: "The 42 Parking",
    location: "Kankaria Estates,Park Street area Kolkata-700071",
    totalSpaces: 300,
    availableSpaces: 150,
    hourlyRate: 70,
    isOpen: true,
    coordinates: {
      latitude: 22.548386,
      longitude: 88.349224
    }
  },
  {
    id: PARKLOT002,
    name: "Dharmatal Sahid Minar",
    location: "Dharmtalla,Dufferin Road,Kolkata-700069",
    totalSpaces: 250,
    availableSpaces: 100,
    hourlyRate: 60,
    isOpen: true,
    coordinates: {
      latitude: 22.560118,
      longitude: 88.352455
    }
  },
  {
    id: PARKLOT003,
    name: "Camac street parking ground",
    location: "2C,Camac St,Elgin,Kolkata-700017",
    totalSpaces: 100,
    availableSpaces: 50,
    hourlyRate: 60,
    isOpen: false,
    coordinates: {
      latitude: 22.544545,
      longitude: 88.352562
    }
  },
  {
    id: PARKLOT004,
    name: "ICICI Lombard Network Garage",
    location: "P-256 & 257,CIT Road,Entally,Kolkata-700010",
    totalSpaces: 200,
    availableSpaces: 50,
    hourlyRate: 70,
    isOpen: true,
    coordinates: {
      latitude: 22.552074,
      longitude: 88.371661
    }
  },
  {
    id: PARKLOT005,
    name: "Sorvey Parking",
    location: "Fire Brigade Hrad Quater,New Market Area,Taltala",
    totalSpaces: 200,
    availableSpaces: 100,
    hourlyRate: 60,
    isOpen: false,
    coordinates: {
      latitude: 22.556116,
      longitude: 88.350916
    }
  },
  {
    id: PARKLOT006,
    name: "Consultive Parking",
    location: "Lake Market,Kalighat,Kolkata-700029",
    totalSpaces: 110,
    availableSpaces: 60,
    hourlyRate: 65,
    isOpen: false,
    coordinates: {
      latitude: 22.515589,
      longitude: 88.346903
    }
  },
  {
    id: PARKLOT007,
    name: "Adil's Parking",
    location: "Moulama Mohammed Ali Road near Madina Masjid,Babu Bazar,Khidirpur,Kolkata-700023",
    totalSpaces: 100,
    availableSpaces: 50,
    hourlyRate: 60,
    isOpen: true,
    coordinates: {
      latitude: 22.537797,
      longitude: 88.321559
    }
  },
  {
    id: PARKLOT008,
    name: "Parking",
    location: "Sreepally,Bhowanipore,Kolkata-700020",
    totalSpaces: 200,
    availableSpaces: 150,
    hourlyRate: 60,
    isOpen: false,
    coordinates: {
      latitude: 22.540053,
      longitude: 88.353535
    }
  },
  {
    id: PARKLOT009,
    name: "Car Parking",
    location: "Dover Terrace,Ballygunge,Kolkata-700019",
    totalSpaces: 240,
    availableSpaces: 80,
    hourlyRate: 60,
    isOpen: true,
    coordinates: {
      latitude: 22.522577,
      longitude: 88.358029
    }
  },
  {
    id: PARKLOT010,
    name: "Suman's Garage",
    location: "Baliya,Garia,Kolkata-700084",
    totalSpaces: 100,
    availableSpaces: 60,
    hourlyRate: 70,
    isOpen: false,
    coordinates: {
      latitude: 22.459333,
      longitude: 88.389005
    }
  },
  {
    id: PARKLOT011,
    name: "Maa Tara Garage",
    location: "188,Gopinagar,Behala,Kolkata-700034",
    totalSpaces: 220,
    availableSpaces: 170,
    hourlyRate: 60,
    isOpen: true,
    coordinates: {
      latitude: 22.492052,
      longitude: 88.311404
    }
  },
  {
    id: PARKLOT012,
    name: "IICB Parking Lot",
    location: "CSIR-IICB,Indian association for the cultivation of science,Poddar Nagar,Jadavpur,Kolkata-700032",
    totalSpaces: 200,
    availableSpaces: 90,
    hourlyRate: 60,
    isOpen: false,
    coordinates: {
      latitude: 22.497679,
      longitude: 88.369388
    }
  },
    //North Kolkata
  {
    id: PARKLOT015,
    name: "RGKar Car Parking Area",
    location: "16/B, Bidhan Sarani, Shyam Bazar,Kolkata-700004",
    totalSpaces: 300,     //max
    availableSpaces: 150,
    hourlyRate: 65,     //60 to 80
    isOpen: true,
    coordinates: {
      latitude: 22.5982,      //-100 to 100
      longitude: 88.3687
    }
  },
  {
    id: PARKLOT016,
    name: "HATIBAGAN CAR PARKING",
    location: "H9W7+FH6, Sovabazar St, Girish Park, Sovabazar, Darjipara, Kolkata-700006",
    totalSpaces: 150,
    availableSpaces: 40,
    hourlyRate: 65,
    isOpen: true,
    coordinates: {
      latitude: 22.5968,
      longitude: 88.3652
    }
  },
  {
    id: PARKLOT017,
    name: "Beriwala House Car Park",
    location: "50B, Muktaram Babu St, Raja Katra, Singhi Bagan, Jorasanko, Kolkata-700007",
    totalSpaces: 250,
    availableSpaces: 100,
    hourlyRate: 60,       //min
    isOpen: false,
    coordinates: {
      latitude: 22.5849,
      longitude: 88.3591
    }
  },
  //Central kolkata
  {
    id: PARKLOT018,
    name: "TOWN PARKING",
    location: "H89W+426, Esplanade Row W, B.B.D. Bagh, Kolkata-700001",
    totalSpaces: 300,
    availableSpaces: 170,
    hourlyRate: 80,
    isOpen: true,
    coordinates: {
      latitude: 22.5683,
      longitude: 88.3433
    }
  },
  //South Kolkata
  {
    id: PARKLOT019,
    name: "Alipore musuem Car Parking",
    location: "Judges Court Rd, Alipore, Kolkata-700027",
    totalSpaces: 250,
    availableSpaces: 80,    
    hourlyRate: 80,
    isOpen: true,
    coordinates: {
      latitude: 22.5256,
      longitude: 88.3398
    }
  },
  {
    id: PARKLOT020,
    name: "IOCL Parking",
    location: "Golf Gardens, Tollygunge, Kolkata-700095",
    totalSpaces: 100,
    availableSpaces: 35,
    hourlyRate: 75,
    isOpen: false,
    coordinates: {
      latitude: 22.4986,
      longitude: 88.3454
    }
  },
  //North-East Kolkata
  {
    id: PARKLOT021,
    name: "Poka Parking",
    location: "Sreebhumi, Lake Town, South Dumdum-700048",
    totalSpaces: 100,
    availableSpaces: 60,
    hourlyRate: 60,
    isOpen: false,
    coordinates: {
      latitude: 22.5993,
      longitude: 88.4022
    }
  },
  //North-West Kolkata
  {
    id: PARKLOT022,
    name: "Car Park",
    location: "3, 63, Aurobindo Sarani Rd, West Kamalapur, Kalidham, Colony, Dum Dum, Kolkata, North Dumdum-700055",
    totalSpaces: 300,
    availableSpaces: 150,
    hourlyRate: 70,
    isOpen: true,
    coordinates: {
      latitude: 22.6626,
      longitude: 88.4090
    }
  },
  {
    id: PARKLOT023,
    name: "Apanjan Car Parking",
    location: "4, Deshpran Sasmal Ave, Dunlop, U B Colony, Ashokgarh, Kolkata-700108",
    totalSpaces: 200,
    availableSpaces: 150,
    hourlyRate: 70,
    isOpen: true,
    coordinates: {
      latitude: 22.6519,
      longitude: 88.3786
    }
  },
  //South-South Ease Kolkata
  {
    id: PARKLOT024,
    name: "South City Mall Rooftop Parking",
    location: "375, Prince Anwar Shah Rd, South City Complex, Tollygunge, Kolkata-700068",
    totalSpaces: 300,
    availableSpaces: 200,
    hourlyRate: 80,
    isOpen: true,
    coordinates: {
      latitude: 22.5017,
      longitude: 88.3615
    }
  }
  // Add more parking lots here...
];

module.exports = parkingData;
