import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedBack/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { SectionWrapp } from './App.styled';
import { useState } from 'react';
import React from 'react';

export const App = () => {    
  const [good, setGood] = useState(0);
  const [ neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleFeedback = event => {
    if (event === 'Good') {
      setGood(good + 1);
    } else if (event === 'Neutral') {
      setNeutral (neutral + 1)
    } else if (event === 'Bad') {
      setBad(bad + 1);
    }
  }  
  
  const countTotalFeedback = () => {
    let total = good + bad + neutral;
    return total
  }

  
  const countPositivePercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0 + '%';
    } 
    return Math.round((good / countTotalFeedback()) * 100) + '%';
  }
  
  const countNegativePercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0 + '%';
    } 
    return Math.round((bad / countTotalFeedback()) * 100) + '%';
  }

  const total = countTotalFeedback();
  const positivePercentage = countPositivePercentage();
  const negativePercentage = countNegativePercentage();

 

  // handleLeaveFeedback = event => {
  //   const stateOption = event.target.value;
  //   this.setState(prevState => ({
  //     [stateOption]: prevState[stateOption] + 1,
  //   }));
  // };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };


  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   if (total === 0) {
  //     return 0 + '%';
  //   }
  //   const positive = this.state.good;
  //   return Math.round((positive / total) * 100) + '%';
  // };

  // countNegativeFeedbackPercentage = () =>{
  //   const total = this.countTotalFeedback();
  //   if(total === 0) {
  //     return 0 + '%'
  //   }
  //   const negative = this.state.bad;
  //   return Math.round((negative / total) * 100) + '%';
  // } 

  // render() {
  //   const { good, bad, neutral } = this.state;

  //   const total = this.countTotalFeedback();
  //   const positivePercentage = this.countPositiveFeedbackPercentage();
  //   const negativePercentage = this.countNegativeFeedbackPercentage();
    return (
      <SectionWrapp>
        <Section title="Please leave feedback">          
        </Section>        
        <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={handleFeedback}
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
};