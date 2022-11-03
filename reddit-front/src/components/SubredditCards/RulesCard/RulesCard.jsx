import { Typography, Box } from '@mui/material';
import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import CardHeader from '../CardHeader/CardHeader';
import {
  RulesCardContainer,
  RuleContainer,
  RuleTitle,
  ShowRuleDescription,
  RuleDescription
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

export default function RulesCard({ baseColor }) {
  // eslint-disable-next-line prefer-const
  let isRuleHasDescription = true;
  const [showDescription, setShowDescription] = useState(false);

  return (
    <RulesCardContainer
      className="community-rules"
      data-testid="community-rules-card"
    >
      <CardHeader
        title="r/AyahEveryDay Rules"
        baseColor={baseColor}
        hasDropDownMenu={false}
      />
      <Box sx={{ padding: '12px' }}>
        <RuleContainer
          className="RuleContainer"
          onClick={() => {
            setShowDescription(!showDescription);
          }}
        >
          <Box
            className="rule-number"
            sx={{
              flex: '0 0',
              margin: 0,
              padding: '0 6px 0 0',
              fontSize: '1.5rem'
            }}
          >
            1.
          </Box>
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
      </Box>
    </RulesCardContainer>
  );
}
