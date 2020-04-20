import { observable, action } from 'mobx';

export class Store {
  @observable value = '';

  @action
  change(e: React.ChangeEvent<HTMLInputElement>) {
    this.value = e.target.value;
  }
}

export default new Store();
