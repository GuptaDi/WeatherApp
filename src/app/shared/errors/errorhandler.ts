import { ErrorHandler, Injectable } from '@angular/core';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor() { }
    handleError(error) {
        console.log('Error occured' + error);
        throw error;
    }

}