import React from "react";
import PropTypes from "prop-types";

import s from "./Statistics.module.css";
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// function colorBgChange() {
//   const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
//   const backgroundColor = colors[colorIndex];
// }

// function bodyColorChange() {
//   if (isActive) { return; }
//   isActive = true;
//   timerId = setInterval(() => colorBgChange (), 1000);

// }

const StatsListItem = ({ id, label, percentage }) => {
  const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
  const backgroundColorList = colors[colorIndex];
  console.log(backgroundColorList);
  return (
    <li
      key={id}
      className={s.item}
      styles={{ backgroundColor: { backgroundColorList } }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

const StatsList = ({ items }) => {
  if (items.length === 0) return null;
  return <ul className={s.statList}>{items.map(StatsListItem)}</ul>;
};

const Statistics = ({ items }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <StatsList items={items} />
    </section>
  );
};

StatsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
};
export default Statistics;
