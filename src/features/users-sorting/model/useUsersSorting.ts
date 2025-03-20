import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectUsersSortBy } from "@/entities/users/model/selectors/selectUsersSortBy";
import { setSortBy } from "@/entities/users/model/slices/usersSlice";
import { USERS_SORT_BY_SEARCH_PARAM_KEY } from "@/shared/consts";

export const useUsersSorting = () => {
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector(selectUsersSortBy);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByParam = searchParams.get(USERS_SORT_BY_SEARCH_PARAM_KEY);

  const handleChangeSort = (value: string) => {
    dispatch(setSortBy(value));
  };

  // Если в url есть параметр сортировки, то сохраняем его в стейт
  useEffect(() => {
    if (sortByParam) {
      dispatch(setSortBy(sortByParam));
    }
  }, [sortByParam, dispatch]);

  // Обновляем searchParams в url
  useEffect(() => {
    if (sortBy) {
      searchParams.set(USERS_SORT_BY_SEARCH_PARAM_KEY, sortBy);
    } else {
      searchParams.delete(USERS_SORT_BY_SEARCH_PARAM_KEY);
    }

    setSearchParams(searchParams);
  }, [sortBy, setSearchParams, searchParams]);

  return { sortBy, handleChangeSort };
};
