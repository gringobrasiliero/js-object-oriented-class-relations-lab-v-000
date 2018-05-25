let id = 0
let driverId = 0
let passengerId = 0
let tripId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverId
  
  
    store.drivers.push(this)

  }
  trips() {
    return store.trips.filter(trip => {return trip.driverId === this.id})
  }

  passengers() {
    return this.trips().map(trip => trip.passenger());
  }
}

class Passenger {
  constructor(name){
    this.name = name
    store.passengers.push(this)
    this.id = ++passengerId
  }
trips() {
  return store.trips.filter(trip => {return trip.passengerId === this.id})
}

drivers() {
  return this.trips().map(trip => trip.driver());
}


}

class Trip {
  constructor(driver, passenger){
    this.name = name
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
    
  }
  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
  })
}

driver(){
  return store.drivers.find(function(driver){
    return driver.id === this.driverId
  }.bind(this))
}
}