import { useEffect, useState } from "react";
import "./covid.css";

export const Covid = () => {

const[data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json#");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <h1>Live</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
          <div className="row">
            <div className="col-3">
              <li className="card">
                <div className="card__main">
                  <div className="card__inner">
                    <p className="card__name">
                      <span> OUR </span> COUNTRY
                    </p>
                    <p className="card__total card__small">INDIA</p>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-3">
              <li className="card">
                <div className="card__main">
                  <div className="card__inner">
                    <p className="card__name">
                      <span> TOTAL</span>RECOVERED
                    </p>
                    <p className="card__total card__small">{data.recovered}</p>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-3">
              <li className="card">
                <div className="card__main">
                  <div className="card__inner">
                    <p className="card__name">
                      <span> TOTAL </span> CONFIRMED
                    </p>
                    <p className="card__total card__small">INDIA</p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <li className="card">
                <div className="card__main">
                  <div className="card__inner">
                    <p className="card__name">
                      <span> TOTAL </span> DEATHS
                    </p>
                    <p className="card__total card__small">INDIA</p>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-3">
              <li className="card">
                <div className="card__main">
                  <div className="card__inner">
                    <p className="card__name">
                      <span> TOTAL </span> ACTIVE
                    </p>
                    <p className="card__total card__small">INDIA</p>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-3">
              <li className="card">
                <div className="card__main">
                  <div className="card__inner">
                    <p className="card__name">
                      <span> OUR </span> UPDATE
                    </p>
                    <p className="card__total card__small">INDIA</p>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </ul>
      </section>
    </>
  );
};

export default Covid;
