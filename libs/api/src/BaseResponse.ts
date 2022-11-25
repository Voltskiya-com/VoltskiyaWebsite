import { StatusCodes } from 'http-status-codes';
import { SessionBase } from './auth/SessionBase';

export type BadStatusCode = Exclude<StatusCodes, StatusCodes.OK>;
export interface AppException {
    message: string;
    status: BadStatusCode;
    isOk: false;
    extra?: unknown;
}
export type AppResponseOK<T = unknown> = {
    status: StatusCodes.OK;
    session: SessionBase;
    isOk: true;
} & T;
export type AppResponse<OnOk = unknown> = AppException | (AppResponseOK & OnOk);

export function okResponse<T>(res: T, session: SessionBase): AppResponseOK<T> {
    return {
        ...res,
        session,
        status: StatusCodes.OK,
        isOk: true,
    };
}
