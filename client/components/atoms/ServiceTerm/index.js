import { StyledServiceTerm } from "./style";
import Image from "next/image";
import PropTypes from "prop-types";

function getIcon(icon, onClick) {
  switch (icon) {
    case "unchecked":
      return (
        <Image
          src="/unchecked.svg"
          className="check-icon"
          alt="uncheckd icon"
          width={24}
          height={24}
          onClick={onClick}
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
          onClick={onClick}
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
          onClick={onClick}
        />
      );
    default:
      return null;
  }
}

export const ServiceTerm = ({
  checkIcon,
  detailIcon,
  isRequired,
  selectAll,
  children,
}) => {
  return (
    <StyledServiceTerm
      className={selectAll && "select-all"}
      detailIcon={detailIcon}
    >
      {checkIcon && getIcon(checkIcon)}
      {!selectAll && (
        <strong className={isRequired && "is-required"}>
          {isRequired ? "(필수)" : "(선택)"}
        </strong>
      )}
      {children}
      {detailIcon && getIcon(detailIcon)}
    </StyledServiceTerm>
  );
};

ServiceTerm.propTypes = {
  children: PropTypes.node.isRequired,
  checkIcon: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  detailIcon: PropTypes.string,
  selectAll: PropTypes.bool,
};
