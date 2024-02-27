import { useEffect, useState } from "react";
import { QuantityInput } from "../QuantityInput";
import {
  Buy,
  CoffeeImg,
  CoffeeInfo,
  Container,
  Order,
  Price,
  Tags,
} from "./styles";
import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useCart } from "../../hooks/useCart";

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function CoffeeCard({ coffee }: Props) {
  const [quantity, setQuantity] = useState(0);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const { addItem } = useCart();

  const theme = useTheme();

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 0) {
      setQuantity((state) => state - 1);
    }
  }

  function handleAddItem() {
    console.log(coffee.id);
    console.log(quantity);

    addItem({ id: coffee.id, quantity });
    setIsItemAdded(true);
    setQuantity(0);
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <CoffeeInfo>
        <h2>{coffee.title}</h2>
        <span>{coffee.description}</span>

        <Buy>
          <Price>
            <span>R$</span>
            <span>{coffee.price.toFixed(2)}</span>
          </Price>

          <Order $itemAdded={isItemAdded}>
            <QuantityInput
              quantity={quantity}
              increment={incrementQuantity}
              decrement={decrementQuantity}
            />

            <button disabled={isItemAdded} onClick={handleAddItem}>
              {isItemAdded ? (
                <CheckFat
                  weight="fill"
                  size={22}
                  color={theme.colors["base-card"]}
                />
              ) : (
                <ShoppingCart size={22} color={theme.colors["base-card"]} />
              )}
            </button>
          </Order>
        </Buy>
      </CoffeeInfo>
    </Container>
  );
}
