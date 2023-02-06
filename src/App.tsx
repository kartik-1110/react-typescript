import './App.css';
import { Greet } from './components/Greet';
import { Header } from './components/Header';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Princess",
      last: "Diana"
    }
  ]
  return (
    <div className="App">
      {/* <Greet name= 'Kartik' messageCount={20} 
      isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names ={nameList}/> */}
      <Status status='loading' />
      <Oscar>
        <Header>The oscar goes to Leonardo Di Caprio!!</Header>
      </Oscar>
    </div>
  );
}

export default App;


// video progress - 6 event props
