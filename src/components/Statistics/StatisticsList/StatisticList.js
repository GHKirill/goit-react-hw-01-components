import PropTypes from 'prop-types';
import { randomColor } from './StatisticsListRandomColor';
import { StatList, Item, Label, Percentage } from './Statistics.styled';

export function StatisticList({ items }) {
  return (
    <StatList>
      {items.map(({ id, label, percentage }) => (
        <Item key={id} style={{ backgroundColor: randomColor() }}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </StatList>
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
