function TaxiQueue() {
  var PeopleOnQueue = 0;
  var taxiJoins = 0;
 

  function joinQueue() {
    PeopleOnQueue += 1;
  }
  function leaveQueue() {
	if(PeopleOnQueue > 0)
    PeopleOnQueue -= 1;
	
  }

  function joinTaxiQueue() {
	taxiJoins +=1;
  }

  function queueLength() {
    return PeopleOnQueue;
  }

  function taxiQueueLength() {
  return taxiJoins;
  }

  function taxiDepart() {
if(PeopleOnQueue >= 12 && taxiJoins !== 0){
	taxiJoins -= 1
	PeopleOnQueue  -=12
}
}
  return {
    joinQueue,
    leaveQueue,
    joinTaxiQueue,
    queueLength,
    taxiQueueLength,
    taxiDepart,
  };
}
