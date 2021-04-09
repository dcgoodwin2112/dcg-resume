import styled from "styled-components";
import COLORS from "../styles/colors";
import { MAX_EXP_YEARS } from "../lib/util";

type MeterProps = {
  width: number;
};

type TechSkillProps = {
  children: React.ReactNode;
  skillName: string;
  exp: number;
  maxExp: number;
};

export default function TechSkill({
  children,
  skillName,
  exp,
  maxExp,
}: TechSkillProps) {
  const skillId = `skill-${skillName.toLowerCase()}`;
  return (
    <SkillWrapper>
      {children}
      <ExpLabelWrapper id={skillId}>
        <SkillTitleWrapper>{skillName}</SkillTitleWrapper>
        <SkillYearExpWrapper>
          <ExpString exp={exp} maxExp={MAX_EXP_YEARS} />
        </SkillYearExpWrapper>
      </ExpLabelWrapper>
      <MeterWrapper
        role="meter"
        aria-valuemin={0}
        aria-valuemax={maxExp}
        aria-valuenow={exp}
        aria-labelledby={skillId}
      >
        <InnerMeter width={(exp / maxExp) * 100} />
      </MeterWrapper>
    </SkillWrapper>
  );
}

type ExpStringProps = {
  exp: number;
  maxExp: number;
};

function ExpString({ exp, maxExp }: ExpStringProps) {
  const yearsExp = exp >= maxExp ? `${exp}+` : exp;
  const yearsLabel = exp == 1 ? "year" : "years";
  return (
    <>
      Exp: <SkillYearExpNumber>{yearsExp}</SkillYearExpNumber> {yearsLabel}
    </>
  );
}

const SkillWrapper = styled.div`
  margin: 36px 24px;
  max-width: 422px;
  display: grid;
  grid-template-columns: 28px 1fr;
  align-items: end;
`;

const MeterWrapper = styled.div`
  width: 100%;
  height: 6px;
  border: 1px solid ${COLORS.grayLight};
  border-radius: 3px;
  grid-column: 1 / 4;
  margin-block: 3px;
  overflow: hidden;
`;

const InnerMeter = styled.div<MeterProps>`
  height: 4px;
  background-color: ${COLORS.primary};
  width: ${(props) => props.width}%;
`;

const ExpLabelWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const SkillTitleWrapper = styled.span`
  font-weight: bold;
  padding-inline: 10px;
  font-size: 1.1rem;
`;

const SkillYearExpWrapper = styled.span`
  color: ${COLORS.grayDark};
  font-style: italic;
  font-size: 0.7rem;
  letter-spacing: .04rem;
`;
const SkillYearExpNumber = styled.span`
  color: ${COLORS.text};
  font-weight: bold;
`;
