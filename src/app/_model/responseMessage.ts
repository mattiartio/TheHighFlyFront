export class ResponseMessage {
  responseStatus: string;
  message: string;
  data: any;
  constructor(responseStatus: string, message: string, data: any) {
    this.responseStatus = responseStatus;
    this.message = message;
    this.data = data;
  }
}
