import { Input, Label } from "./Filter.styled";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getFilter } from "redux/selectors";

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const changeFilter = (e) => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
        required
      />
    </Label>
  );
};

export default Filter;