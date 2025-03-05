import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  propertyValue = 10;
  count = signal(20);
  signalValue = signal(15);

  // This Effect is used to check the updated content
  constructor() {
    effect(() => {
      console.log('Signal count value: ' + this.count());
    });
    effect(() => {
      console.log('Property count value: ' + this.propertyValue);
    });
    effect(() => {
      console.log('Increase and Descrease Value: ' + this.signalValue());
    });
  }

  increasePropertyValue() {
    this.propertyValue += 1;
  }

  updateValue(val: string) {
    if (val == 'Increase') {
      this.signalValue.set(this.signalValue() + 1);
    }
    else {
      this.signalValue.set(this.signalValue() - 1);
    }
  }

  value = signal(40);
  // we cannot change the data type of value present in signal because it considers it as number
  newValue = signal<number | string | boolean>(55);
  canAlsoBeWrittenAs: WritableSignal<number | string | boolean> = signal(200);
  singleDataType = signal<number>(50); // or signal(50)

  //cannot update the signal
  notUpdate: Signal<number> = computed(() => 200);

  updateToString() {
    // this.value.set('hello'); // will get error here
    this.newValue.set('hello');
    this.canAlsoBeWrittenAs.set('hello');
    // this.notUpdate.set(200); - will not work
  }
  updateToBol() {
    this.newValue.set(true);
    this.canAlsoBeWrittenAs.set(true);
  }
  newUpdateTechnique() {
    // this has limitations. cannot be used with multiple data types
    this.singleDataType.update((val) => val + 1)
    // this.newValue.update((val) => val+1) - will not work
  }

  x = signal(10);
  y = signal(15);
  z = computed(() => this.x() + this.y());
  increaseX() {
    this.x.set(this.x() + 1);
  }
  increaseY() {
    this.y.set(this.y() + 1);
  }
}
