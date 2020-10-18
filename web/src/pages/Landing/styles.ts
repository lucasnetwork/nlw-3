import styled from 'styled-components';
import landingImage from '../../images/landing.svg';

export default styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
	display: flex;
	justify-content: center;
	align-items: center;
	.content-wrapper {
		position: relative;
		width: 100%;
		max-width: 1100px;

		height: 100%;
		max-height: 600px;

		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: space-between;

		background: url(${landingImage}) no-repeat 80% center;

		.location {
			position: absolute;
			right: 0;
			top: 0;

			font-size: 24px;
			line-height: 24px;
			display: flex;
			flex-direction: column;
			text-align: right;
			strong {
				font-weight: 800;
			}
		}
		.enter-app {
			position: absolute;
			right: 0;
			bottom: 0;

			width: 80px;
			height: 80px;
			background: #ffd666;

			display: flex;
			align-items: center;
			justify-content: center;
			transition: background-color 0.2s;
			:hover {
				background: #96eeff;
			}
		}
		main {
			max-width: 350px;
			h1 {
				font-size: 76px;
				font-weight: 900;
				line-height: 70px;
			}
			p {
				margin-top: 40px;
				font-size: 24px;
				line-height: 34px;
			}
		}
	}
`;
