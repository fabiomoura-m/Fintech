import { createContext, useContext } from 'react';
import useFetch from '../Hooks/useFetch';

interface IDataContext {
    loading: boolean;
    error: string | null;
    data: IVenda[] | null;
}

interface IVenda {
    id: string;
    nome: string;
    preco: number;
    status: 'pago' | 'processando' | 'falha';
    pagamento: 'boleto' | 'pix' | 'cartao';
    parcelas: number | null;
    data: string;
}

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
    const context = useContext(DataContext);

    if (!context) {
        throw new Error('useData precisa estar em DataContextProvider');
    }

    return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
    const { data, loading, error } = useFetch<IVenda[]>(
        'https://data.origamid.dev/vendas/'
    );

    return (
        <DataContext.Provider value={{ data, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};
