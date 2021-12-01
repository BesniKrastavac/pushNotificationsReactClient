// client/App.js
import './App.css';
import { AppContextProvider } from './AppContext'
import View from './View';

function App() {
   return (
      <AppContextProvider>
         <View />
      </AppContextProvider>
   );
}
export default App;