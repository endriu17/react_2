var movies = [{
        id: 1,
        title: 'The God Doctor',
        desc: 'serial o wybitnym lekarzu',
        src: './images/tgd.jpg'
    },
    {
        id: 2,
        title: 'Better call Saul',
        desc: 'serial o ciekawym prawniku',
        src: './images/bcs.jpg'
    },
    {
        id: 3,
        title: 'Friends',
        desc: 'serial o grupie przyjaciół',
        src: './images/fr.jpg'
    },
    {
        id: 4,
        title: 'The Big Bang Theory',
        desc: 'Serial o grupie przyjaciół naukowców',
        src: './images/tbbt.jpg'
    }
];

// var moviesElements = movie.map(function (movie) {
//     return React.createElement('li', {key: movie.id},
//             React.createElement('h2', {}, movie.title),
//             React.createElement('p', {}, movie.desc),
//             React.createElement('img', {
//                 src: movie.src,
//                 width: "250px",
//                 height: "300px"
//         })
//     );
// });

// var element =
//     React.createElement('div', {},
//         React.createElement('h1', {}, 'Lista filmów'),
//         React.createElement('ul', {}, moviesElements),

//     );




var Movie = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render() {
        return (
            React.createElement('li', {key: movies.id})

        )
    },

});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },
    render() {
        return (
            React.createElement('h2', {}, movies.title)
        )
    },
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string
    },
    render() {
        return (
            React.createElement('p', {}, movies.desc)
        )
    },
});

var MovieSrc = React.createClass({
    propTypes: {
        src: React.PropTypes.object
    },
    render() {
        return (
            React.createElement('img', {
                src: movies.src,
                width: "250px",
                height: "300px"
            })
        )
    },
});

var MoviesList = React.createClass({
     render() {
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements),

            )
        )
    },
});

var element = 
    React.createElement(Movie, {key: movies.id},
    React.createElement(MovieTitle, {title: movies.title}),
    React.createElement(MovieDesc, {desc: movies.desc}),
    React.createElement(MovieSrc, {src: movies.src}),
    React.createElement(MoviesList, {})
);



ReactDOM.render(element, document.getElementById('app'));