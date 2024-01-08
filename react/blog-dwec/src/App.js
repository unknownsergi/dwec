import "./App.css";
import Navbar from "./Navbar";
import Inicio from "./Inicio";

function App() {
	const titulo = "Bienvenido a la nueva app de React";
	const likes = 50;
	const link = "https://www.google.com";

	return (
		<div className="App">
			<Navbar />
			<div className="content">
				<Inicio />
				<h1>{titulo}</h1>
				<p>likes : {likes}</p>
				<a href={link}>mecachis</a>
				<p>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}</p>
				<p>un fucking numero random panzon : {Math.random() * 7.9}</p>
			</div>
		</div>
	);
}

export default App;
