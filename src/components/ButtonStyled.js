import styled from 'styled-components';

// Create a styled button component
const StyledButton = styled.button`
  background-color: #00b4d8;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0096c7;
  }
`;

const ButtonStyled = () => {
  return (
    <StyledButton>
      Click Me!
    </StyledButton>
  );
};

export default ButtonStyled;
