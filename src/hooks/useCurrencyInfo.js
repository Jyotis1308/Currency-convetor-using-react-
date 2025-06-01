import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_J2k6RKGZMhebKW09YFAdwsMJTeWUtQWicHY9VVcl&base_currency=${baseCurrency.toUpperCase()}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch currency data");
        return res.json();
      })
      .then((res) => {
        setData(
          Object.fromEntries(
            Object.entries(res.data).map(([code, info]) => [code.toLowerCase(), info.value])
          )
        );
      })
      .catch((err) => {
        console.error("Currency API error:", err);
        setData({});
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;


