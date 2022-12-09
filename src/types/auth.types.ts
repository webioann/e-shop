
// export interface IRegisterFunctionParams {
//     email: string
//     password: string
//     event: React.FormEvent
// }
// props for function login, signup with email
export interface IAuthButtonProps {
    email: string;
    password: string;
    setWarning: (param: boolean) => void
}
