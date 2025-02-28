export interface SelectInputProps {
  value?: string;
  setter: (value: string) => void;
  options?: { id: string; name: string; label?: string }[];
  defaultOption?: string;
  testId?: string;
}
