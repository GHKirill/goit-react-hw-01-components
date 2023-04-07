import PropTypes from 'prop-types';
import css from 'components/Statistics/PageTitle/PageTitle.module.css';

export function PageTitle({ text }) {
  return text && <h2 className={css.title}>{text}</h2>;
}
PageTitle.propTypes = {
  text: PropTypes.string,
};
