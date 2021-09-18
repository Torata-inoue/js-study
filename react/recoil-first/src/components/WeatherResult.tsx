import React from "react";
import {useRecoilValue} from "recoil";
import {weatherState} from "../states/rootStates/weather";

export const WeatherResult: React.VFC = () => {
  const weather = useRecoilValue(weatherState);

  if (!weather) {
    return null;
  }

  return (
    <section>
      <h2>{weather.name}の天気</h2>

      <div>気温: {weather.main.temp} 度</div>
    </section>
  );
};
