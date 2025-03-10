export type UserState = {
  user: User;
};

export type User = {
  name: string;
  email: string;
  password: string;
  isAuthenticated: boolean;
  token: string;
}

export type LanguageState = {
  language: string;
};

export type ThemeState = {
  theme: string;
};

export type RootState = {
  auth: UserState;
  lang: LanguageState;
  theme: ThemeState;
};
