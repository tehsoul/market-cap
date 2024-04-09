import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  const total = 1_000_000_001; // 1B
  return {
    circulating: (total - treasury).toString(),
    total: total.toString()
  };
};

export default fetcher;
