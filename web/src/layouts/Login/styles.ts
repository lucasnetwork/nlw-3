import styled from 'styled-components';

export default styled.div`
	display: grid;
	grid-template-columns:
		1fr
		minmax(360px, 520px);
	width: 100vw;
	height: 100vh;
	.text {
		background: #ffffff;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.logo-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
		.logo {
			margin-bottom: 100px;
		}
		.logo-text {
			max-width: 161px;
			p {
				text-align: center;
			}
		}
	}
`;
