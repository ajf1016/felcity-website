import "./App.css";
import About from "./components/screens/About";
import Contact from "./components/screens/Contact";
import Footer from "./components/screens/Footer";
import Home from "./components/screens/Home";
import Promote from "./components/screens/Promote";
import Testimonial from "./components/screens/Testimonial/Testimonial";

function App() {
	return (
		<>
			<Home />
			<Promote />
			<About />
			<Testimonial />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
