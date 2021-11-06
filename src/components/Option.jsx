import styled from "styled-components";
import { mobile } from "../responsive";

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Option = ({options, onChange}) => {
    return (
    <FilterContainer>
        <Filter>
            <FilterTitle>Option</FilterTitle>
            <FilterSize>
            {options.map((option) => (
                <FilterSizeOption>
                    {option.Volume}
                </FilterSizeOption>
            ))}   
            </FilterSize>
        </Filter>
    </FilterContainer>
    )
    };

export default Option;