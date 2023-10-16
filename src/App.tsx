import Header from './Components/Header';
import Sidernav from './Components/Sidenav';
import { DataContextProvider } from './Context/DataContext';
import Resumo from './Pages/Resumo';
import './style.css';

function App() {
    return (
        <DataContextProvider>
            <div>
                <Sidernav />
                <main>
                    <Header />
                    <Resumo />
                </main>
            </div>
        </DataContextProvider>
    );
}

export default App;
