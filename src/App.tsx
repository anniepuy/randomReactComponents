import { useState } from "react";
import ListGroup from './components/ListGroup';
import PropList from './components/PropList';
import Alert from './components/Alert';
import Button from './components/Button';
import Icon from './components/Icon';
import Name from './components/Name';

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

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Name />
      <Icon />
      <Button onClick ={() => setAlertVisibility(true)}>My Button</Button>
       { alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>My Alert</Alert> }
      <ListGroup />
      <PropList  items={day} heading="Select the day:" onSelectItem={handleSelectItem}/>
    </div>
  )
}

export default App;