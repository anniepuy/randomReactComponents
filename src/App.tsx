import ListGroup from './components/ListGroup';
import PropList from './components/PropList';

function App() {
  const day = [
    'Monday',
    'Tuesda',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return (
    <div>
      <ListGroup />
      <PropList  items={day} heading="Select the day:"/>
    </div>
  )
}

export default App;