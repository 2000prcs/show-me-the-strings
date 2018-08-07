/**
 * Asynchronously loads the component for InputPage
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
