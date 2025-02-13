import { Provider } from "react-redux";
import Body from "./Components/Body";
import store from "./Components/Redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
