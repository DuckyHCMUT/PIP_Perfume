import styled from "styled-components";
import { mobile } from "../responsive";
import { NativeSelect } from '@material-ui/core';

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Option = ({options, handleOptionChange}) => {
    return (
    <FilterContainer>
        <NativeSelect defaultValue="" onChange={(e) => handleOptionChange(e.target.value)}>
        {options.map((c) =>{return <option value={c.OptionID}>{c.Volume}</option>})};
      </NativeSelect>
    </FilterContainer>
    )
    };

export default Option;