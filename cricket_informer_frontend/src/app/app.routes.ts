import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveScoreComponent } from './pages/live-score/live-score.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { AllMatchComponent } from './pages/all-match/all-match.component';

export const routes: Routes = [
    {
        path : 'home',
        redirectTo:'/live-score',
        pathMatch:'full'
    },
    {
        path:"home",
        component:HomeComponent,
        title:"Home page | Cricket Informer"
    },{
        path:"allMatch",
        component: AllMatchComponent,
        title:"All Match | Cricket Informer"

    },{
        path:"live-score",
        component:LiveScoreComponent,
        title:"Live Matches | Cricket Informer"
    },{
        path:"point-table",
        component:PointTableComponent,
        title:"Point Table | Cricket Informer"
    }

];
