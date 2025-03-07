export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Help: undefined;
  ResetPassword: undefined;
};

export type User = {
  id?: string;
  email: string;
  name?: string;
}

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export type LoginCredentials = {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}
