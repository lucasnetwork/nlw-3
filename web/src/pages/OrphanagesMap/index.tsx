import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMakerImg from '../../images/mapmake.svg';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';
import Container, { Header } from './styles';

interface Orphanage {
	id: number;
	latitude: number;
	longitude: number;
	name: string;
}

function OrphanagesMap() {
	const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

	useEffect(() => {
		async function getOrphanages() {
			const response = await api.get('orphanages');
			setOrphanages(response.data);
		}

		getOrphanages();
	}, []);
	return (
		<Container>
			<Header>
				<header>
					<img src={mapMakerImg} alt="map" />

					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas criancas estao esperando a sua visita :)</p>
				</header>

				<footer>
					<strong>Rio do Sul</strong>
					<span>Santa catarina</span>
				</footer>
			</Header>
			<Map
				center={[-20.5359768, -54.6180158]}
				zoom={15}
				style={{
					width: '100%',
					height: '100%',
				}}
			>
				<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				{orphanages.map((orphanage) => (
					<Marker
						key={orphanage.id}
						icon={mapIcon}
						position={[orphanage.latitude, orphanage.longitude]}
					>
						<Popup
							closeButton={false}
							minWidth={240}
							maxWidth={240}
							className="map-popup"
						>
							{orphanage.name}
							<Link to={`orphanages/${orphanage.id}`}>
								<FiArrowRight size={20} color="#fff" />
							</Link>
						</Popup>
					</Marker>
				))}
			</Map>
			<Link to="orphanages/create" className="create-orphanage">
				<FiPlus size={32} color="#fff" />
			</Link>
		</Container>
	);
}

export default OrphanagesMap;
