import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCoin(data));
    setLoading(false);
  }, [id]);

  const {
    name,
    image,
    market_cap_rank,
    country_origin,
    hashing_algorithm,
    genesis_date,
    last_updated,
    community_score,
    developer_score,
    liquidity_score,
    public_interest_score,
  } = coin;
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="px-4 pb-24 mx-auto max-w-7xl md:px-2">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center">
            <div>
              <h1 className="text-3xl">General info:</h1>
              <hr />
              <h1>Coin Name: {name}</h1>
              <h1>Market Cap Rank: {market_cap_rank}</h1>
              <h1>Origin: {country_origin ? country_origin : "Not Found"}</h1>
              <h1>Contract Address: {name}</h1>
              <h1>Hashing Algorithm: {hashing_algorithm}</h1>
              <h1>Genesis Date: {genesis_date}</h1>
              <h1>Last Updated: {last_updated}</h1>
              <h1 className="text-3xl">Scores:</h1>
              <hr />
              <h1>Community Score: {community_score}</h1>
              <h1>Developer Score: {developer_score}</h1>
              <h1>Liquidity Score: {liquidity_score}</h1>
              <h1>Public Interest Score: {public_interest_score}</h1>
            </div>
            <div className="flex justify-center items center">
              <img src={image?.large} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
