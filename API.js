document.querySelector("#input").addEventListener("keydown", function(event)  {
    if (event.key === "Enter")
      apiRequest();
  });
  
  document.querySelector("#search").addEventListener("click", () => {
      apiRequest();
  });
  
 function apiRequest  ()  {
  removeImages();
    document.querySelector("#grid").textContent = "";
    //API access 
    const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=10&client_id=0Z0fOr_p53gcCKEanQtOUq0jFCsKK49zCRtzJ4RIbU0';

    fetch(url)
  
    .then(response => {
      if (response.ok) return response.json();
      else
      alert(response.status)
     })
     .then(data => {
        loadImages(data);
     })
  
     .catch(error => console.log(error));   
  }
  loadImages = (data) => {
    for(let i = 0;i < data.results.length;i++){
      let image = document.createElement("div");
      image.className = "img";
      image.style.backgroundImage = "url("+data.results[i].urls.raw + "" +")";
      //save feature. remove if not working
      image.addEventListener("dblclick", function(){
        window.open(data.results[i].links.download, '_blank');
      })
      document.querySelector("#grid").appendChild(image);
    }
  }
  function removeImages(){
    window.onload = function (){
        
            grid.innerHTML = '';
    }
    
    }