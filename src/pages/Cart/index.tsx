import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bank,
  Basket,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";

import { Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import * as zod from "zod";
import { Radio } from "../../components/Form/Radio";
import { TextInput } from "../../components/Form/TextInput";
import { QuantityInput } from "../../components/QuantityInput";
import { useCart } from "../../hooks/useCart";
import {
  AddressForm,
  CartContainer,
  CartEmptyMessage,
  CartTotalInfo,
  CheckoutButton,
  CofeeSelected,
  CoffeSelectedContainer,
  Coffee,
  CoffeeInfo,
  HeaderGroup,
  InfoContainer,
  Order,
  PaymentContainer,
  PaymentErrorMessage,
  PaymentOption,
} from "./styles";

import { coffees } from "../../../data.json";
import { ServerResponse, getCEP } from "../../services/apiViaCep";

type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
  coffeValue: number;
};

const newOrder = zod.object({
  cep: zod.number({ invalid_type_error: "Informe o CEP" }),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.string().min(1, "Informe o número"),
  fullAddress: zod.string(),
  neighborhood: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  state: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type OrderInfo = zod.infer<typeof newOrder>;

export function Cart() {
  const theme = useTheme();

  const shippingPrice = 8.9;

  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCart();

  const isCartEmpty = cart.length === 0;

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error("Invalid coffee.");
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  const selectedPaymentMethod = watch("paymentMethod");

  function handleIncrementItem(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleDecrementItem(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleRemoveItem(itemId: string) {
    removeItem(itemId);
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert("É preciso ter pelo menos um item no carrinho");
    }

    data.coffeValue = totalItemsPrice + shippingPrice;

    checkout(data);
  };

  const checkCEP = async (event) => {
    const cep = event.target.value.replace(/\D/g, "");

    if (cep) {
      getCEP(cep).then((res: ServerResponse) => {
        setValue("street", res.data.logradouro);
        setValue("neighborhood", res.data.bairro);
        setValue("city", res.data.localidade);
        setValue("state", res.data.uf);
      });
    }
  };

  return (
    <CartContainer>
      <div>
        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <Order>
            <h1>Complete seu pedido</h1>

            <InfoContainer>
              <HeaderGroup>
                <div>
                  <MapPinLine size={32} color={theme.colors["yellow-dark"]} />
                </div>

                <div>
                  <span>Endereço de Entrega</span>
                  <span>
                    Informe o endereço onde deseja receber seu pedido.
                  </span>
                </div>
              </HeaderGroup>

              <AddressForm>
                <TextInput
                  placeholder="CEP"
                  type="number"
                  containerProps={{ style: { gridArea: "cep" } }}
                  error={errors.cep}
                  {...register("cep", { valueAsNumber: true })}
                  onBlur={checkCEP}
                />

                <TextInput
                  placeholder="Rua"
                  containerProps={{ style: { gridArea: "street" } }}
                  error={errors.street}
                  {...register("street")}
                />

                <TextInput
                  placeholder="Número"
                  containerProps={{ style: { gridArea: "number" } }}
                  error={errors.number}
                  {...register("number")}
                />

                <TextInput
                  placeholder="Complemento"
                  optional
                  containerProps={{ style: { gridArea: "fullAddress" } }}
                  error={errors.fullAddress}
                  {...register("fullAddress")}
                />

                <TextInput
                  placeholder="Bairro"
                  containerProps={{ style: { gridArea: "neighborhood" } }}
                  error={errors.neighborhood}
                  {...register("neighborhood")}
                />

                <TextInput
                  placeholder="Cidade"
                  containerProps={{ style: { gridArea: "city" } }}
                  error={errors.city}
                  {...register("city")}
                />

                <TextInput
                  placeholder="UF"
                  maxLength={2}
                  containerProps={{ style: { gridArea: "state" } }}
                  error={errors.state}
                  {...register("state")}
                />
              </AddressForm>
            </InfoContainer>
          </Order>

          <PaymentContainer>
            <InfoContainer>
              <HeaderGroup>
                <div>
                  <CurrencyDollar size={32} color={theme.colors["purple"]} />
                </div>

                <div>
                  <span>Complete seu pedido</span>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar.
                  </span>
                </div>
              </HeaderGroup>

              <PaymentOption>
                <div>
                  <Radio
                    isSelected={selectedPaymentMethod === "credit"}
                    {...register("paymentMethod")}
                    value="credit"
                  >
                    <CreditCard size={16} />
                    <span>Cartão de crédito</span>
                  </Radio>

                  <Radio
                    isSelected={selectedPaymentMethod === "debit"}
                    {...register("paymentMethod")}
                    value="debit"
                  >
                    <Bank size={16} />
                    <span>Cartão de débito</span>
                  </Radio>

                  <Radio
                    isSelected={selectedPaymentMethod === "cash"}
                    {...register("paymentMethod")}
                    value="cash"
                  >
                    <Money size={16} />
                    <span>Dinheiro</span>
                  </Radio>
                </div>

                {errors.paymentMethod ? (
                  <PaymentErrorMessage role="alert">
                    {errors.paymentMethod.message}
                  </PaymentErrorMessage>
                ) : null}
              </PaymentOption>
            </InfoContainer>
          </PaymentContainer>
        </form>
      </div>

      <div>
        <CofeeSelected>
          <h1>Cafés selecionados</h1>

          <CoffeSelectedContainer>
            {isCartEmpty ? (
              <CartEmptyMessage>
                <Basket size={48} color="#8047F8" />
                <h2>Seu carrinho está vazio</h2>
                <a href="/">Nosso catálogo de cafés!</a>
              </CartEmptyMessage>
            ) : (
              <>
                {coffeesInCart.map((coffee) => (
                  <Fragment key={coffee.id}>
                    <Coffee>
                      <div>
                        <img src={coffee.image} alt={coffee.title} />

                        <div>
                          <span>{coffee.title}</span>

                          <CoffeeInfo>
                            <QuantityInput
                              quantity={coffee.quantity}
                              increment={() => handleIncrementItem(coffee.id)}
                              decrement={() => handleDecrementItem(coffee.id)}
                            />

                            <button onClick={() => handleRemoveItem(coffee.id)}>
                              <Trash />
                              <span>Remover</span>
                            </button>
                          </CoffeeInfo>
                        </div>
                      </div>

                      <aside>R$ {coffee.price?.toFixed(2)}</aside>
                    </Coffee>

                    <span />
                  </Fragment>
                ))}
              </>
            )}

            {isCartEmpty ? (
              <> </>
            ) : (
              <>
                <CartTotalInfo>
                  <div>
                    <span>Total de itens</span>
                    <span>
                      {new Intl.NumberFormat("pt-br", {
                        currency: "BRL",
                        style: "currency",
                      }).format(totalItemsPrice)}
                    </span>
                  </div>

                  <div>
                    <span>Entrega</span>
                    <span>
                      {new Intl.NumberFormat("pt-br", {
                        currency: "BRL",
                        style: "currency",
                      }).format(shippingPrice)}
                    </span>
                  </div>

                  <div>
                    <span>Total</span>
                    <span>
                      {new Intl.NumberFormat("pt-br", {
                        currency: "BRL",
                        style: "currency",
                      }).format(totalItemsPrice + shippingPrice)}
                    </span>
                  </div>
                </CartTotalInfo>

                <CheckoutButton type="submit" form="order">
                  Confirmar pedido
                </CheckoutButton>
              </>
            )}
          </CoffeSelectedContainer>
        </CofeeSelected>
      </div>
    </CartContainer>
  );
}
