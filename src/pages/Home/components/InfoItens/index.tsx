import { useTheme } from "styled-components";
import { InfoContainer } from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";

export function InfoItens() {
  const theme = useTheme();

  return (
    <InfoContainer>
      <div>
        <ShoppingCart
          size={32}
          weight="fill"
          color={theme.colors.background}
          style={{ backgroundColor: theme.colors["yellow-dark"] }}
        />
        <span>Compra simples e segura</span>
      </div>

      <div>
        <Package
          size={32}
          weight="fill"
          color={theme.colors.background}
          style={{ backgroundColor: theme.colors["base-text"] }}
        />
        <span>Embalagem mantém o café intacto</span>
      </div>

      <div>
        <Timer
          size={32}
          weight="fill"
          color={theme.colors.background}
          style={{ backgroundColor: theme.colors.yellow }}
        />
        <span>Entrega rápida e rastreada</span>
      </div>

      <div>
        <Coffee
          size={32}
          weight="fill"
          color={theme.colors.background}
          style={{ backgroundColor: theme.colors.purple }}
        />
        <span>O café chega fresquinho até você</span>
      </div>
    </InfoContainer>
  );
}
