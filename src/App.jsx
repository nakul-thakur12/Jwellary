import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoutesConfig from './RoutesConfig';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow">
          <RoutesConfig />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;