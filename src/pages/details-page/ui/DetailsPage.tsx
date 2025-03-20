import { useParams } from "react-router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  selectUserById,
  selectUsersLoading,
} from "@/entities/users/model/selectors";
import { Department } from "@/entities/users/model/types/type";
import { fetchUsersByDepartment } from "@/entities/users/api/fetchUsersByDepartment";
import { Container } from "@/shared/ui/container/Container";

import { UserDetailsInfo } from "./user-details-info/UserDetailsInfo";
import { DetailsTopMenu } from "./details-top-menu/DetailsTopMenu";
import { DetailsPageSkeleton } from "./DetailsPageSkeleton";

export const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => selectUserById(state, id!));
  const loading = useAppSelector(selectUsersLoading);

  useEffect(() => {
    dispatch(fetchUsersByDepartment(Department.all));
  }, [dispatch]);

  if (loading) return <DetailsPageSkeleton />;

  if (!user) return <div>Пользователь не найден</div>;

  return (
    <main>
      <DetailsTopMenu user={user} />

      <Container>
        <UserDetailsInfo user={user} />
      </Container>
    </main>
  );
};
