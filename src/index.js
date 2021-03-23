import cardMenuTpl from './templates/card.hbs';
import dishes from './menu.json';
import './styles.css';
import './scripts/theme';

const menuListRef = document.querySelector('.js-menu');
const createCardMenuTpl = cardMenuTpl(dishes);

menuListRef.insertAdjacentHTML('afterbegin', createCardMenuTpl);