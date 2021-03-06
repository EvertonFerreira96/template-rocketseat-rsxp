import React from 'react';

import {
  WorkshopsContainer,
  WorkshopCards,
  WorkshopCard,
  WorkshopTitlePlaceholder,
  WorkshopDescriptionPlaceholder,
  WorkshopInstructorContainer,
  WorkshopInstructorPicturePlaceholder,
  WorkshopInstructorNamePlaceholder
} from './styles';

export default function WorkshopsPlaceholder() {
  function renderCards() {
    const cardsNumber = 5;
    let cards = [];

    for (i = 0; i < cardsNumber; i++) {
      cards.push(
        <WorkshopsContainer key={`workshop-card-placeholder-${i}`}>
          <WorkshopCard>
            <WorkshopTitlePlaceholder autoRun />
            <WorkshopDescriptionPlaceholder autoRun />
            <WorkshopInstructorContainer>
              <WorkshopInstructorPicturePlaceholder autoRun />
              <WorkshopInstructorNamePlaceholder autoRun />
            </WorkshopInstructorContainer>
          </WorkshopCard>
        </WorkshopsContainer>
      );
    }

    return cards;
  }

  return (
    <WorkshopCards>{renderCards()}</WorkshopCards>
  );
}
