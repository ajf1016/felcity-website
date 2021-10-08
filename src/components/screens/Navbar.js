import React from "react";
import styled from "styled-components";
import logoImg from "../assets/images/logo.png";
import { Link } from "react-scroll";
import { HiMenuAlt3 } from "react-icons/hi";


function Navbar({toggle}) {
	return (
		<>
			<HeaderContainer>
				<HeaderWrapper>
					<HeaderLeft>
						<HeaderLogoContainer>
							<HeaderLogo>
								<LogoImg src={logoImg} />
							</HeaderLogo>
						</HeaderLogoContainer>
					</HeaderLeft>
					<HeaderRight>
						<HeaderNavLinks>about</HeaderNavLinks>
						<HeaderNavLinks>contact us</HeaderNavLinks>
						<HeaderNavBtn>sign in</HeaderNavBtn>
					</HeaderRight>
					<MobileOpenIcon onClick={toggle}>
						<HiMenuAlt3 />
					</MobileOpenIcon>
					
				</HeaderWrapper>
			</HeaderContainer>
		</>
	);
}

const HeaderContainer = styled.div`
	padding: 60px 0;
	background: transparent;
`;
const HeaderWrapper = styled.div`
	width: 80%;
	max-width: 1400px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const HeaderLeft = styled.div`
	width: 55%;
	@media all and (max-width: 1280px) {
		width: 40%;
	}
`;
const HeaderLogoContainer = styled.h1`
	width: 20%;
	@media all and (max-width: 1280px) {
		width: 35%;
	}
	@media all and (max-width: 768px) {
		width: 60%;
	}
    @media all and (max-width: 481px) {
		width: 80%;
	}
`;
const HeaderLogo = styled(Link)`
	width: 100%;
	display: inline-block;
`;
const LogoImg = styled.img`
	display: inline-block;
	width: 100%;
`;
const HeaderRight = styled.div`
	display: flex;
	justify-content: space-between;
	width: 45%;
	text-align: right;
	align-items: center;
	text-transform: uppercase;
	@media all and (max-width: 1280px) {
		width: 60%;
	}
	@media all and (max-width: 768px) {
		display: none;
	}
`;
const HeaderNavLinks = styled(Link)`
	font-size: 22px;
	cursor: pointer;
	color: #fff;
	transition: 0.3s ease-in-out;

	&:hover {
		color: #2d2d2d;
	}

	@media all and (max-width: 980px) {
		font-size: 18px;
		margin-right: 15px;
	}
`;
const HeaderNavBtn = styled(Link)`
	background-color: #fff;
	padding: 18px 35px;
	font-size: 18px;
	color: #2d2d2d;
	display: inline-block;
	border-radius: 50px;
	margin-left: 50px;
	cursor: pointer;

	transition: 0.3s ease-in-out;

	&:hover {
		color: #fff;
		background-color: #ffee52;
	}
	@media all and (max-width: 980px) {
		padding: 16px 25px;
		margin-left: 0;
	}
`;
const MobileOpenIcon = styled.div`
	display: none;
	@media all and (max-width: 768px) {
		display: block;
		color: #fff;
		font-size: 40px;
	}
`;


export default Navbar;
