import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CountersComponent } from './counters/counters.component';
import { InputValueComponent } from './input-value/input-value.component';
import { IfElseControlFlowComponent } from './if-else-control-flow/if-else-control-flow.component';
import { SwitchControlFlowComponent } from './switch-control-flow/switch-control-flow.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SignalComponent } from './signal/signal.component';
import { EffectComponent } from './effect/effect.component';
import { ContextualVariableComponent } from './contextual-variable/contextual-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  imports: [
    LoginComponent,
    CountersComponent,
    InputValueComponent,
    IfElseControlFlowComponent,
    SwitchControlFlowComponent,
    ForLoopComponent,
    SignalComponent,
    EffectComponent,
    ContextualVariableComponent,
    TwoWayBindingComponent,
    TodoListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'adding this from comp folder!! lies';
  // x = 10;
  // y = 5;
}
