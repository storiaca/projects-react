import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/todos')
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return <>{JSON.stringify(data)}</>;
}

export default App;
