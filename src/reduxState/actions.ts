import {
  ActionValue,
  createAction,
  createActions,
  NoArgAction,
} from 'redux-type-actions';
import { Location, User } from 'types';

const actions = createActions({
  // UI
  showCameraOptions: NoArgAction,

  // Data
  setUser: createAction<User>(),
  setLocation: createAction<Location>(),
  logout: NoArgAction,
});

export type Action = ActionValue<typeof actions>;

export default actions;
