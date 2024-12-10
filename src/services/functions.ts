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

const likedMovies = (): string[] => {
  return JSON.parse(localStorage.getItem("LikedMovies") || '""');

}

const isMovieLiked = (movieName: string) : boolean => {
  let allLiked = JSON.parse(localStorage.getItem("LikedMovies") || '""');
  return allLiked.includes(movieName);
}

const addLikedMovies = (movieName: string) : void => {
  let allLiked = JSON.parse(localStorage.getItem("LikedMovies") || '""') || [];
  allLiked.push(movieName);
  localStorage.setItem("LikedMovies", JSON.stringify(allLiked))
}

const deleteLikedMovies = (movieName: string) : void => {
  let allLiked = JSON.parse(localStorage.getItem("LikedMovies") || '""');
  localStorage.setItem("LikedMovies", JSON.stringify(allLiked.filter((movie: string) => movie !== movieName)))
}

const countLikedMovies = () : number => {
  let allLiked = JSON.parse(localStorage.getItem("LikedMovies") || '""');
  return allLiked.length;
}

const votesConverter = (voteCount: string|undefined) => {
  if(voteCount !== undefined) {
    voteCount = voteCount.replace(",", "").replace(",", "").replace(",", "").replace(",", "");
  
    if(voteCount.length > 6)
      return `${voteCount.slice(0, voteCount.length-6)}.${voteCount[voteCount.length-6]}M Votes`
    else if (voteCount.length > 3)
      return `${voteCount.slice(0, voteCount.length-3)}.${voteCount[voteCount.length-3]}K Votes`
  } 
  
  return "351K Votes";
}

const movieNameConverter = (movieName: string): string => {
  return movieName.replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%C3%A0", "à").replace("%2C", ",").replace("%C3%A0", "à")
} 

const toCapital = (name: string) => {
  return name[0].toUpperCase() + name.slice(1);
}

const calculateCommentCount = (movieName: string): number => {
  let commentCount = movieNameConverter(movieName).toUpperCase().charCodeAt(4) || movieNameConverter(movieName).toUpperCase().charCodeAt(0)
  commentCount = commentCount > 60 ? commentCount/2 : commentCount;
  commentCount = commentCount > 30 ? commentCount-15 : commentCount;
  return Math.floor(commentCount)
}

export { isLogin, smallScreenHandler, likedMovies, isMovieLiked, addLikedMovies, deleteLikedMovies, countLikedMovies, votesConverter, movieNameConverter, toCapital, calculateCommentCount}