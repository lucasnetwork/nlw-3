import styled from 'styled-components';

export default styled.button`
	height: 64px;
	background: #f5f8fa;
	border: 1px solid #d3e2e5;
	color: #5c8599;
	cursor: pointer;
	margin-top: 64px;

	width: 100%;
	height: 64px;
	border: 0;
	cursor: pointer;
	background: #3cdc8c;
	border-radius: 20px;
	color: #ffffff;
	font-weight: 800;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: background-color 0.2s;
	svg {
		margin-right: 16px;
	}
	:hover {
		background: #36cf82;
	}
`;
