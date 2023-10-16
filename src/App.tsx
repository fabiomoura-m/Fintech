import Header from './Components/Header';
import Sidernav from './Components/Sidenav';
import Resumo from './Pages/Resumo';
import './style.css';

function App() {
    return (
        <div>
            <Sidernav />
            <main>
                <Header />
                <Resumo />
            </main>
        </div>
    );
}

export default App;
