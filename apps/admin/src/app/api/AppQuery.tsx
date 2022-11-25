import { getSessionToken } from '../elf/Session.store';
import { RequestBuilder, RequestMethod } from './RequestBuilder';

export class AppQuery {
    request(url: string): RequestBuilder {
        return new RequestBuilder('https://api.voltskiya.com' + url);
    }
    get(url: string): RequestBuilder {
        return this.request(url).setMethod(RequestMethod.Get);
    }
    post(url: string): RequestBuilder {
        return this.request(url).setMethod(RequestMethod.Post);
    }
    authorize(request: RequestBuilder): RequestBuilder {
        const token = getSessionToken();
        return request.addHeader({
            authorization: `Bearer ${token}`,
        });
    }
}
