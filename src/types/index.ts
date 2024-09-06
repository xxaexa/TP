// component

export interface TextProps {
  text: string | number;
  className?: string;
}

export interface MainWrapProps {
  children: React.ReactNode;
  style?: string;
}

export interface InputProps {
  id: string;
  style?: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  icon?: React.ReactNode;
  text?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export interface HomeBoxProps {
  onClick?: () => void;
  photo?: string;
  user: AccountResponse; // Tambahkan tipe untuk user
}

export interface PopupProps {
  onClick: () => void;
  photo: string;
}

export interface CategoryBoxProps {
  category: Categoryx;
  categoryIndex: number;
}

// api
export interface MenuItem {
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface DataResult {
  categories: CategoryProps[];
}

export interface AuthRequest {
  grant_type: string;
  client_secret: string;
  client_id: string;
  username: string;
  password: string;
}

export interface AuthResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

export interface AccountResponse {
  status: string;
  result: {
    greeting: string;
    name: string;
    saldo: number;
    point: number;
    qrcode: string;
    banner: string[];
  };
}

export interface MenuItem {
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface Categoryx {
  category_name: string;
  menu: MenuItem[];
}

export interface MenuResponse {
  status: string;
  result: {
    categories: Categoryx[];
  };
}

export interface CategoryProps {
  text: string;
  active: boolean;
  onClick: () => void;
}
