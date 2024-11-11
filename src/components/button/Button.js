import styled, { css } from "styled-components";

export const Button = ({ children, size, color, outlined, handleClick }) => {
  return (
    <StyledButton
      size={size}
      color={color}
      outlined={outlined}
      onClick={handleClick}
    >
      {children} 
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: ${({ size }) => (size === "large" ? "0.75rem 1.5rem" : "0.5rem 1rem")};
  font-size: ${({ size }) => (size === "large" ? "1.1rem" : "0.9rem")};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* Colors */
  color: ${({ color }) => (color === "primary" ? "#fff" : "#333")};
  background-color: ${({ color }) =>
    color === "primary" ? "#1976d2" : color === "secondary" ? "#ff4081" : "#e0e0e0"};
  border: ${({ outlined }) =>
    outlined ? "2px solid currentColor" : "none"};

  /* Outlined Style */
  ${({ outlined }) =>
    outlined &&
    css`
      background-color: transparent;
      color: ${({ color }) =>
        color === "primary" ? "#1976d2" : color === "secondary" ? "#ff4081" : "#333"};
    `}

  /* Hover Effect */
  &:hover {
    background-color: ${({ color, outlined }) =>
      outlined
        ? color === "primary"
          ? "rgba(25, 118, 210, 0.1)"
          : color === "secondary"
          ? "rgba(255, 64, 129, 0.1)"
          : "rgba(0, 0, 0, 0.1)"
        : color === "primary"
        ? "#1565c0"
        : color === "secondary"
        ? "#f50057"
        : "#bdbdbd"};
  }
`;
