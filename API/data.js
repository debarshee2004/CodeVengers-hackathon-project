const parkingData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  }
  // Add more parking lots here...
];

module.exports = parkingData;
