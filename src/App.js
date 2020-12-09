import './App.css';
import 'antd/dist/antd.css'; 
import {useSelector,useDispatch} from 'react-redux'
import { Button } from 'antd';
import {increment,decrement} from './actions'

function App() {
   const counter = useSelector(state => state.counter)
   const dispatch = useDispatch()

  return (
    <div className="App">
      <h2>Counter is: {counter}</h2>
      <div>
        <Button type="primary" onClick={() => dispatch(increment(5))}>Increament</Button>
        <Button onClick={()=>dispatch(decrement())}>Decreament</Button>
      </div>
    </div>
  );
}

export default App;
