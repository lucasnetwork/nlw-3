import styled from 'styled-components';

export default styled.div`
	display: grid;
	grid-template-columns:
		1fr
		520px max-content;
	width: 100vw;
	height: 100vh;
	.logo-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
	}
	.logo {
		margin-bottom: 100px;
	}
	.logo-text {
		max-width: 161px;
		p {
			text-align: center;
		}
	}
`;
