import {ApiUtils} from '../_utils/api-utils';
import {HttpClient} from '@angular/common/http';
import {ResponseMessage} from '../_model/responseMessage';

export class BaseApiService {
  constructor(http: HttpClient) {
  }
  protected buildRemoteRestUrl(apiPart: string): string {
    return ApiUtils.REMOTE_API_URL + apiPart;
  }

  protected validation(response: ResponseMessage): boolean {
    return response.responseStatus === 'OK';
  }
}

