export interface User {
  id: number;
  username: string;
  password: string;
}

export interface UserState {
  personValue: User[];
}

export interface UserInput {
  username: string;
  password: string;
}

