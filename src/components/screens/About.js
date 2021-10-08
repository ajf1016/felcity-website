import React from "react";
import styled from "styled-components";
import aboutImg from '../assets/images/about_img.jpg' 

function About() {
	return (
		<>
			<AboutContainer>
				<AboutWrapper>
					<AboutLeft>
						<AboutHeading>about our hotel</AboutHeading>
						<AboutPara>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Officia, quis facilis sit nulla voluptatum
							quasi iure voluptas voluptatem beatae? Odio esse
							repellendus minima quia, atque culpa minus eaque
							eos. Amet.
						</AboutPara>
					</AboutLeft>
					<AboutRight>
						<AboutImg src={aboutImg}/>
					</AboutRight>
				</AboutWrapper>
			</AboutContainer>
		</>
	);
}

const AboutContainer = styled.section`
    padding: 5% 0;
    background: #353E4E;
	text-transform: capitalize;
`
const AboutWrapper = styled.section`
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
	@media all and (max-width : 768px){
		flex-direction: column;
	}
`
const AboutLeft = styled.div`
    width: 50%;
	@media all and (max-width : 768px){
		width: 100%;
		margin-bottom: 50px;
	}
`
const AboutHeading = styled.h1`
    font-size: 50px;
    font-weight: 600;
    color: #fff;
	@media all and (max-width : 1050px){
		font-size: 40px;
	}
	@media all and (max-width : 980px){
		font-size: 35px;
	}
	@media all and (max-width : 480px){
		font-size: 30px;
	}
`
const AboutPara = styled.p`
    margin: 30px 0 0;
    color: #fff;
    font-size: 25px;
    line-height: 40px;
	@media all and (max-width : 1050px){
		font-size: 20px;
		line-height: 30px;
	}
	@media all and (max-width : 980px){
		font-size: 18px;
	}
`
const AboutRight = styled.div`
   width: 50%;
   @media all and (max-width : 768px){
		width: 100%;
	}
`
const AboutImg = styled.img`
    display: inline-block;
    width: 100%;

`

export default About;
