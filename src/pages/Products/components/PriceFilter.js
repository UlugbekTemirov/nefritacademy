import React from "react";
import MiniHeader from "../../../components/MiniHeader";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { setRange } from "../../../redux/filter.slice";
import { useSelector, useDispatch } from "react-redux";
import PriceFormatter from "../../../utils/PriceFormatter";

// helpers
import { RANGE_COLOR } from "../../../utils/helpers";

const PriceFilter = () => {
  const { range } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const rangeHandler = (e) => {
    dispatch(setRange(e));
  };

  return (
    <div className="xl:mt-10 mt-5">
      <MiniHeader
        title={{
          en: "Filter by price",
          ru: "Фильтр по цене",
          uz: "Narx bo'yicha filtrlash",
        }}
      />
      <div className="px-5 py-3">
        <Slider
          className="cursor-pointer"
          trackStyle={[
            {
              backgroundColor: RANGE_COLOR,
              height: 10,
              marginTop: -3,
            },
          ]}
          min={0}
          max={10000000}
          step={50000}
          range
          handleStyle={[0, 1].map((item) => {
            return {
              borderColor: RANGE_COLOR,
              backgroundColor: RANGE_COLOR,
              opacity: 1,
              height: 20,
              width: 20,
              marginTop: -8,
              boxShadow: "none",
            };
          })}
          value={range}
          defaultValue={[0, 1000000]}
          onChange={rangeHandler}
        />
        <div className="flex justify-between mt-3 text-primary">
          {[0, 1].map((item) => (
            <h1 key={item} className="font-semibold text-lg">
              <PriceFormatter amount={range[item]} /> so'm
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
