import styled, { keyframes } from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
	width: 45%;
	height: 50%;
	padding: 1.5%;
	border-radius: 10px;
	box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
	box-size: border-box;
	border-top: 5px solid hsl(212, 86%, 64%);
	display: flex;
	justify-content: center;
	align-items: center;
`;
const WashingImage = styled.img`
	width: 30%;
`;
const WashingInfo = styled.div`
	width: 50%;
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	gap: 10px;
`;
const Status = styled.div`
	border: 0;
	text-decoration: none;
	font-size: 17px;
	letter-spacing: 1px;
	text-transform: uppercase;
	padding: 16px;
	font-weight: bold;
	border-radius: 50px;
	background-color: hsl(212, 86%, 95%);
	color: hsl(212, 86%, 64%);
	margin-bottom: 15px;
`;
const Title = styled.h2`
	font-size: 25px;
	font-weight: 700;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: hsl(212, 86%, 30%);
`;
const Text = styled.h2`
	font-size: 18px;
	letter-spacing: 1px;
	text-transform: uppercase;
`;
const WashingMachine = () => {
	return (
		<Wrapper>
			<WashingImage src="https://svgur.com/i/gLd.svg"></WashingImage>
			<WashingInfo>
				<Title>Washing Machine 1</Title>
				<Status>Status: In use</Status>
				<Text>User: Nguyen Duc Thanh</Text>
				<Text>Elapsed Time: </Text>
			</WashingInfo>
		</Wrapper>
	);
};

export default WashingMachine;
