import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectUsersSearchTerm } from "@/entities/users/model/selectors";
import { setSearchTerm } from "@/entities/users/model/slices/usersSlice";
import { USERS_SEARCH_TERM_SEARCH_PARAM_KEY } from "@/shared/consts";
import debounce from "lodash.debounce";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

export const useUsersSearch = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(selectUsersSearchTerm);
  const [searchParams, setSearchParams] = useSearchParams();

  const searhParam = searchParams.get(USERS_SEARCH_TERM_SEARCH_PARAM_KEY);

  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchTerm(event.target.value));
    },
    300
  );

  //если в url есть параметр поиска, то сохраняем его в стейт
  useEffect(() => {
    if (searhParam) {
      dispatch(setSearchTerm(searhParam));
    }
  }, [searhParam, dispatch]);

  //обновляем searchParams в url
  useEffect(() => {
    if (searchTerm) {
      searchParams.set(USERS_SEARCH_TERM_SEARCH_PARAM_KEY, searchTerm);
    } else {
      searchParams.delete(USERS_SEARCH_TERM_SEARCH_PARAM_KEY);
    }
    setSearchParams(searchParams);
  }, [searchTerm, setSearchParams, searchParams]);

  return { searchTerm, handleSearch };
};
