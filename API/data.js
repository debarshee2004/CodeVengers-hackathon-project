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
// Add more parking lots here...
];

module.exports = parkingData;
