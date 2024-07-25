export interface User {
  id: number;
  email: string;
  password: string;
  theme: string;
}

export interface AuthState {
  token: string;
  isAuthenticated: boolean;
  user: User | null;
}

export interface Content {
  text: string;
  images: string[];
  links: string[];
}
