import PropTypes from 'prop-types';

import css from 'components/Statistics/StatisticsList/StatList.module.css';
import { randomColor } from './StatisticsListRandomColor';

export function StatisticList({ items }) {
  return (
    <ul className={css.statList}>
      {items.map(({ id, label, percentage }) => (
        // <StatisticItem
        //   id={item.id}
        //   label={item.label}
        //   percentage={item.percentage}
        // />
        <li
          key={id}
          style={{ backgroundColor: randomColor() }}
          className={css.item}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
}
StatisticList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
