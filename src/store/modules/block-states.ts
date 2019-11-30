import { Mutation, MutationAction, Action, VuexModule, getModule, Module } from 'vuex-module-decorators';
import store from '@/store';
import { prefModule } from '@/store/modules/preference';

@Module({ dynamic: true, store, name: 'block-states', namespaced: true })
class BlockStates extends VuexModule {
  private blockStates: boolean[][] = [];

  get BLOCK_STATES(): boolean[][] {
    return this.blockStates.map((row) => row.slice());
  }

  @Action
  public refreshAll(): void {
    const newStates: boolean[][] = [];
    for (let y = 0; y < prefModule.ROWS; y++) {
      const row: boolean[] = [];
      for (let x = 0; x < prefModule.COLS; x++) {
        row.push(Math.random() < 0.3);
      }
      newStates.push(row);
    }
    this.update(newStates);
  }

  @Action
  public changeColNum(): void {
    this.update(
      this.BLOCK_STATES
      .map((row) => (
        row.length < prefModule.COLS
          ? row.concat(new Array<boolean>(prefModule.COLS - row.length))
          : row.slice(0, prefModule.COLS)
    )));
  }

  @Action
  public changeRowNum(): void {
    this.update(
      (this.blockStates.length < prefModule.ROWS
        ? this.BLOCK_STATES
          .concat(new Array<boolean[]>(prefModule.ROWS - this.blockStates.length)
            .fill(new Array<boolean>(prefModule.COLS)))
        : this.BLOCK_STATES.slice(0, prefModule.ROWS)
    ));
  }

  @Mutation
  private update(newStates: boolean[][]): void {
    this.blockStates = newStates;
  }
}

export const blockStatesModule = getModule(BlockStates);
