import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;
	label {
		font-family: Nunito;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;

		color: #8fa7b3;
		margin-bottom: 8px;
	}
	input {
		width: 360px;
		height: 64px;
		background: #f5f8fa;
		border: 1px solid #d3e2e5;
		box-sizing: border-box;
		border-radius: 20px;
		color: #5c8599;
		padding: 21px 0 21px 21px;
	}
	& + div {
		margin-top: 16px;
	}
`;
