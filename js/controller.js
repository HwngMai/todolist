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
            <button onclick="" class="btn btn-success align-self-end" disabled > Đã xong </button>
            <button onclick="xoaTaskDone('${task.id}')" class="btn btn-danger align-self-end"> Xóa </button>
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
// hàm sắp xếp động
function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}
