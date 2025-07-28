import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { SkipLoading } from './skipLoading';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Check if the skipLoading flag is set in the context
    const skipLoading = req.context.get(SkipLoading);

    if (skipLoading) {
      return next.handle(req);
    }
    this.loadingService.startLoading();
    return next.handle(req).pipe(
      finalize(() => this.loadingService.stopLoading()),
    );
  }
}
