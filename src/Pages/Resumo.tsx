import { useData } from '../Context/DataContext';

function Resumo() {
    const { data } = useData();
    
    return <div>Resumo</div>;
}

export default Resumo;
