// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.module.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// Componente principal
const App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
