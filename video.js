let data=JSON.parse(localStorage.getItem("video"))

let frame=document.querySelector("#frame")
frame.src=`https://www.youtube.com/embed/${data.id.videoId}`
frame.title="snippet.title"