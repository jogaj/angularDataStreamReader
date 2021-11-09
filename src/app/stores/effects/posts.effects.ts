import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs/internal/observable/empty";
import { catchError, map, mergeMap} from "rxjs/operators";
import { Injectable } from "@angular/core";

import { DataStreamServiceEmuService } from "../../services/data-stream-service-emu.service";
import { loadingPosts, loadPosts } from "../actions";

@Injectable()
export class PostsEffects {
    constructor(private action$: Actions, private dataStreamSrv: DataStreamServiceEmuService) {}

    /**
     * Effect to retrieve data from api
     */
    postsRetrieved$ = createEffect(() => 
        this.action$.pipe(
            ofType(loadingPosts),
            mergeMap(() =>
                this.dataStreamSrv.getDataObservable().pipe(
                    map((data) => loadPosts(data)),
                    catchError(() => EMPTY)
                )
            )
        )
    )
}