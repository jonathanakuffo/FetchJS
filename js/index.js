const url = "https://api.themoviedb.org/3/trending/all/day?api_key=ca357c71903c409f2ce08d61e75700a6&page=1";

fetch(url).then (response => response.json()).then (result =>{

    let data = result.results;
    let moviewrapper = document.querySelector(".movies-wrapper")

    

     data.forEach ( item => {

          let movieUnit =
          <div class="movie-unit">
                <div class="cover" style="background-image: url(https://via.placeholder.com/500);"></div>
                    <h2 class="movie-title">Movie Title</h2>
          </div> 
         ;
        console.log(item)
        //  console.log(item)
     })
})