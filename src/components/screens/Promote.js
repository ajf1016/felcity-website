import React from "react";
import styled from "styled-components";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

function Promote() {
	return (
		<>
			<PromoteContainer>
				<PromoteWrapper>
					<PromoteTop>
						<PromoteLeft>
							<PromoteHeading>
								choose the perfect
								<HeadingSpan> accommodation</HeadingSpan>
							</PromoteHeading>
							<PromotePara>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Perspiciatis itaque, mollitia
								ex distinctio tenetur quidem voluptas blanditiis
								velit corrupti impedit, autem commodi sint
								laudantium, tempora debitis saepe. Fugiat, et
								eum!
							</PromotePara>
							<PromoteBtn>see more</PromoteBtn>
						</PromoteLeft>
						<PromoteRight>
							<ImgDiv>
								<PromoteImg src={img1} />
							</ImgDiv>
							<ImgDiv>
								<PromoteImg src={img2} />
							</ImgDiv>
							<ImgDiv>
								<PromoteImg src={img3} />
							</ImgDiv>
						</PromoteRight>
					</PromoteTop>
					<PromoteBottom>
						<PromoteLeft className="bottom">
							<PromoteHeading>
								choose the perfect
								<HeadingSpan> accommodation</HeadingSpan>
							</PromoteHeading>
							<PromotePara>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Perspiciatis itaque, mollitia
								ex distinctio tenetur quidem voluptas blanditiis
								velit corrupti impedit, autem commodi sint
								laudantium, tempora debitis saepe. Fugiat, et
								eum!
							</PromotePara>
							<PromoteBtn>see more</PromoteBtn>
						</PromoteLeft>
						<PromoteRight>
							<ImgDiv className="bottom-img-wrap">
								<PromoteImg src={img4} />
							</ImgDiv>
						</PromoteRight>
					</PromoteBottom>
				</PromoteWrapper>
			</PromoteContainer>
		</>
	);
}

const PromoteContainer = styled.section`
	padding: 6% 0;
`;
const PromoteWrapper = styled.section`
	width: 80%;
	max-width: 1400px;
	margin: 0 auto;
`;
const PromoteTop = styled.div`
	text-transform: capitalize;
	align-items: center;
	display: flex;
	@media all and (max-width: 768px) {
		flex-direction: column;
	}
`;
const PromoteBottom = styled.div`
	text-transform: capitalize;
	align-items: center;
	display: flex;
	flex-direction: row-reverse;
	margin-top: 100px;
	@media all and (max-width: 768px) {
		flex-direction: column;
	}
`;
const PromoteLeft = styled.div`
	width: 48%;
	margin-right: 3%;
	text-align: left;
	&.bottom {
		text-align: right;
		margin-right: 0;
		margin-left: 6%;
		@media all and (max-width: 768px) {
			margin-right: 0;
			margin-left: 0;
		}
	}
	@media all and (max-width: 768px) {
		width: 100%;
		margin-right: 0;
		margin-bottom: 100px;
	}
`;
const PromoteHeading = styled.h1`
	font-size: 50px;
	font-weight: 400;
	@media all and (max-width: 1280px) {
		font-size: 40px;
	}
	@media all and (max-width: 980px) {
		font-size: 30px;
	}
`;
const HeadingSpan = styled.span`
	font-weight: bolder;
`;
const PromotePara = styled.p`
	font-size: 25px;
	margin: 30px 0;
	line-height: 42px;
	@media all and (max-width: 980px) {
		font-size: 20px;
		line-height: 30px;
	}
	@media all and (max-width: 480px) {
		font-size: 18px;
	}
`;
const PromoteBtn = styled.button`
	background: #2d2d2d;
	padding: 14px 22px;
	font-size: 20px;
	color: #fff;
	border-radius: 12px;
	width: 20%;
	transition: 0.3s ease-in-out;

	&:hover {
		color: #fff;
		background-color: #ffee52;
		border-radius: 50px;
	}
	@media all and (max-width: 1440px) {
		width: 40%;
	}
	@media all and (max-width: 980px) {
		width: 50%;
	}
	@media all and (max-width: 480px) {
		padding: 10px 20px;
		border-radius: 14px;
		font-size: 18px;
		margin-top: 30px;
	}
`;
const PromoteRight = styled.div`
	width: 48%;
	display: flex;
	flex-wrap: wrap;
	@media all and (max-width: 768px) {
		width: 100%;
	}
`;
const ImgDiv = styled.div`
	margin-bottom: 4%;
	width: 48%;
	&:first-child {
		width: 100%;
	}
	&:last-child {
		margin-left: 4%;
	}
	&.bottom-img-wrap {
		margin: 0;
	}
`;
const PromoteImg = styled.img`
	width: 100%;
	display: inline-block;
`;

export default Promote;
