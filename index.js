(function () {
	const BASE_URL = 'https://movie-list.alphacamp.io'
  const INDEX_URL = BASE_URL + '/api/v1/movies/'
  const POSTER_URL = BASE_URL + '/posters/'
  const data = []	

  const genreList = document.getElementById('genre-list')
  const moviePanel = document.getElementById('movie-panel')
  const genreData = {
	  "1": "Action",
	  "2": "Adventure",
	  "3": "Animation",
	  "4": "Comedy",
	  "5": "Crime",
	  "6": "Documentary",
	  "7": "Drama",
	  "8": "Family",
	  "9": "Fantasy",
	  "10": "History",
	  "11": "Horror",
	  "12": "Music",
	  "13": "Mystery",
	  "14": "Romance",
	  "15": "Science Fiction",
	  "16": "TV Movie",
	  "17": "Thriller",
	  "18": "War",
	  "19": "Western"
  }
  let origGenres = Object.values(genreData)
  
  let genres = Object.values(genreData)
  genres[14] = "ScienceFiction"
  genres[15] = "TVMovie"

	// get data from API
  axios.get(INDEX_URL).then((res) => {
    data.push(...res.data.results)
    addNewGenreTextArr(data)
    pushGenreTextToArr(data)
    console.log(data)
  }).catch((err) => console.log(err))

  

  // push genres text object to each movie data
  function addNewGenreTextArr (data) {
  	data.forEach(function (movie) {
  		movie.genrestext = []
  	})	
  }

  // push genres text to each genres text object
  function pushGenreTextToArr (data) {
  	data.forEach(function (movie) {
  		if (movie.genres.includes(1)) {
  			movie.genrestext.push('Action')
  		}
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(2)) {
  			movie.genrestext.push('Adventure')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(3)) {
  			movie.genrestext.push('Animation')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(4)) {
  			movie.genrestext.push('Comedy')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(5)) {
  			movie.genrestext.push('Crime')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(6)) {
  			movie.genrestext.push('Documentary')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(7)) {
  			movie.genrestext.push('Drama')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(8)) {
  			movie.genrestext.push('Family')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(9)) {
  			movie.genrestext.push('Fantasy')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(10)) {
  			movie.genrestext.push('History')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(11)) {
  			movie.genrestext.push('Horror')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(12)) {
  			movie.genrestext.push('Music')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(13)) {
  			movie.genrestext.push('Mystery')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(14)) {
  			movie.genrestext.push('Romance')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(15)) {
  			movie.genrestext.push('Science Fiction')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(16)) {
  			movie.genrestext.push('TV Movie')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(17)) {
  			movie.genrestext.push('Thriller')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(18)) {
  			movie.genrestext.push('War')
  		} 	
  	})
  	data.forEach(function (movie) {
  		if (movie.genres.includes(19)) {
  			movie.genrestext.push('Western')
  		} 	
  	})
  }

  // set genre nav
  function addGenre (genre) {
  	let newGenre = document.createElement('li')
  	newGenre.classList.add('nav-item')
  	newGenre.innerHTML = `
		<a class="nav-link ${genre}" href="#">${genre}</a>
  	`
	  genreList.appendChild(newGenre)
  }

  for (let genre of origGenres) {
  	addGenre(genre)
  }

 	// set addEventListener to genreList
  genreList.addEventListener('click',  (event) => {
  	let listItem = document.querySelectorAll('.nav-link')
  	let results = []
	  listItem.forEach(item => {
	  	item.classList.remove('active')
	  })
	  event.target.classList.add('active')
	  if (event.target.matches('.Action')) {
	  	results = data.filter(movie => movie.genres.includes(1))
	  } else if (event.target.matches('.Adventure')) {
	  	results = data.filter(movie => movie.genres.includes(2))
	  } else if (event.target.matches('.Animation')) {
	  	results = data.filter(movie => movie.genres.includes(3))
	  } else if (event.target.matches('.Comedy')) {
	  	results = data.filter(movie => movie.genres.includes(4))
	  } else if (event.target.matches('.Crime')) {
	  	results = data.filter(movie => movie.genres.includes(5))
	  } else if (event.target.matches('.Documentary')) {
	  	results = data.filter(movie => movie.genres.includes(6))
	  } else if (event.target.matches('.Drama')) {
	  	results = data.filter(movie => movie.genres.includes(7))
	  } else if (event.target.matches('.Family')) {
	  	results = data.filter(movie => movie.genres.includes(8))
	  } else if (event.target.matches('.Fantasy')) {
	  	results = data.filter(movie => movie.genres.includes(9))
	  } else if (event.target.matches('.History')) {
	  	results = data.filter(movie => movie.genres.includes(10))
	  } else if (event.target.matches('.Horror')) {
	  	results = data.filter(movie => movie.genres.includes(11))
	  } else if (event.target.matches('.Music')) {
	  	results = data.filter(movie => movie.genres.includes(12))
	  } else if (event.target.matches('.Mystery')) {
	  	results = data.filter(movie => movie.genres.includes(13))
	  } else if (event.target.matches('.Romance')) {
	  	results = data.filter(movie => movie.genres.includes(14))
	  } else if (event.target.matches('.ScienceFiction')) {
	  	results = data.filter(movie => movie.genres.includes(15))
	  } else if (event.target.matches('.TVMovie')) {
	  	results = data.filter(movie => movie.genres.includes(16))
	  } else if (event.target.matches('.Thriller')) {
	  	results = data.filter(movie => movie.genres.includes(17))
	  } else if (event.target.matches('.War')) {
	  	results = data.filter(movie => movie.genres.includes(18))
	  } else if (event.target.matches('.Western')) {
	  	results = data.filter(movie => movie.genres.includes(19))
	  }
	  displayDataList(results)
  })

  // show movies
  function displayDataList (data) {
    let htmlContent = ''
    data.forEach(function (movie) {
    	let genreContent = ''
    	for (i = 0; i < movie.genrestext.length; i++) {
  			genreContent += `
				<span class="badge badge-light" data-id="${movie.id}">${movie.genrestext[i]}</span>
  			`
  		}
      htmlContent += `
        <div class="col-sm-3">
          <div class="card mb-2">
            <img class="card-img-top" src="${POSTER_URL}${movie.image}" alt="Card image cap">
            <div class="card-body movie-item-body flex-column">
            	<div class="card-title">
								<h6>${movie.title}</h6>
            	</div>
              <div class="card-genre">
              	${genreContent}
            	</div>
            </div>
        	</div>
       </div>
      `
    })
    moviePanel.innerHTML = htmlContent
  }
})()
