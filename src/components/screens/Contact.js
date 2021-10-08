import React from "react";
import styled from "styled-components";

function Contact() {
	return (
		<>
			<ContactContainer>
				<ContactWRapper>
					<ContactLeft>
						<ContactH1>contact us</ContactH1>
						<Contacth3>
							free download landing page felcity hotel
						</Contacth3>
						<ContactPara>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Ab voluptas iste ad corrupti dolorum similique
							eos in quidem rerum illo?
						</ContactPara>
					</ContactLeft>
					<ContactForm>
						<FormInput type="text" placeholder="full name" />
						<FormInput type="email" placeholder="email" />
						<FormInput type="number" placeholder="phone number" />
						<Textarea
							placeholder="message"
							rows="4"
							cols="50"
						></Textarea>
						<FormButton type="button">send</FormButton>
					</ContactForm>
				</ContactWRapper>
			</ContactContainer>
		</>
	);
}

const ContactContainer = styled.section`
	background: #242423;
	padding: 5% 0;
`;
const ContactWRapper = styled.section`
	width: 80%;
	max-width: 1400px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	position: relative;
	@media all and (max-width: 980px) {
		flex-direction: column;
	}
`;
const ContactLeft = styled.div`
	width: 48%;
	text-transform: capitalize;
	@media all and (max-width: 980px) {
		width: 100%;
	}
`;
const ContactH1 = styled.h1`
	font-size: 60px;
	color: #fff;
	@media all and (max-width: 1280px) {
		font-size: 50px;
	}
	@media all and (max-width: 980px) {
		font-size: 40px;
	}
	@media all and (max-width: 480px) {
		font-size: 35px;
	}
`;
const Contacth3 = styled.h3`
	font-size: 40px;
	margin: 30px 0 25px;
	color: #fff;
	width: 70%;
	line-height: 55px;
	@media all and (max-width: 1440px) {
		width: 90%;
	}

	@media all and (max-width: 1280px) {
		font-size: 30px;
		line-height: 40px;
	}
	@media all and (max-width: 980px) {
		font-size: 26px;
	}
	@media all and (max-width: 480px) {
		font-size: 22px;
	}
`;
const ContactPara = styled.p`
	color: #fff;
	font-size: 25px;
	line-height: 40px;
	@media all and (max-width: 980px) {
		font-size: 20px;
	}
	@media all and (max-width: 480px) {
		font-size: 18px;
	}
`;
const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	background-color: #d75430;
	padding: 30px;
	border-radius: 20px;
	width: 45%;
	position: absolute;
	top: -75%;
	right: 0;
	height: 550px;
	@media all and (max-width: 1440px) {
		top: -45%;
	}
	@media all and (max-width: 1280px) {
		top: -35%;
	}
	@media all and (max-width: 980px) {
		position: static;
		width: 100%;
		margin-top: 60px;
	}
	@media all and (max-width: 480px) {
		height: 100%;
		padding: 20px;
	}
`;
const FormInput = styled.input`
	margin-bottom: 40px;
	padding: 18px;
	font-size: 23px;
	color: #474747;
	border-radius: 14px;
	text-transform: capitalize;
	@media all and (max-width: 480px) {
		margin-bottom: 20px;
		padding: 14px;
		font-size: 14px;
	}
`;
const Textarea = styled.textarea`
	padding: 14px;
	font-size: 20px;
	color: #474747;
	border-radius: 14px;
	margin-bottom: 30px;
	text-transform: capitalize;
`;
const FormButton = styled.button`
	background: #000;
	padding: 14px 36px;
	font-size: 20px;
	color: #fff;
	border-radius: 12px;
	transition: 0.3s ease-in-out;
	margin: 0 auto;
	text-transform: capitalize;

	&:hover {
		color: #fff;
		background-color: #ffee52;
		border-radius: 50px;
	}
`;

export default Contact;
