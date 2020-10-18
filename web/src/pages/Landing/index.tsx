import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Container from './styles';

function Landing() {
	return (
		<Container>
			<div className="content-wrapper">
				<img src={logo} alt="logo" />

				<main>
					<h1>Leve felicidade para o mundo</h1>
					<p>Visite Orfanatos e mude o dia de muitas crianças</p>
				</main>
				<div className="location">
					<strong>Rio do Sul</strong>
					<span>Santa Catarina</span>
				</div>

				<Link to="/app" className="enter-app">
					<FiArrowRight size={26} color="rgba(0,0,0,.6)" />
				</Link>
			</div>
		</Container>
	);
}
export default Landing;
