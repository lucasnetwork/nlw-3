import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { useHistory } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';
import Container, { ButtonConfirm, FormContainer, InputBlock } from './styles';

export default function CreateOrphanage() {
	const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
	const [name, setName] = useState('');
	const [about, setAbout] = useState('');
	const [instructions, setInstructions] = useState('');
	const [images, setImages] = useState<File[]>([]);
	const [opening_hours, setOpening_hours] = useState('');
	const [open_on_weekends, setOpen_on_weekends] = useState(true);
	const [previewImages, setPreviewImages] = useState<string[]>([]);

	const history = useHistory();

	function handleMapClick(event: LeafletMouseEvent) {
		const { lat: latitude, lng: longitude } = event.latlng;
		setPosition({ latitude, longitude });
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();

		const { latitude, longitude } = position;
		const data = new FormData();

		data.append('latitude', String(latitude));
		data.append('longitude', String(longitude));
		data.append('name', name);
		data.append('about', about);
		data.append('instructions', instructions);
		data.append('open_on_weekends', String(open_on_weekends));
		data.append('opening_hours', opening_hours);
		images.forEach((image) => {
			data.append('images', image);
		});

		await api.post('orphanages', data);

		alert('cadastro feito com sucesso');

		history.push('/app');
	}

	function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
		if (!event.target.files) {
			return;
		}
		const selectedImages = Array.from(event.target.files);
		setImages([...images, ...selectedImages]);

		const selectedImagesPreview = selectedImages.map((image) => {
			return URL.createObjectURL(image);
		});
		setPreviewImages([...previewImages, ...selectedImagesPreview]);
	}
	return (
		<Container id="page-create-orphanage">
			<Sidebar />

			<main>
				<FormContainer onSubmit={handleSubmit}>
					<fieldset>
						<legend>Dados</legend>

						<Map
							center={[-20.5359768, -54.6180158]}
							style={{ width: '100%', height: 280 }}
							zoom={15}
							onClick={handleMapClick}
						>
							<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
							{position.latitude !== 0 && (
								<Marker
									interactive={false}
									icon={mapIcon}
									position={[position.latitude, position.longitude]}
								/>
							)}
							;
						</Map>

						<InputBlock>
							<label htmlFor="name">Nome</label>
							<input
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</InputBlock>

						<InputBlock>
							<label htmlFor="about">
								Sobre <span>Máximo de 300 caracteres</span>
							</label>
							<textarea
								id="about"
								value={about}
								onChange={(e) => setAbout(e.target.value)}
								maxLength={300}
							/>
						</InputBlock>

						<InputBlock>
							<label htmlFor="images">Fotos</label>

							<div className="image-container">
								{previewImages.map((image) => (
									<img key={image} src={image} alt={name} />
								))}
								<label htmlFor="image[]" className="new-image">
									<FiPlus size={24} color="#15b6d6" />
								</label>
							</div>
							<input
								multiple
								onChange={handleSelectImages}
								type="file"
								id="image[]"
							/>
						</InputBlock>
					</fieldset>

					<fieldset>
						<legend>Visitação</legend>

						<InputBlock>
							<label htmlFor="instructions">Instruções</label>
							<textarea
								id="instructions"
								value={instructions}
								onChange={(e) => setInstructions(e.target.value)}
							/>
						</InputBlock>

						<InputBlock>
							<label htmlFor="opening_hours">Horário de funcionamento</label>
							<input
								id="opening_hours"
								value={opening_hours}
								onChange={(e) => setOpening_hours(e.target.value)}
							/>
						</InputBlock>

						<InputBlock>
							<label htmlFor="open_on_weekends">Atende fim de semana</label>

							<div className="button-select">
								<button
									type="button"
									className={open_on_weekends ? 'active' : ''}
									onClick={() => setOpen_on_weekends(true)}
								>
									Sim
								</button>
								<button
									onClick={() => setOpen_on_weekends(false)}
									type="button"
									className={!open_on_weekends ? 'active' : ''}
								>
									Não
								</button>
							</div>
						</InputBlock>
					</fieldset>

					<ButtonConfirm className="confirm-button" type="submit">
						Confirmar
					</ButtonConfirm>
				</FormContainer>
			</main>
		</Container>
	);
}
