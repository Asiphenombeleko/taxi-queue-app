function TaxiQueue() {
  var PeopleOnQueue = 0;
  var taxiJoins = 0;

  function joinQueue() {
    PeopleOnQueue += 1;
  }

  function leaveQueue() {
	
  }

  function joinTaxiQueue() {
	taxiJoins += 1
  }

  function queueLength() {
    return PeopleOnQueue;
  }

  function taxiQueueLength() {
	return taxiJoins
  }

  function taxiDepart() {}

  return {
    joinQueue,
    leaveQueue,
    joinTaxiQueue,
    queueLength,
    taxiQueueLength,
    taxiDepart,
  };
}
