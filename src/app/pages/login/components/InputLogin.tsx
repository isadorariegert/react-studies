interface IInputLoginProps {
    label: string;
    value: string;
    type?: string;

    //event:
    onChange: (newValue: string) => void;
}

export const InputLogin = ({label, value, type, onChange}: IInputLoginProps) => {
    return (
        <label>
            <span>{label}</span>
            <input 
            value={value} 
            type={type}
            onChange={e => onChange(e.target.value)} 
            />
            {/* <p>Characters Length: {emailLength}</p> */}
        </label>
    )
}   