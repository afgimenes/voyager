import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx"; // IMPORTANTE: IMPORT ATUALIZADO



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
     

intercept(req: HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>> {
    console.log("Kelly love Forever");
    return next.handle(req)
    .catch((error, caugth) => {

        let errorObj = error;
        if (errorObj.error) {
            errorObj = errorObj.error;
            }

            if (!errorObj.status) {
                errorObj = JSON.parse(errorObj);
            }
                
            console.log("Erro detectado pelo interceptor:")
            console.log(errorObj);


        return Observable.throw(error);
        }) as any;
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};