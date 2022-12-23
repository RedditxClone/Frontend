/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
import { Typography, Box } from '@mui/material';
import { useState, memo, useEffect } from 'react';
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
 * @property {Array} rulesList
 */

/**
 * This Component for showing the rules of the Community.
 *
 */

function RulesCard({ rulesList }) {
  const [showDescription, setShowDescription] = useState(false);

  /**
   * This function divides handles the displaying of a rule description
   * @param {int} ruleId - The number to be divided.
   */
  const handleShowDescription = (ruleId) => {
    const rule = document.getElementById(`show-rule-description-${ruleId}`);
    if (rule) {
      if (rule.style.display === 'none') {
        rule.style.display = 'block';
        rule.style.visibility = 'visible';
      } else {
        rule.style.display = 'none';
        rule.style.visibility = 'hidden';
      }
    }
  };
  return (
    <RulesCardContainer
      className="community-rules"
      data-testid="community-rules-card"
    >
      {/* Card Header  */}
      <CardHeader
        title="r/AyahEveryDay Rules"
        hasDropDownMenu={false}
      />
      {/* Card Body  */}
      <Box sx={{ padding: '12px' }}>
        {/* The list of rules  */}

        {rulesList.length > 0
          ? rulesList.map((item, index) => (
              <>
                <RuleContainer
                  className="RuleContainer"
                  onClick={() => handleShowDescription(index)}
                >
                  <RuleNumber className="rule-number">
                    {`${index + 1}.`}
                  </RuleNumber>
                  <RuleTitle className="rule-title">{item.rule}</RuleTitle>
                  {item.description && (
                    <ShowRuleDescription className="show-rule-description">
                      <AiOutlineDown fontSize="1.3rem" />
                    </ShowRuleDescription>
                  )}
                </RuleContainer>

                <RuleDescription
                  id={`show-rule-description-${index}`}
                  style={{ display: 'none', visibility: 'hidden' }}
                >
                  <Typography
                    variant="paragraph"
                    sx={{
                      fontWeight: '400',
                      fontSize: '1.4rem',
                      lineHeight: '2rem'
                    }}
                  >
                    {item.description}
                  </Typography>
                </RuleDescription>

                {index < rulesList.length - 1 ? <StyledHorizontalLine /> : null}
              </>
            ))
          : null}
      </Box>
    </RulesCardContainer>
  );
}

export default memo(RulesCard);
