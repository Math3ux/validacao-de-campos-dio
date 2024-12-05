import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ onClick, disabled }: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      Entrar
    </ButtonContainer>
  );
};

export default Button;