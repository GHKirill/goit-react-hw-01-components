import PropTypes from 'prop-types';
import { PageTitle } from '../PageTitle/PageTitle';
import { StatisticList } from '../StatisticsList/StatisticList';
import css from 'components/Statistics/StatisticsSection/StatisticsSection.module.css';

export function StatisticsSection({ statisticList, text }) {
  return (
    <section className={css.statistics}>
      <PageTitle text={text} />
      <StatisticList items={statisticList} />
    </section>
  );
}
StatisticsSection.propTypes = {
  statisticList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  text: PropTypes.string,
};
