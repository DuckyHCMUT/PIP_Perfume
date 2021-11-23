import styled from "styled-components";
import { mobile } from "../responsive";
import { NativeSelect, FormControl } from '@material-ui/core';

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

const Option = ({options, handleOptionChange}) => {
    return (
    <FilterContainer>
        <NativeSelect defaultValue="" onChange={(e) => handleOptionChange(e.target.value)}>
        <option value="">{options[0].Volume}</option>
        {options.map((c) =>{return <option value={c.Price}>{c.Volume}</option>})};
      </NativeSelect>
    </FilterContainer>
    )
    };

export default Option;