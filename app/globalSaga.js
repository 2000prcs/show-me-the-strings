// Define sagas in global in order to use in configureStore
import HomePageSaga from './containers/HomePage/saga';
import InputPageSaga from './containers/InputPage/saga';

const createSaga = [HomePageSaga, InputPageSaga];

export default createSaga;