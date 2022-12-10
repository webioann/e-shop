
// props for function login, signup with email
export interface IAuthButtonProps {
    email: string;
    password: string;
    setWarning: (param: boolean) => void
}

export interface ICurrentUserData {
    isLogin: boolean;
    currentUserName: string | null;
    currentUserEmail: string | null;
    currentUserID: string | null;
    currentUseFotoUrl: string | null;
}
