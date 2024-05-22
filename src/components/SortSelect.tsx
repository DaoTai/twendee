import { ChangeEvent, memo } from "react";

type ISortSelectProps = Partial<HTMLSelectElement> & {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SortSelect = ({ value, onChange }: ISortSelectProps) => {
  return (
    <div className="space-x-4">
      <b>Sort by</b>
      <select value={value} className="cursor-pointer rounded-lg border p-2" onChange={onChange}>
        <option value="none">None</option>
        <option value="username">Username</option>
        <option value="fullname">Fullname</option>
      </select>
    </div>
  );
};

export default memo(SortSelect);
