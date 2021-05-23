export interface RegisterUserParams {
  email: string;
  password: string;
}

export interface UserRegisterResponse {
    message: string;
    error?: string;
}

export interface UserLoginResponse {
    token: string;
}