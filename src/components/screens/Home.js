import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import banner from "../assets/images/banner.jpg";
import { Link } from "react-scroll";
import Sidebar from "../../Sidebar";

function Home() {
	const [isOpen, setIsOpen] = useState(false);
	function toggle() {
		setIsOpen(!isOpen);
	}
	return (
		<>
			<HomeContainer>
				<Navbar toggle={toggle} />
				<Sidebar toggle={toggle} isOpen={isOpen} />
				<HomeWrapper>
					<HomeContent>
						<HomeH1>
							welcome to hotel felcity landing page
							<HomeHeadSpan>2019</HomeHeadSpan>
						</HomeH1>
						<HomePara>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. In, suscipit laboriosam dolorum fuga
							blanditiis eum eveniet. Unde reiciendis odio autem
							sunt in, quidem quos molestias voluptas.
						</HomePara>
						<HomeBtn to='/'>read more</HomeBtn>
					</HomeContent>
					<HomeBottomBar>
						<FormConatainer>
							<InputWrap>
								<Label htmlFor="arive-date">arrival date</Label>
								<Input
									id="arive-date"
									name="arrivel_date"
									type="date"
								/>
							</InputWrap>
							<InputWrap>
								<Label htmlFor="dep-date">departure date</Label>
								<Input
									id="dep-date"
									name="departure_date"
									type="date"
								/>
							</InputWrap>
							<InputWrap>
								<Label htmlFor="persone">person</Label>
								<Input
									id="persone"
									name="persone_count"
									type="number"
								/>
							</InputWrap>
							<FormBtn type="button">book now</FormBtn>
						</FormConatainer>
					</HomeBottomBar>
				</HomeWrapper>
			</HomeContainer>
		</>
	);
}

const HomeContainer = styled.div`
	background: url(${banner}) no-repeat;
	background-size: cover;
	height: 100vh;
	@media all and (max-width: 1050px) {
		height: 100%;
		padding-bottom: 100px;
	}
`;
const HomeWrapper = styled.div`
	width: 80%;
	max-width: 1400px;
	margin: 0 auto;
	position: relative;
	height: calc(100vh - 180px);
	@media all and (max-width: 1050px) {
		height: 100%;
	}
`;
const HomeContent = styled.div`
	text-align: center;
	padding-top: 80px;
	@media all and (max-width: 1640px) {
		padding-top: 0;
	}
`;
const HomeH1 = styled.h1`
	font-size: 70px;
	width: 60%;
	margin: 0 auto;
	font-family: "Inter", sans-serif;
	color: #fff;
	@media all and (max-width: 1440px) {
		font-size: 60px;
	}
	@media all and (max-width: 1050px) {
		width: 85%;
	}
	@media all and (max-width: 768px) {
		width: 100%;
	}
	@media all and (max-width: 640px) {
		font-size: 45px;
	}
	@media all and (max-width: 480px) {
		font-size: 30px;
	}
`;
const HomeHeadSpan = styled.span``;
const HomePara = styled.p`
	font-size: 28px;
	margin: 35px 0 45px;
	color: #fff;

	@media all and (max-width: 1440px) {
		font-size: 26px;
		margin: 30px 0 40px;
	}
	@media all and (max-width: 480px) {
		font-size: 18px;
	}
`;
const HomeBtn = styled(Link)`
	background: #fff;
	padding: 15px 28px;
	border-radius: 14px;
	font-size: 25px;
	color: #2d2d22;
	display: inline-block;
	transition: 0.3s ease-in-out;

	&:hover {
		color: #fff;
		background-color: #ffee52;
		border-radius: 50px;
	}
	@media all and (max-width: 480px) {
		font-size: 20px;
		padding: 10px 20px;
		border-radius: 14px;
		font-size: 18px;
	}
`;
const HomeBottomBar = styled.div`
	width: 100%;
	position: absolute;
	bottom: -3px;
	left: 0;
	background: #fff;
	border-top-left-radius: 50px;
	border-top-right-radius: 50px;
	padding: 2% 6% 1%;
	@media all and (max-width: 1050px) {
		border-radius: 20px;
		position: static;
		bottom: 0;
		margin-top: 50px;
		padding: 6%;
	}
`;
const FormConatainer = styled.form`
	display: flex;
	width: 100%;
	max-width: 1800px;
	margin: 0 auto;
	/* justify-content: space-between; */
	text-transform: capitalize;
	align-items: flex-end;
	@media all and (max-width: 1051px) {
		flex-direction: column;
		align-items: center;
		text-align: left;
	}
`;
const InputWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 26%;
	margin-right: 2%;
	&:last-child {
		margin-right: 0;
	}
	@media all and (max-width: 1051px) {
		width: 100%;
		margin-right: 0;
		margin-bottom: 3%;
		&:last-child {
			margin-bottom: 0;
		}
	}
`;
const Label = styled.label`
	text-transform: uppercase;
	margin-bottom: 20px;
	padding-left: 15px;
	font-size: 20px;
	font-weight: 600;
	color: #8f8f8f;
	@media all and (max-width: 480px) {
		font-size: 15px;
	}
`;
const Input = styled.input`
	border-radius: 50px;
	padding: 20px;
	font-size: 18px;
	background: #dddddd;
	appearance: none;
	@media all and (max-width: 1051px) {
		border-radius: 20px;
	}
	@media all and (max-width: 480px) {
		padding: 15px;
	}
`;
const FormBtn = styled.button`
	background: #2d2d2d;
	padding: 14px 22px;
	font-size: 20px;
	color: #fff;
	border-radius: 12px;
	transition: 0.3s ease-in-out;

	&:hover {
		color: #fff;
		background-color: #ffee52;
		border-radius: 50px;
	}
	@media all and (max-width: 1280px) {
		padding: 15px;
	}
	@media all and (max-width: 480px) {
		font-size: 20px;
		padding: 10px 20px;
		border-radius: 14px;
		font-size: 18px;
		margin-top: 30px;
	}
`;

export default Home;
