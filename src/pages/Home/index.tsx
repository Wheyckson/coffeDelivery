// import { useTheme } from "styled-components";
import { InfoItens } from "./components/InfoItens";
import { BackgroundBanner, Heading, CoffeeContent, CoffeeList } from "./styles";

import { coffees } from "../../../data.json";
import { CoffeeCard } from "../../components/CoffeeCard";

export function Home() {
  return (
    <div>
      <BackgroundBanner>
        <CoffeeContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeiro para qualquer hora do dia</h1>

              <label>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </label>
            </Heading>

            <InfoItens />
          </div>

          <div>
            <img src="/images/hero.svg" alt="Coffee Delivery" />
          </div>
        </CoffeeContent>

        <img src="/images/hero-bg.svg" id="hero-bg" alt="" />
      </BackgroundBanner>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  );
}
