import ListGroup from './components/ListGroup';
import PropList from './components/PropList';
import Alert from './components/Alert';

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
      <Alert text="Hello World"/>
      <ListGroup />
      <PropList  items={day} heading="Select the day:" onSelectItem={handleSelectItem}/>
    </div>
  )
}

export default App;