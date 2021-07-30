import { http } from './ApiClient';
import { UserCreateDto, UserDto } from '@portfolio/shared-types';

export const fetchUsers = async (): Promise<UserDto[]> => {
  const { data } = await http.get<UserDto[]>('/users');
  return data;
};

export const createUser = async (user: UserCreateDto): Promise<UserDto> => {
  return await http.post<UserCreateDto, UserDto>('/users', user);
};

export const updateUser = async (
  id: string,
  user: UserCreateDto
): Promise<UserDto> => {
  return await http.put<UserCreateDto, UserDto>(`/users/${id}`, user);
};

export const deleteUser = async (user: UserDto): Promise<UserDto> => {
  const { data } = await http.delete<UserDto>(`/users/${user.id}`);
  return data;
};
