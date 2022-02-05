import Image from "next/image";
import { StyledHeader } from "./style";
import { Button } from "..";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="header-left">
          <Image src="/bancow_logo.svg" alt="logo" width="113" height="32" />
        </div>
        <div className="header-right">
          <strong className="username">뱅카우관리자</strong>
          <Button size={36} variant="outlined">
            로그아웃
          </Button>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
