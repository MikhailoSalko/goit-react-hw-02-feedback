import { Component } from 'react';
import Section from './Feedback/Section/Section';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Notification from './Feedback/NotificationMessage/Notification';
import Statistics from './Feedback/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    const positivePersantage = Math.round((good / total) * 100);
    return Number(positivePersantage);
  };

  countFeedback = e => {
    this.setState(({ good, neutral, bad }) => {
      if (e.target.innerHTML.toLowerCase() === 'good') {
        return { good: good + 1 };
      }
      if (e.target.innerHTML.toLowerCase() === 'bad') {
        return { bad: bad + 1 };
      }
      return { neutral: neutral + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePersantage = this.countPositiveFeedbackPercentage(total);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onleaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePersantage={positivePersantage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
