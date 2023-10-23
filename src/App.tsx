import Header from './Components/Header';
import Sidernav from './Components/Sidenav';
import { DataContextProvider } from './Context/DataContext';
import Resumo from './Pages/Resumo';
import Vendas from './Pages/Vendas';
import './style.css';

function App() {
    return (
        <DataContextProvider>
            <div className="container">
                <Sidernav />
                <main>
                    <Header />
                    <Resumo />
                    <Vendas />
                </main>
            </div>
        </DataContextProvider>
    );
}

export default App;
