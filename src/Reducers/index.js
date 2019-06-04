import { combineReducers } from 'redux';
import Header from '../components/Header';
import CryptoContainer from '../components/CryptoContainer';

export { Header, CryptoContainer };

export default combineReducers({
    state: (state = {}) => state
});
