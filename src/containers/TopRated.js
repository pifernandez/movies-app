import React, { Component } from 'react'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import Modal from '../components/Modal/Modal'
import Movies from '../components/Movies/Movies'
import MoviesHeader from '../components/MoviesHeader/MoviesHeader'
import ContainerTitle from '../components/ContainerTitle/ContainerTitle'
import Container from '../components/Container/Container'

class TopRated extends Component {
    state = {
        title: 'Top Rated',
        isModalOpen: false,
        apiKey: 'e3087953b023a4a056fc42d81ebd595d',
        currentPage: 1,
        totalResults: null,
        totalPages: null,
        movies: [],
        nav: [
            { label: 'Home', href: '/' },
            { label: 'Top Rated', href: '/top' },
            { label: 'Popular', href: '/popular' }
        ]
    }

    nextPage = () => {
        if(this.state.totalPages !== this.state.currentPage){
            this.setState({ currentPage: this.state.currentPage += 1 })
            this.getMovies()
        }
    }

    previousPage = () => {
        if(this.state.currentPage !== 1){
            this.setState({ currentPage: this.state.currentPage -= 1 })
            this.getMovies()
        }
    }
    
    changeTitle = (newtitle) => {
        this.setState({ title: newtitle })
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    setMovie = (str) => {
        this.setState({ currentMovie: str })
        this.toggleModal()
    }

    getMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.state.apiKey}&page=${this.state.currentPage}`)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ totalResults: res.total_results })
                this.setState({ totalPages: res.total_pages })
                this.setState({ movies: res.results })})
    }

    componentDidMount() {
        this.getMovies()
    }

    render() {
        return (
            <React.Fragment>
                <Header>
                    <NavBar data={this.state.nav} />
                </Header>
                <Container>
                    <ContainerTitle title={this.state.title} results={this.state.totalResults}/>
                    <MoviesHeader page={this.state.currentPage} total={this.state.totalPages} previous={this.previousPage} next={this.nextPage}/>
                    <Movies movies={this.state.movies}/>
                </Container>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <p>'Modal'</p>
                </Modal>
            </React.Fragment>
        )
    }
}

export default TopRated
