import CardComponent from './components/CardComponent';
import CarouselComponent from './components/CarouselComponent';
import Navbar from './components/NavbarComponent';
import ReservationForm from './components/ReservationForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <div className="bg-dark-subtle">
       <Navbar/>
       <CarouselComponent/>
       <CardComponent/>
       <ReservationForm/>
    </div>
  );
}

export default App;