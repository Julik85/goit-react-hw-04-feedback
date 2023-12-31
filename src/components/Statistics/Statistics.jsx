import PropTypes from 'prop-types';
import { Notification } from '../Notifications/Notifications';
import { Value, StatsItem, StatsList } from './Statistics.styled';

export function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
  negativePercentage,
}) {
  const renderStats = () => {
    return (
      <>
        <StatsList>
          <StatsItem>
            <Value>Good: {good}</Value>
          </StatsItem>
          <StatsItem>
            <Value>Neutral: {neutral}</Value>
          </StatsItem>
          <StatsItem>
            <Value>Bad: {bad}</Value>
          </StatsItem>
        </StatsList>

        <StatsList>
          <StatsItem>
            <Value>Total: {total}</Value>
          </StatsItem>
          <StatsItem>
            <Value>Posititve Feedback: {positivePercentage}</Value>
          </StatsItem>
          <StatsItem>
            <Value>Negative Feedback: {negativePercentage}</Value>
          </StatsItem>
        </StatsList>
      </>
    );
  };

  return (
    <>
      {total !== 0 ? (
        renderStats()
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  // positivePercentage: PropTypes.number.isRequired,
};
