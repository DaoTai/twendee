import { memo } from "react";

type IPaginateProps = {
  page: number;
  maxPage: number;
  disabled: boolean;
  onNext: () => void;
  onPrev: () => void;
};

const Paginate = ({ page, maxPage, disabled, onPrev, onNext }: IPaginateProps) => {
  return (
    <div className="mx-auto  flex items-center justify-center gap-6">
      <button disabled={disabled || page === 1} className="btn" onClick={onPrev}>
        Prev
      </button>
      <span className="flex size-8 items-center justify-center rounded-full border border-sky-400 bg-sky-400 text-center font-semibold text-white">
        {page}
      </span>
      <button disabled={disabled || page === maxPage} className="btn" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default memo(Paginate);
