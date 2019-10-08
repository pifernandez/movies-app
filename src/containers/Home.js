import React, { Component } from 'react'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import Modal from '../components/Modal/Modal'
import ContainerSection from '../components/ContainerSection/ContainerSection'
import Container from '../components/Container/Container'

class Home extends Component {
	state = {
		title: 'Home',
		isModalOpen: false,
		apiKey: 'e3087953b023a4a056fc42d81ebd595d',
		movies: [],
		nav: [
			{ label: 'Home', href: '/' },
			{ label: 'Popular', href: '/popular' },
			{ label: 'Top Rated', href: '/top' }
		]
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

	getMovies = (cat) => {
		fetch(`https://api.themoviedb.org/3/movie/${cat}?api_key=${this.state.apiKey}`)
			.then((res) => res.json())
			.then((res) => {
				this.setState({ movies: res.results })})
	}

	componentDidMount() {
		this.getMovies('top_rated')
	}

	render() {
		return (
			<React.Fragment>
				<Header>
					<NavBar data={this.state.nav} />
				</Header>
				<Container>
					<ContainerSection title={this.state.nav}/>
					<ContainerSection title={this.state.nav}/>
				</Container>
				
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<p>'Modal'</p>
				</Modal>
			</React.Fragment>
		)
	}
}
/*
<ContainerSection title={'Top Rated'}/>
*/

export default Home
