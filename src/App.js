import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Aug 28th at 10:00am',
      reminder: true,
    },
    {
      id: 2,
      text: 'Job Meeting',
      day: 'Aug 30th at 9:00am',
      reminder: true,
    },
    {
      id: 3,
      text: 'The Gym',
      day: 'Aug 29th at 7:00am',
      reminder: false,
    },
  ]);
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
