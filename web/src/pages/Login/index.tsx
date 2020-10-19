import React, { useState } from 'react';
import LoginLayout from '../../layouts/Login';
import InputField from '../../components/InputField';
import Container from './styles';
import ButtonConfirm from '../../components/ButtonConfirm';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<LoginLayout>
			<Container>
				<h1>Fazer Login</h1>
				<form>
					<InputField
						label="E-mail"
						type="email"
						value={email}
						handleChange={(e: React.FormEvent<HTMLInputElement>) =>
							setEmail(e.currentTarget.value)
						}
					/>
					<InputField
						label="Senha"
						type="password"
						value={password}
						handleChange={(e: React.FormEvent<HTMLInputElement>) =>
							setPassword(e.currentTarget.value)
						}
					/>
					<ButtonConfirm>Entrar</ButtonConfirm>
				</form>
			</Container>
		</LoginLayout>
	);
};

export default Login;
