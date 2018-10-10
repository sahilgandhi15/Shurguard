import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ContactComponent } from './contact/contact.component';
import { ContainerComponent } from './container/container.component';
import { UnitsComponent } from './units/units.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

export const AppRoutingModule = RouterModule.forRoot([
    {
        path: '',
        redirectTo: '/shurguard',
        pathMatch: 'full'
    },
    { path: 'units', component: UnitsComponent },
    { path: 'shurguard', component: ContainerComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'storage-tips', component: StorageTipsComponent }
]);
