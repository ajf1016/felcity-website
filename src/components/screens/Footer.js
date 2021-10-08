import React from "react";
import styled from "styled-components";

function Footer() {
	return (
		<>
			<FooterContainer>
				<FooterWrapper>
					<FooterPara>
						copyright 2019 all right reserved by free html templates
					</FooterPara>
				</FooterWrapper>
			</FooterContainer>
		</>
	);
}

const FooterContainer = styled.section`
	padding: 1% 0;
	@media all and (max-width: 980px) {
        padding: 3% 0;
	}
`;
const FooterWrapper = styled.section`
	width: 80%;
	max-width: 1400px;
	margin: 0 auto;
	text-align: center;
	text-transform: capitalize;
`;
const FooterPara = styled.p`
	font-size: 18px;
	color: #2d2d2d;
    @media all and (max-width: 768px) {
        font-size: 14px;
	}
`;

export default Footer;
