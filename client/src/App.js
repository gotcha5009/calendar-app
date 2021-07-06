import { Container } from 'react-bootstrap';

import Calendar from './components/Calendar';
import AppBar from './components/AppBar';
import AddEventModal from './components/AddEventModal';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container fluid="lg">
      <div className="App">
        <AppBar />
        <Calendar />
        <AddEventModal />
      </div>
    </Container>
  );
};

export default App;
