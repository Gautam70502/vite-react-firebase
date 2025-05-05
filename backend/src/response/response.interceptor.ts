import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();

    return next.handle().pipe(
      map((data) => {
        // if response is an object and contains a `data` key
        if ('data' in data && typeof data.data === 'object') {
          return {
            status: true,
            message: 'Success',
            ...data, // unwrap inner `data`
          };
        }

        // normal case, return as-is
        return {
          status: true,
          message: 'Success',
          data: data,
        };
      }),
      catchError((err) => {
        const status =
          err instanceof HttpException
            ? err.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;

        const errorResponse =
          err instanceof HttpException ? err.getResponse() : err.message;

        let message = 'Something went wrong';
        let errorDetails: any = {};

        if (typeof errorResponse === 'string') {
          message = errorResponse;
        } else if (typeof errorResponse === 'object') {
          message = errorResponse['message'] || message;
          errorDetails = errorResponse;
        }

        // Special handling for class-validator errors (BadRequest)
        if (
          err instanceof BadRequestException &&
          Array.isArray(errorResponse['message'])
        ) {
          message = 'Validation failed';
          errorDetails = {
            errors: errorResponse['message'],
          };
        }

        response.status(status);

        return of({
          status: false,
          message,
          error: errorDetails,
          timestamp: new Date().toISOString(),
        });
      }),
    );
  }
}
