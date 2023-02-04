import { LoginRequest, LoginResponse, SessionBase } from '@app/api';
import { setProp } from '@ngneat/elf';
import { Buffer } from 'buffer';

import { selfUserStore } from '../../elf/Session.store';
import { AppQuery } from '../AppQuery';

export class AuthQuery extends AppQuery {
    private async buildLogin(login: LoginRequest) {
        const encoded: string = Buffer.from(
            `${login.username}:${login.password}`
        ).toString('base64');
        const response: LoginResponse = await this.get('/login')
            .addHeader({ authorization: `Basic ${encoded}` })
            .build();
        return response;
    }
    async login(login: LoginRequest): Promise<LoginResponse> {
        const response: LoginResponse = await this.buildLogin(login);
        if (response.isOk) {
            const session: SessionBase = response.session;
            selfUserStore.update(setProp('session', session));
        }
        return response;
    }
}
export const authQuery = new AuthQuery();
