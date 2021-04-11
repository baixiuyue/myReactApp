import produce from 'immer';
import { Action } from 'types';

export interface SettingsState {}
export const initialState: Readonly<SettingsState> = {};

export default (originalState = initialState, action: Action) =>
  produce(originalState, () => {
    switch (action.type) {
    }
  });
