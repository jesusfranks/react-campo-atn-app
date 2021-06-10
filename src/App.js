import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavComponent } from './components/NavComponent';
import { InterviewForm } from './components/InterviewForm';


function App() {
  return (
    <div >
      <NavComponent />
      <InterviewForm />
    </div>
  );
}

export default App;
