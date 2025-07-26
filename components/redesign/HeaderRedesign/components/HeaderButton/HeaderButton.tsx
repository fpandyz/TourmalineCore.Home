import clsx from "clsx";

export function HeaderButton({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      className={clsx(
        `header-button`,
        className,
      )}
      type="button"
    >
      Обсудить проект
    </button>
  );
}
