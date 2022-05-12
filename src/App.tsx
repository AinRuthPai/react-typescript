import "./App.css";
import BoardList from "./components/BoardList";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className='App'>
      <SideMenu />
      <BoardList />
    </div>
  );
}

export default App;
