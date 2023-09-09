import ListGroup from './components/ListGroup';
import PropList from './components/PropList';

function App() {
  const day = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup />
      <PropList  items={day} heading="Select the day:" onSelectItem={handleSelectItem}/>
    </div>
  )
}

export default App;