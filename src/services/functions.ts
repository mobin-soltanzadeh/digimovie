// check is user Login or not 
const isLogin = (): Boolean => {
  if(localStorage.getItem("isLogin") && localStorage.getItem("isLogin") === "true")
    return true;
  else return false;
}

// check the user screen for small screens
const smallScreenHandler = (size: number, smallScreen: boolean, setSmallScreen: (val: boolean) => void): void => {
  window.addEventListener("load", () => {
    if(window.innerWidth < size && !smallScreen) setSmallScreen(true);
    else if (window.innerWidth > size && smallScreen) setSmallScreen(false);
  })
  window.addEventListener("resize", () => {
    if(window.innerWidth < size && !smallScreen) setSmallScreen(true);
    else if (window.innerWidth > size && smallScreen) setSmallScreen(false);
  })
}

export { isLogin, smallScreenHandler }