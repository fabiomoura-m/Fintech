interface IDateInput extends React.ComponentProps<'input'> {
    label: string;
}

function DateInput({ label, ...props }: IDateInput) {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type="date" name={label} id={label} {...props} />
        </div>
    );
}

export default DateInput;
