import {
  ClockCounterClockwise,
  MapPin,
  ShoppingCart,
} from "@phosphor-icons/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { Aside, HeaderContainer } from "./styles";

type Address = {
  address: {
    "ISO3166-2-lvl4": string;
    city: string;
    village?: string;
    country: string;
    country_code: string;
    county: string;
    municipality: string;
    postcode: string;
    region: string;
    road: string;
    state: string;
    state_district: string;
    suburb: string;
  };
};

export function Header() {
  const { cart } = useCart();

  const [data, setData] = useState<Address>();
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  navigator.geolocation.getCurrentPosition(currentLocalization);

  function currentLocalization(pos: any) {
    setLatitude(pos?.coords.latitude);
    setLongitude(pos?.coords.longitude);
  }

  async function getLocalization() {
    (await longitude) &&
      axios(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&addressdetails=1&format=jsonv2`
      )
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        })
        .finally(() => {
          setLoading(false);
        });
  }

  useEffect(() => {
    getLocalization();
  }, []);

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />

          {!loading && data ? (
            <label>{data.address["ISO3166-2-lvl4"]}</label>
          ) : (
            <label>searching</label>
          )}
        </div>

        <Link to={`cart`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>

        <Link to={`history`}>
          <ClockCounterClockwise size={22} weight="fill" />
        </Link>
      </Aside>
    </HeaderContainer>
  );
}
