import React, { FunctionComponent } from 'react';
import logoHappy from '../../images/logoHappy.svg';

import Container from './styles';

const Login: FunctionComponent = ({ children }) => {
	return (
		<Container>
			<div className="logo-container">
				<div className="logo">
					<img src={logoHappy} alt="logo" />
				</div>
				<div className="logo-text">
					<p>Rio do Sul Santa Catarina</p>
				</div>
			</div>
			<div className="text">{children}</div>
		</Container>
	);
};

export default Login;
