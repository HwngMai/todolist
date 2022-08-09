//** FUNCTION render task */
renderTask = function (TaskList) {
  var contentHTML = "";
  TaskList.forEach((task) => {
    var contentTr = `
          <li class="d-flex align-items-center ">${task.id}.
          ${task.name}
          <div class="btnEdit">
          <button onclick="xoaTaskList('${task.id}')" class="btn btn-danger align-self-end"> Xóa </button>
          <button onclick="doneTask('${task.id}')" class="btn btn-warning align-self-end"> Done! </button>
          </div>
          </li>
          `;
    contentHTML += contentTr;
  });
  document.getElementById("todo").innerHTML = contentHTML;
};
//taskDone
renderTaskDone = function (TaskDone) {
  var contentHTML = "";
  TaskDone.forEach((task) => {
    var contentTr = `
            <li class="d-flex align-items-center ">${task.id}.
            ${task.name}
            <div class="btnEdit">
            <button onclick="xoaTaskDone('${task.id}')" class="btn btn-danger align-self-end"> Xóa </button>
            <button onclick="" class="btn btn-success align-self-end" disabled > Đã xong </button>
            </div>
            </li>
            `;
    contentHTML += contentTr;
  });
  document.getElementById("completed").innerHTML = contentHTML;
};
//**FUNCTION lấy thông tin từ form */
function getNewTask() {
  // lấy các giá trị từ input người dùng
  const name = document.getElementById("newTask").value;
  console.log("name: ", name);
  const isDone = false;
  //đưa về 1 mảng mới theo cấu tạo của model TaskToDo từ model.js
  return new TaskToDo(name, isDone);
}
//**FUNCTION BẬT LOADING */
function loadingOn() {
  document.getElementById("loading").style.display = "flex";
}
function loadingOff() {
  document.getElementById("loading").style.display = "none";
}
//**FUNC get task done */
function getTaskIsDone(id, taskList) {
  for (i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      return taskList[i];
    } else {
      return -1;
    }
  }
}
