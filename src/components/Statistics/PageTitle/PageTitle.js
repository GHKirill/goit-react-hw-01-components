import PropTypes from 'prop-types';
//import css from 'components/Statistics/PageTitle/PageTitle.module.css';
import { Title } from './PageTitle.styled';

export function PageTitle({ text }) {
  return text && <Title>{text}</Title>;
}
PageTitle.propTypes = {
  text: PropTypes.string,
};
