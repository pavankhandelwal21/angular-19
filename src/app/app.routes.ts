import { Routes } from '@angular/router';
import { CountersComponent } from './counters/counters.component';
import { ContextualVariableComponent } from './contextual-variable/contextual-variable.component';
import { DirectivesComponent } from './directives/directives.component';
import { DynamicStylingComponent } from './dynamic-styling/dynamic-styling.component';
import { EffectComponent } from './effect/effect.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { IfElseControlFlowComponent } from './if-else-control-flow/if-else-control-flow.component';
import { SignalComponent } from './signal/signal.component';
import { SwitchControlFlowComponent } from './switch-control-flow/switch-control-flow.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { InputValueComponent } from './input-value/input-value.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterHomeComponent } from './data-transfer/router-home/router-home.component';
import { RouterProfileComponent } from './data-transfer/router-profile/router-profile.component';
import { RouterContactComponent } from './data-transfer/router-contact/router-contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contextual', component: ContextualVariableComponent },
    { path: 'counters', component: CountersComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'dymanicstyling', component: DynamicStylingComponent },
    { path: 'effect', component: EffectComponent },
    { path: 'forloop', component: ForLoopComponent },
    { path: 'ifelsecontrolflow', component: IfElseControlFlowComponent },
    { path: 'inputvalue', component: InputValueComponent },
    { path: 'signal', component: SignalComponent },
    { path: 'switchcontrolflow', component: SwitchControlFlowComponent },
    { path: 'todolist', component: TodoListComponent },
    { path: 'twowaybinding', component: TwoWayBindingComponent },
    { path: 'router-home', component: RouterHomeComponent },
    { path: 'router-profile', component: RouterProfileComponent },
    { path: 'router-profile/router-contact', component: RouterContactComponent, data: { againName: 'constant name' } },
    { path: '**', component: PageNotFoundComponent }
];
