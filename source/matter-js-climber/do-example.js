console.log(document.readyState);
document.onreadystatechange = ()=>{
  console.log(document.readyState);
  if(document.readyState == "complete") {
    Example.climbingWall();
  }
}