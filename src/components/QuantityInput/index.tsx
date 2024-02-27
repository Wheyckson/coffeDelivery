import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./styles";

type Props = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
};

export function QuantityInput({ quantity, increment, decrement }: Props) {
  return (
    <Container>
      <button onClick={decrement}>
        <Minus size={14} />
      </button>

      <span>{quantity}</span>

      <button onClick={increment}>
        <Plus size={14} />
      </button>
    </Container>
  );
}
