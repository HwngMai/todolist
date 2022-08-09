const BASE_URL = "https://62db6ca5e56f6d82a772852f.mockapi.io";
//**Gọi FUNC add task */

//**FUNCTION lấy Task từ API - render lên giao diện */
function getTaskList() {
  loadingOn();
  axios({
    url: `${BASE_URL}/TaskList`,
    method: "GET",
  })
    .then(function (res) {
      loadingOff();
      console.log(res);
      renderTask(res.data);
    })
    .catch(function (err) {
      loadingOff();
      console.log(err);
    });
}

//Gọi lại hàm getTaskList, render Tast lên giao diện
getTaskList();
//**FUNCTION Thêm task */
document.getElementById("addItem").onclick = function () {
  let newTask = getNewTask();
  console.log("newTask: ", newTask);
  loadingOn();
  axios({
    url: `${BASE_URL}/TaskList`,
    method: "POST",
    data: newTask,
  })
    .then(function (res) {
      loadingOff();
      console.log(res);
      getTaskList();
    })
    .catch(function (err) {
      loadingOff();
      console.log(err);
    });
};
