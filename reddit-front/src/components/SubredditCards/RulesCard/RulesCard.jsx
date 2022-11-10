import { Typography, Box } from '@mui/material';
import { useState, memo } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import CardHeader from '../CardHeader/CardHeader';
import {
  RulesCardContainer,
  RuleContainer,
  RuleTitle,
  ShowRuleDescription,
  RuleDescription,
  RuleNumber
} from './RulesCard.Style';
import StyledHorizontalLine from '../../../utilities/StyledHorizontalLine/StyledHorizontalLine';

/**
 * @typedef PropType
 * @property {string, color} baseColor
 */

/**
 * This Component for showing the rules of the Community.
 *
 */

function RulesCard({ baseColor }) {
  // eslint-disable-next-line prefer-const
  let isRuleHasDescription = true;
  const [showDescription, setShowDescription] = useState(false);

  return (
    <RulesCardContainer
      className="community-rules"
      data-testid="community-rules-card"
    >
      {/* Card Header  */}
      <CardHeader
        title="r/AyahEveryDay Rules"
        baseColor={baseColor}
        hasDropDownMenu={false}
      />
      {/* Card Body  */}
      <Box sx={{ padding: '12px' }}>
        {/* The list of rules  */}
        <RuleContainer
          className="RuleContainer"
          onClick={() => {
            setShowDescription(!showDescription);
          }}
        >
          <RuleNumber className="rule-number">1.</RuleNumber>
          <RuleTitle className="rule-title">test title</RuleTitle>
          {isRuleHasDescription ? (
            <ShowRuleDescription className="show-rule-description">
              <AiOutlineDown fontSize="1.3rem" />
            </ShowRuleDescription>
          ) : null}
        </RuleContainer>
        {showDescription ? (
          <RuleDescription
            onClick={() => {
              setShowDescription(!showDescription);
            }}
          >
            <Typography
              variant="paragraph"
              sx={{
                fontWeight: '400',
                fontSize: '1.4rem',
                lineHeight: '2rem'
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              consequatur placeat ad porro.
            </Typography>
          </RuleDescription>
        ) : null}

        <StyledHorizontalLine />

        <RuleContainer
          className="RuleContainer"
          onClick={() => {
            setShowDescription(!showDescription);
          }}
        >
          <RuleNumber className="rule-number">2.</RuleNumber>
          <RuleTitle className="rule-title">test title again</RuleTitle>
        </RuleContainer>
      </Box>
    </RulesCardContainer>
  );
}

export default memo(RulesCard);
