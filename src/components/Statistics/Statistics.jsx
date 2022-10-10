import PropTypes from 'prop-types';
import { Title } from './StatisticsTitle';
import {
  StatisticsSection,
  StatisticsList,
  StatisticsTitle,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styles';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsSection>
      <StatisticsTitle> Upload stats </StatisticsTitle>
      <StatisticsList>
        {title && <Title title={title} />}
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsPercentage>{percentage}%</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
