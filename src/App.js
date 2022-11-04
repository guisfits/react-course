import Backdrop from "./components/backdrop";
import Todo from "./components/todo"
import Modal from "./components/modal";
import MyBackdrop from "./components/backdrop";

export default function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore the full React course'/>
      <Modal/>
      <MyBackdrop/>
    </div>
  );
}
