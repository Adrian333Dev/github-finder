import { Routes, Route } from 'react-router-dom';

import { Footer, Navbar } from './components/exports';
import { About, Home, NotFound } from './pages/export';
import { StyledContainer } from './styles';

const App = () => {
	return (
		<>
			<Navbar />
			<StyledContainer>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</StyledContainer>
			<Footer />
		</>
	);
};

export default App;
