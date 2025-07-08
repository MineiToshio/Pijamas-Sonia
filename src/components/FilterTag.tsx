import clsx from "clsx";
import { FC } from "react";

type FilterTagProps = {
  onRemove: () => void;
  label: string;
  color?: string;
};

const FilterTag: FC<FilterTagProps> = ({ onRemove, label, color }) => {
  return (
    <div className={clsx("filter-tag", { "color-tag": color })}>
      {color && <span className={clsx("color", color)} />}
      {label}
      <span className="remove-tag icon-close" onClick={onRemove}></span>
    </div>
  );
};

export default FilterTag;
