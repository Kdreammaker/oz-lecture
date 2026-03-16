const defaultGenre = "Unknown";

let movies = [
    {
        title: "The Greatest Showman",
        director: "Michael Gracey",
        year: 2017,
        genre: "Musical/Drama"
    },
    {
        title: "The Intern",
        director: "Nancy Meyers",
        year: 2015,
        genre: "Comedy"
    },
    {
        title: "Les Misérables",
        director: "Tom Hooper",
        year: 2012,
        genre: "Musical/Drama"
    }
];

function printMovies(movieList) {
    var total = movieList.length;
    console.log("Movie Collection:");

    for (let i = 0; i < total; i++) {
        let movie = movieList[i];

        if (!movie.title) movie.title = "Untitled";
        if (!movie.director) movie.director = "Unknown Director";
        if (!movie.genre) movie.genre = defaultGenre;

        console.log(
            (i + 1) + ". Title: " + movie.title + 
            ", Director: " + movie.director + 
            ", Year: " + movie.year + 
            ", Genre: " + movie.genre
        );
    }

    console.log("Total Movies: " + total);
}

printMovies(movies);