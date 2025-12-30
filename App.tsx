import { Provider } from "react-redux";
import Routes from "./src/Navigation/routes";
import { store } from "./src/Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App;