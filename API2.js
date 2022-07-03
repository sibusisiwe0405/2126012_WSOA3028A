const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')
[0];
 
window.addEventListener('keydown', function(event){
    if(event.key === "Enter")
    loadImg();
})

function loadImg(){
    
removeImages();
const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=10&client_id=0Z0fOr_p53gcCKEanQtOUq0jFCsKK49zCRtzJ4RIbU0';

fetch(url)

.then(reponse =>{
  if(response.Ok)
  return response.json();
  else
  alert(response.status)
})

.then(data=>{
  const imageNodes =[];
  for(let i = 0; i < data.results.length;i++){
imageNodes[i] = document.createElement('div');
imageNodes[i].className = 'img'; 
imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
imageNodes[i].addEventListener('dbclick', function(){
  window.open(data.results[i].links.download,'_blank');
})
grid.appendChild(imageNodes[i]);
  }
})

function removeImages(){
window.onload = function (){
    
        grid.innerHTML = '';
}

}
}