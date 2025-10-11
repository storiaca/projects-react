import Form from './components/Form';
import Test from './components/Test';
import PriceCalculator from './components/PriceCalculator';
import ButtonCounter from './components/ButtonCounter';
import ThemeSwitcher from './components/ThemeSwitcher';
import Timer from './components/Timer';

import './App.css';
// import ToDoApp from './components/ToDoApp';
const items = [
  { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false },
];

// const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>;

// const TodoList = ({ items, onListClick, onItemClick }) => {
//   const handleItemClick = (item, event) => {
//     // Write your code here
//   };

//   return (
//     <ul onClick={onListClick}>
//       {items.map((item, index) => (
//         <TodoItem
//           item={item}
//           key={index}
//           onClick={(event) => handleItemClick(item, event)}
//         />
//       ))}
//     </ul>
//   );
// };

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-4">Playground</h1>
      <Form />
      <Test />
      <ButtonCounter start={5} />
      <ThemeSwitcher />

      <PriceCalculator />

      <Timer />

      {/* <TodoList
        items={items}
        onListClick={(event) => console.log('List clicked!')}
        onItemClick={(item, event) => {
          console.log(item, event);
        }}
      /> */}
    </div>
  );
}

export default App;
