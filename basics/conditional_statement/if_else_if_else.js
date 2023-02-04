let isStarted = false;
let isPending = false;
let isCompleted = true;
let task_status = "";

if (isStarted) {
    task_status = "I have started the task!"
    console.log(task_status)
} else if (isPending) {
    task_status = "The task is in progress!"
    console.log(task_status)
} else if (isCompleted) {
    task_status = "Congrates guys! The task is completed!!!"
    console.log(task_status)
} else {
    task_status = "Sorry!!! Invalid input!!!"
    console.log(task_status)
}
