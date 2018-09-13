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


var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render() {

        var movie = this.props.movie;

        return React.createElement('li', {},
                React.createElement(MovieTitle, {title: movie.title}),
                React.createElement(MovieDesc, {desc: movie.desc}),
                React.createElement(MovieSrc, {src: movie.src})
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },
    render() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string
    },
    render() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    },
});

var MovieSrc = React.createClass({
    propTypes: {
        src: React.PropTypes.string
    },
    render() {
        return (
            React.createElement('img', {
                src: this.props.src,
                width: "250px",
                height: "300px"
            })
        )
    },
});

var MoviesList = React.createClass({
    render() {
        return React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('ul', {}, moviesElements)
        )
    },
});

var moviesElements = movies.map(function (movie) {
    return React.createElement(Movie, {key: movie.id, movie: movie})
});



ReactDOM.render(React.createElement(MoviesList), document.getElementById('app'));