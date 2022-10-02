import { BrowserRouter } from "react-router-dom";
import { WebRoutes } from "./Routes";
import { GlobalStyle } from "./style/globalStyle";

export function App() {
	return (
		<>
			<BrowserRouter>
				<WebRoutes />
			</BrowserRouter>
			<GlobalStyle />
		</>
	);
}