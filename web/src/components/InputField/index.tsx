import React from 'react';
import Container from './styles';

interface InputFieldProps {
	label: string;
	type: string;
	value: string;
	handleChange: (e: any) => any;
}

const InputField: React.FC<InputFieldProps> = ({
	label,
	type,
	value,
	handleChange,
}) => (
	<Container>
		<label htmlFor={label}>{label}</label>
		<input id={label} type={type} value={value} onChange={handleChange} />
	</Container>
);

export default InputField;
