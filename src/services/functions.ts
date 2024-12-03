
const isLogin = (): Boolean => {
  if(localStorage.getItem("isLogin") && localStorage.getItem("isLogin") === "true")
    return true;
  else return false;
}

export { isLogin }


