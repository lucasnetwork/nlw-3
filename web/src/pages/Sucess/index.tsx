import React from 'react';
import { useHistory } from 'react-router-dom';
import logoSucess from '../../images/logoSucess.svg';
import Container from './styles';

const Sucess = () => {
	const history = useHistory();
	return (
		<Container>
			<div className="content">
				<div className="text">
					<h1>Ebaaa!</h1>
					<p>
						O cadastro deu certo e foi enviado ao administrador para ser
						aprovado. Agora é só esperar :)
					</p>
					<button type="button" onClick={() => history.push('/app')}>
						Voltar para o mapa
					</button>
				</div>
				<div>
					<img src={logoSucess} alt="logo de sucesso" />
				</div>
			</div>
		</Container>
	);
};

export default Sucess;
