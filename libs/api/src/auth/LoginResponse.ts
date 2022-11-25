import { AppResponse, AppResponseOK } from '../BaseResponse';
import { SessionBase } from './SessionBase';

export type LoginResponseOk = AppResponseOK<{
    session: SessionBase;
}>;
export type LoginResponse = AppResponse<LoginResponseOk>;
