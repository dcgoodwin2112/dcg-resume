import styled from "styled-components"
import COLORS from "../styles/colors"
import { MAX_EXP_YEARS } from "../lib/util"

type MeterProps = {
  width: number;
}

type TechSkillProps = {
  children: React.ReactNode,
  skillName: string,
  exp: number,
  maxExp: number,
}

export default function TechSkill({children, skillName, exp, maxExp}: TechSkillProps) {
  return (
    <SkillWrapper>
      {children}
      <SkillTitleWrapper>{skillName}</SkillTitleWrapper>
      <ExpLabelWrapper htmlFor={`skill-${skillName.toLowerCase()}`}>
        Exp: {exp}{exp >= MAX_EXP_YEARS && '+'} year{exp > 1 && 's'}
      </ExpLabelWrapper>
      <MeterWrapper
        id={`skill-${skillName.toLowerCase()}`}
        role="meter"
        aria-valuemin={0}
        aria-valuemax={maxExp}
        aria-valuenow={exp}
      >
        <InnerMeter width={(exp / maxExp) * 100} />
      </MeterWrapper>
    </SkillWrapper>
  );
}

const SkillWrapper = styled.div`
  margin: 36px 24px;
  max-width: 422px;
  display: grid;
  grid-template-columns: 36px max-content 1fr;
  align-items: end;
`

const SkillTitleWrapper = styled.div`
  font-weight: bold;
  padding-inline: 10px;
  font-size: 1.1rem;
`;

const MeterWrapper = styled.div`
  width: 100%;
  height: 6px;
  border: 1px solid ${COLORS.grayLight};
  border-radius: 3px;
  grid-column: 1 / 4;
  margin-block: 2px;
`;

const InnerMeter = styled.div<MeterProps>`
  height: 4px;
  background-color: ${COLORS.primary};
  width: ${(props) => props.width}%;
`;

const ExpLabelWrapper = styled.label`
  color: ${COLORS.grayDark};
  font-style: italic;
  font-size: .9rem;
  justify-self: end;
`
