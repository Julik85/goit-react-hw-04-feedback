import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedBack/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { SectionWrapp } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = event => {
    const stateOption = event.target.value;
    this.setState(prevState => ({
      [stateOption]: prevState[stateOption] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };


  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0 + '%';
    }
    const positive = this.state.good;
    return Math.round((positive / total) * 100) + '%';
  };

  countNegativeFeedbackPercentage = () =>{
    const total = this.countTotalFeedback();
    if(total === 0) {
      return 0 + '%'
    }
    const negative = this.state.bad;
    return Math.round((negative / total) * 100) + '%';
  } 

  render() {
    const { good, bad, neutral } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const negativePercentage = this.countNegativeFeedbackPercentage();
    return (
      <SectionWrapp>
        <Section title="Please leave feedback">          
        </Section>        
        <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleLeaveFeedback}
        />
        <Section title="Statistics">
        </Section>
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          positivePercentage={positivePercentage}
          negativePercentage={negativePercentage}
        />
      </SectionWrapp>
    );
  }
}