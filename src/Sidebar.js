import React from "react";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";
import {Link} from 'react-scroll'

function Sidebar({isOpen,toggle}) {
	return (
		<>
			<MobileMenu isOpen={isOpen}>
				<CloseIcon onClick={toggle}/>
				<MobileMenuLinks onClick={toggle}>about</MobileMenuLinks>
				<MobileMenuLinks onClick={toggle}>contact us</MobileMenuLinks>
				<MobileMenuBtn onClick={toggle}>sign in</MobileMenuBtn>
			</MobileMenu>
		</>
	);
}

const MobileMenu = styled.div`
    height: 100vh;
    background-color: #d75430;
    padding: 70px 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    width: 100vw;
    position: absolute;
    top: ${({isOpen})=> isOpen ? 0 : '-1000px'};
    opacity: ${({isOpen})=> isOpen ? 1 : '0'};
    z-index: 10;
    transition: .4s ease-in;
    left: 0;
    justify-content: center;
`
const MobileMenuLinks = styled(Link)`
    font-size: 45px;
	cursor: pointer;
	color: #fff;
	transition: 0.3s ease-in-out;
    margin-bottom: 60px;

	&:hover {
		color: #2d2d2d;
	}
`
const MobileMenuBtn = styled.a`
    background-color: #fff;
	padding: 18px 35px;
	font-size: 18px;
	color: #2d2d2d;
	display: inline-block;
	border-radius: 50px;
	cursor: pointer;
    width: 30%;
	transition: 0.3s ease-in-out;
    margin: 0 auto;

	&:hover {
		color: #fff;
		background-color: #ffee52;
	}
    @media all and (max-width : 481px){
        width: 60%;
    }
`
const CloseIcon = styled(CgClose)`
    position: absolute;
    top: 30px;
    right: 30px;
    color: #fff;
    font-size: 50px;
`

export default Sidebar;
