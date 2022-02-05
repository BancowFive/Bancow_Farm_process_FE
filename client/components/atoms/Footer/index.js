import { StyledFooter } from "./style";
export const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-header">
        <img src="/guide.svg" alt="문의 아이콘" aria-hidden />
        <span>진행에 어려움이 생기면 전화해주세요</span>
      </div>
      <ul>
        <li>문의 시간 09:00 ~ 17:00</li>
        <li>
          <strong>02-774-7865</strong>
        </li>
      </ul>
    </StyledFooter>
  );
};
