import { SessionBase } from './auth/SessionBase';

export type BadStatusCode = Exclude<number, 200>;
export interface AppException {
    message: string;
    status: BadStatusCode;
    isOk: false;
    extra?: unknown;
}
export type AppResponseOK<T = unknown> = {
    status: 200;
    session: SessionBase;
    isOk: true;
} & T;
export type AppResponse<OnOk = unknown> = AppException | (AppResponseOK & OnOk);

export function okResponse<T>(res: T, session: SessionBase): AppResponseOK<T> {
    return {
        ...res,
        session,
        status: 200,
        isOk: true,
    };
}
