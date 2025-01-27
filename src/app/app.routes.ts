import { Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FormEventComponent } from './observable/form-event/form-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { MapOperatorComponent } from './observable/map-operator/map-operator.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { CombineLatestComponent } from './observable/combine-latest/combine-latest.component';
import { ZipForkJoinComponent } from './observable/zip-fork-join/zip-fork-join.component';

export const routes: Routes = [
    {path:'promise',component:PromiseComponent},
    {path:'observable',component:ObservableComponent,children:[
        {path:'',component:ListComponent},
        {path:'formEvent',component:FormEventComponent},
        {path:'interval',component:IntervalComponent},
        {path:'of-from',component:OfFromComponent},
        {path:'toArray',component:ToArrayComponent},
        {path:'custom-observable',component:CustomObservableComponent},
        {path:'map-operator',component:MapOperatorComponent},
        {path:'pluck-operator',component:PluckComponent},
        {path:'filter-operator',component:FilterComponent},
        {path:'tap-operator',component:TapComponent},
        {path:'take-operator',component:TakeComponent},
        {path:'retry-operator',component:RetryComponent},
        {path:'debounce-operator',component:DebounceTimeComponent},
        {path:'subject',component:SubjectComponent},
        {path:'replay-subject',component:ReplaySubjectComponent},
        {path:'async-subject',component:AsyncSubjectComponent},
        {path:'concat-operator',component:ConcatComponent},
        {path:'merge-operator',component:MergeComponent},
        {path:'merge-map-operator',component:MergeMapComponent},
        {path:'concat-map-operator',component:ConcatMapComponent},
        {path:'switch-map-operator',component:SwitchMapComponent},
        {path:'exhaust-map-operator',component:ExhaustMapComponent},
        {path:'share-replay',component:ShareReplayComponent},
        {path:'combine-latest',component:CombineLatestComponent},
        {path:'fork-join',component:ZipForkJoinComponent},
        {path:'**',redirectTo:''}
    ]},
    {path:'**', redirectTo:'promise'}
];
