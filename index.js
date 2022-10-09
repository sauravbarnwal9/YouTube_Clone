const api_key="AIzaSyC4oavVloCsQzJNh8xeO-I1c21DUrVQX2o";
//step: 1-youtube 
//2-url
//3-fetch

// / 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=[YOUR_API_KEY]'
// let url='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=${api_key';
// async function youtube(){
//     let res=await fetch(url)
//     let data=await res.json()
//     console.log(data)
// }

let search=async ()=>{
    let query=document.getElementById("query").value;
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`
let res= await fetch(url);
let data= await res.json();
append(data.items);
console.log(data.items)
// console.log(data);
// return data;
};

//appending my data here
let append=(data)=>{
    document.querySelector("#result").innerHTML=null;
    let container=document.getElementById("result");
    data.forEach(({id,snippet}) => {
        let div=document.createElement("div");
        
        console.log(id);
        console.log(snippet);
        let iframe=document.createElement("img");
        iframe.id="image"
        iframe.src=snippet.thumbnails.default.url;
        
        let h3=document.createElement("p");
        h3.innerText=snippet.title;
        div.append(iframe,h3);
        container.append(div);
        let video={
            snippet,
            id
        }
    
console.log(video)
        div.onclick=()=>{
            playVideo(video);
        };
    });
};
let playVideo=(video) =>{
console.log(video)
    localStorage.setItem("video",JSON.stringify(video));
   window.location.href="video.html";
  
};

//   <iframe width="560" height="315"
//  src="https://www.youtube.com/embed/IbBT5VZ3Lpg"     //video id
//   title="YouTube video player"
//    frameborder="0" allow="accelerometer;
//     autoplay; clipboard-write;
//      encrypted-media; gyroscope;
//       picture-in-picture" allowfullscreen></iframe> 


