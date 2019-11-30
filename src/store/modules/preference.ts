import { Mutation, MutationAction, Action, VuexModule, getModule, Module } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, store, name: 'pref', namespaced: true })
class Preference extends VuexModule {
  private cols: number = 20;
  private rows: number = 20;

  get COLS(): number {
    return this.cols;
  }

  get ROWS(): number {
    return this.rows;
  }

  @Mutation
  public setCols(newValue: number) {
    this.cols = newValue;
  }

  @Mutation
  public setRows(newValue: number) {
    this.rows = newValue;
  }
}

export const prefModule = getModule(Preference);
