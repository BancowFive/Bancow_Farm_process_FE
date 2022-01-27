import PropTypes from "prop-types";
import { useRef } from "react";
import { Button } from "../Button";
import { StyledFileInput } from "./style";

export const FileInput = ({
  variant = "unuploaded",
  id = "file",
  children = "파일명",
  size = 70,
  onChange,
  width,
}) => {
  const targetInput = useRef();

  const clickTargetInput = () => {
    targetInput.current.click();
  };

  return (
    <>
      <StyledFileInput htmlFor={id} variant={variant} size={size} width={width}>
        {children}
        <Button variant={variant} size={38} onClick={clickTargetInput}>
          {variant === "unuploaded" ? <>첨부</> : <>재첨부</>}
        </Button>
        <input type="file" id={id} ref={targetInput} onChange={onChange} />
      </StyledFileInput>
    </>
  );
};

FileInput.PropTypes = {
  variant: PropTypes.oneOf(["uploaded", "unuploaded"]).isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  onChange: PropTypes.func,
  width: PropTypes.string,
};
