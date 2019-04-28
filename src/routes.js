import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './components/Main';
import Repository from './components/Repository';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Repository,
  }),
);

export default Routes;