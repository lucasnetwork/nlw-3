import styled from 'styled-components';

export default styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #37c77f;
	.content {
		display: flex;
		max-width: 1000px;
		.text {
			margin-right: 124px;
			display: flex;
			flex-direction: column;
			align-items: center;
			align-self: center;
			h1 {
				font-size: 80px;
			}
			p {
				margin-top: 32px;
				font-size: 24px;
				text-align: center;
			}
			button {
				margin-top: 60px;
				color: #ffffff;
				font-weight: 800;
				width: 243px;
				height: 64px;
				background: #31b272;
				border: none;
				border-radius: 20px;
				cursor: pointer;
				:hover {
					background: #3bd689;
				}
			}
		}
	}
`;
