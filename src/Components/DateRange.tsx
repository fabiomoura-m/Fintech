import { useState } from 'react';
import DateInput from './DateInput';

function DateRange() {
    const [inicio, setInicio] = useState('');
    const [final, setFinal] = useState('');

    return (
        <form onSubmit={e => e.preventDefault()}>
            <DateInput
                label="Início"
                value={inicio}
                onChange={({ target }) => setInicio(target.value)}
            />
            {inicio}
            <DateInput
                label="Final"
                value={final}
                onChange={({ target }) => setFinal(target.value)}
            />
            {final}
        </form>
    );
}

export default DateRange;
