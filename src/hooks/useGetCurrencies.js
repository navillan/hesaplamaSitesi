import { useEffect, useState } from "react";

function useGetCurrencies() {
  const [currencies, setCurrencies] = useState({});
  const [currenciesDate, setCurrenciesDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.frankfurter.dev/v1/latest?base=TRY");
        const data = await response.json();
        setCurrenciesDate(data.date);
        setCurrencies(data.rates);
        console.log("Currencies Date:", data.date);
        console.log("Currencies Rates:", data.rates);
        
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchData();
  }, []);

  return { currenciesDate, currencies };
}
export default useGetCurrencies;