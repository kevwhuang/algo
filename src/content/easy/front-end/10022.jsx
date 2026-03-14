// 10022 - Radio Group

export function RadioGroup({ name, onChange, options }) {
    return (
        <div>
            {options.map(({ label, value }) =>
                <label>
                    <input
                        name={name}
                        type="radio"
                        value={value}
                        onChange={() => onChange(value)}
                    />
                    {label}
                </label>
            )}
        </div>
    );
}
