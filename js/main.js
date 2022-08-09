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
function getTaskDone() {
  loadingOn();
  axios({
    url: `${BASE_URL}/TaskDone`,
    method: "GET",
  })
    .then(function (res) {
      loadingOff();
      console.log(res);
      renderTaskDone(res.data);
    })
    .catch(function (err) {
      loadingOff();
      console.log(err);
    });
}

//Gọi lại hàm getTaskList, render Tast lên giao diện
getTaskList();
getTaskDone();
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
//**FUNCTION xóa task ở TaskList */
function xoaTaskList(id) {
  loadingOn();
  axios({
    url: `${BASE_URL}/TaskList/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      loadingOff();
      console.log("res: ", res);
      getTaskList();
    })
    .catch(function (err) {
      loadingOff();
      console.log("err: ", err);
    });
}
//**FUNCTION xóa task ở TaskDone */
function xoaTaskDone(id) {
  loadingOn();
  axios({
    url: `${BASE_URL}/TaskDone/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      loadingOff();
      console.log("res: ", res);
      getTaskDone();
    })
    .catch(function (err) {
      loadingOff();
      console.log("err: ", err);
    });
}
//**FUNCTION chuyển task sang done */
function doneTask(id) {
  loadingOn();
  //Lấy taskChange
  axios({
    url: `${BASE_URL}/TaskList`,
    method: "GET",
  })
    .then(function (res) {
      console.log(res);
      // lấy taskChange
      let taskChange = getTaskIsDone(id, res.data);
      console.log("taskChange: ", taskChange);
      //Chuyển vào TaskDone
      axios({
        url: `${BASE_URL}/TaskDone`,
        method: "POST",
        data: taskChange,
      })
        .then(function (res) {
          console.log(res);
          getTaskDone();
        })
        .catch(function (err) {
          console.log(err);
        });
    })
    .catch(function (err) {
      loadingOff();
      console.log("err: ", err);
    });
  //Xóa task từ taskList render lại taskList
  xoaTaskList(id);
  getTaskList();
  getTaskDone();
  loadingOff();
}
