import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import logoDelete from '../../images/logoDelete.svg';
import Container from './styles';

interface ParamsProps {
	name: string;
}

const Delete = () => {
	const history = useHistory();
	const params = useParams() as ParamsProps;
	return (
		<Container>
			<div className="content">
				<div className="text">
					<h1>Excluir!</h1>
					<p>Você exluiu {params.name} </p>
					<button type="button" onClick={() => history.push('/app')}>
						Voltar para o mapa
					</button>
				</div>
				<div>
					<img src={logoDelete} alt="logo de exclusão" />
				</div>
			</div>
		</Container>
	);
};

export default Delete;
