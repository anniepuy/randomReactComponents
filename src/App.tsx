import ListGroup from './components/ListGroup';
import PropList from './components/PropList';
import Alert from './components/Alert';
import Button from './components/Button';

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
      <Button>My Button</Button>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ListGroup />
      <PropList  items={day} heading="Select the day:" onSelectItem={handleSelectItem}/>
    </div>
  )
}

export default App;