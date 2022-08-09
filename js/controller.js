//** FUNCTION render task */
renderTask = function (TaskList) {
  var contentHTML = "";
  TaskList.forEach((task) => {
    var contentTr = `
          <li>${task.id}.
          ${task.name}
          <button onclick="xoaTask('${task.id}')" class="btn btn-danger"> Xóa </button>
          <button onclick="suaTask('${task.id}')" class="btn btn-warning"> Sửa </button>
          </li>
          `;
    contentHTML += contentTr;
  });
  document.getElementById("todo").innerHTML = contentHTML;
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
