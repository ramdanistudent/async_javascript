console.log("before");
const user = getUser(1);
console.log(user);
console.log("after");

function getUser(id) {
  setTimeout(() => {
    console.log("Reading user database");
    return { id: id, user: "dan" };
  }, 2000);
}
