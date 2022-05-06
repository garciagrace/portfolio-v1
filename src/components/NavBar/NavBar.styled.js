import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 4.5rem;
  padding: 8px clamp(0.5rem, 7vw, 5rem);
  justify-content: space-between;
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.bgPrimaryTrans};
`;

export const MenuBtn = styled.div`
  display: flex;
  position: relative;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  & span {
    position: absolute;
    width: 40px;
    height: 4px;
    background: ${({ theme }) => theme.yellowCream};
    border-radius: 10px;
    transition: 0.5s;
  }

  & span:nth-child(1) {
    transform: translateY(-15px);
    width: 25px;
    left: 15px;
  }

  &.active span:nth-child(1) {
    width: 40px;
    transform: translateY(0) rotate(45deg);
    transition-delay: 0.125s;
  }

  & span:nth-child(2) {
    transform: translateY(15px);
    width: 15px;
    left: 15px;
  }

  &.active span:nth-child(2) {
    width: 40px;
    transform: translateY(0) rotate(315deg);
    transition-delay: 0.25s;
  }

  &.active span:nth-child(3) {
    transform: translateX(60px);
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    display: none;
  }
`;

export const NavList = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;
  font-family: ${({ theme }) => theme.ffRobotoMono};

  & > a {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.slate};
    transition: color ease 500ms;

    &:hover {
      color: ${({ theme }) => theme.yellowCream};
    }
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    display: flex;
  }
`;
