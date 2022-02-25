import lottie from 'lottie-web';
import {defineLordIconElement} from 'lord-icon-element';
// import second from '../../assets/icons/141-history.json'

defineLordIconElement(lottie.loadAnimation);

const LordIcon = () => <lord-icon animation="hover" src="/assets/icons/141-history.json" />
export default LordIcon