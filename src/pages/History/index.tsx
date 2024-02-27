import { HistoryCardContainer, HistoryContainer } from "./styles";

import { Coffee } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";
import { Fragment } from "react";

export const History = () => {
  const { orders } = useCart();

  const isCartEmpty = orders.length === 0;

  function translatePayment(payment: string) {
    switch (payment) {
      case "credit":
        return "Crédito";
      case "debit":
        return "Débito";
      case "cash":
        return "Dinheiro";
      default:
        break;
    }
  }

  function dateConfig(date: number) {
    return new Date(date).toLocaleDateString();
  }

  return (
    <HistoryContainer>
      {isCartEmpty ? (
        <div>
          <Coffee size={32} />
          <h2>Você ainda não completou nenhum pedido!</h2>
        </div>
      ) : (
        <>
          <h1>Histórico de Pedidos</h1>
          {orders.map((order) => (
            <HistoryCardContainer>
              <Fragment key={order.items.id}>
                <div>
                  <Coffee size={32} />
                  <p>{dateConfig(order.id)}</p>
                </div>
                <p>
                  Quantidade: <span>{order.items.length}</span>
                </p>
                <p>{`${order.city}, ${order.state}`}</p>
                <div>
                  <p>
                    <span>
                      {new Intl.NumberFormat("pt-br", {
                        currency: "BRL",
                        style: "currency",
                      }).format(order.coffeValue)}
                    </span>
                    {` - ${translatePayment(order.paymentMethod)}`}
                  </p>
                </div>
              </Fragment>
            </HistoryCardContainer>
          ))}
        </>
      )}
    </HistoryContainer>
  );
};
