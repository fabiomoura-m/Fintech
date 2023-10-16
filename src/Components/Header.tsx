import { useData } from '../Context/DataContext';

function Header() {
    const { data } = useData();
  
    return <div>Header</div>;
}

export default Header;
