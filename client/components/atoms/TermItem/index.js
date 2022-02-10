import { StyledTermItem } from "./style";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

function getIcon(icon, to) {
  const router = useRouter();
  const moveToPage = event => {
    if (to) {
      event.stopPropagation();
      router.push(to);
    }
  };
  switch (icon) {
    case "unchecked":
      return (
        <Image
          src="/unchecked.svg"
          className="check-icon"
          alt="uncheckd icon"
          width={24}
          height={24}
          onClick={moveToPage}
        />
      );
    case "checked":
      return (
        <Image
          src="/checked.svg"
          className="check-icon"
          alt="checked icon"
          width={24}
          height={24}
          onClick={moveToPage}
        />
      );
    case "detail":
      return (
        <Image
          src="/more.svg"
          className="detail-icon"
          alt="detail service term description icon"
          width={24}
          height={24}
          onClick={moveToPage}
        />
      );
    default:
      return null;
  }
}

export const TermItem = ({
  checkIcon,
  detailIcon,
  isRequired,
  selectAll,
  children,
  onSelect,
  to,
}) => {
  return (
    <StyledTermItem
      className={selectAll && "select-all"}
      detailIcon={detailIcon}
      onClick={onSelect}
    >
      {checkIcon && getIcon(checkIcon)}
      {!selectAll && (
        <strong className={isRequired && "is-required"}>
          {isRequired ? "(필수)" : "(선택)"}
        </strong>
      )}
      {children}
      {detailIcon &&
        getIcon(detailIcon, {
          pathname: to,
          query: {
            param: JSON.stringify(
              `${isRequired ? "(필수)" : "(선택)"} ${children}`,
            ),
          },
        })}
    </StyledTermItem>
  );
};

TermItem.propTypes = {
  children: PropTypes.node.isRequired,
  checkIcon: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  detailIcon: PropTypes.string,
  selectAll: PropTypes.bool,
  onSelect: PropTypes.func,
};
