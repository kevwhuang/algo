// 10021 - Checkbox Group

export function CheckboxGroup({ name, options, onChange }) {
    function handleChange() {
        const arr = [...document.querySelectorAll('input:checked')];
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].value;
        }
        onChange(arr);
    }
    return (
        <div>
            {options.map(({ label, value }) =>
                <label>
                    <input
                        name={name}
                        type="checkbox"
                        value={value}
                        onChange={handleChange}
                    />
                    {label}
                </label>
            )}
        </div>
    );
}
