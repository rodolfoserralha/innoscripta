import { SelectInputProps } from "./select-input.props";

const SelectInput = ({
  value,
  setter,
  options: opts,
  defaultOption,
  testId,
}: SelectInputProps) => {
  return (
    opts &&
    opts.length > 0 && (
      <select
        data-testid={testId}
        className="border p-2 rounded"
        value={value}
        onChange={(e) => setter(e.target.value)}
      >
        <option value={""}>{defaultOption}</option>
        {opts.map((op) => {
          return (
            <option key={op.id} value={op.id}>
              {op.name}
            </option>
          );
        })}
      </select>
    )
  );
};

export default SelectInput;
