// write your DOM code here.
// DOM element references
const join_queueElement = document.querySelector(".join_queue")
const passenger_queue_countElement = document.querySelector(".passenger_queue_count")
const leave_queueElement = document.querySelector(".leave_queue")
const join_taxi_queueBtnElement =  document.querySelector(".join_taxi_queueBtn")
const taxi_queue_count1Element = document.querySelector(".taxi_queue_count1")
const departElement = document.querySelector(".depart")


// create Factory Function instance
const taxiQueue = TaxiQueue();
var taxis = localStorage.getItem("taxis")
var passangers =  localStorage.getItem("passangers")
// DOM events
join_queueElement.addEventListener("click", function(){
    //alert("hi")
    taxiQueue.joinQueue();
    passenger_queue_countElement.innerHTML = taxiQueue.queueLength()
    localStorage['passangers']= taxiQueue.queueLength()
})
leave_queueElement.addEventListener("click", function(){
    taxiQueue.leaveQueue();
    passenger_queue_countElement.innerHTML = taxiQueue.queueLength()
    localStorage['passangers'] = taxiQueue.leaveQueue()
   
})
join_taxi_queueBtnElement.addEventListener("click",function(){
    taxiQueue.joinTaxiQueue();
    taxi_queue_count1Element.innerHTML = taxiQueue.taxiQueueLength()
    localStorage['taxis'] = taxiQueue.taxiQueueLength()

})
departElement.addEventListener("click", function(){
    taxiQueue.taxiDepart();
    taxiQueue.queueLength();
    taxiQueue.leaveQueue();
    taxi_queue_count1Element.innerHTML = taxiQueue.taxiQueueLength();
    passenger_queue_countElement.innerHTML = taxiQueue.queueLength()
   
})
passenger_queue_countElement.innerHTML = passangers;
taxi_queue_count1Element.innerHTML = taxis;
