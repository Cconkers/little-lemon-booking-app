import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Menu />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
