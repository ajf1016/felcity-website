import React from "react";
import qoute from "../../assets/images/te1.png";
import "./Testimonial.css";
import Slider from "react-slick";
import banner from "../../assets/images/tes_bg.jpg";

function Testimonial() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};
	return (
		<>
			<section
				id="testimonial"
				style={{
					backgroundImage: `url(${banner})`,
				}}
			>
				<section className="wrapper">
					<div className="heading">
						<h1>testimonial1</h1>
					</div>
					<div className="slider-container">
						<div className="container">
							<Slider {...settings}>
								<div className="slide-item">
									<h1>mark jonson</h1>
									<span>
										<img src={qoute} alt="" />
									</span>
									<p>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Quo accusantium, eaque
										incidunt itaque neque at repellendus aut
										aliquid labore impedit.
									</p>
								</div>
								<div className="slide-item">
									<h1>
										<h1>Mark jonson</h1>
									</h1>
									<span>
										<img src={qoute} alt="" />
									</span>
									<p>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Quo accusantium, eaque
										incidunt itaque neque at repellendus aut
										aliquid labore impedit.
									</p>
								</div>
								<div className="slide-item">
									<h1>
										<h1>Mark jonson</h1>
									</h1>
									<span>
										<img src={qoute} alt="" />
									</span>
									<p>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Quo accusantium, eaque
										incidunt itaque neque at repellendus aut
										aliquid labore impedit.
									</p>
								</div>
								<div className="slide-item">
									<h1>
										<h1>Mark jonson</h1>
									</h1>
									<span>
										<img src={qoute} alt="" />
									</span>
									<p>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Quo accusantium, eaque
										incidunt itaque neque at repellendus aut
										aliquid labore impedit.
									</p>
								</div>
								<div className="slide-item">
									<h1>
										<h1>Mark jonson</h1>
									</h1>
									<span>
										<img src={qoute} alt="" />
									</span>
									<p>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Quo accusantium, eaque
										incidunt itaque neque at repellendus aut
										aliquid labore impedit.
									</p>
								</div>
								<div className="slide-item">
									<h1>
										<h1>Mark jonson</h1>
									</h1>
									<span>
										<img src={qoute} alt="" />
									</span>
									<p>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Quo accusantium, eaque
										incidunt itaque neque at repellendus aut
										aliquid labore impedit.
									</p>
								</div>
							</Slider>
						</div>
					</div>
				</section>
			</section>
		</>
	);
}

export default Testimonial;
