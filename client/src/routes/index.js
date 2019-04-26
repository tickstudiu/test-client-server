import App from '../pages/App';
import Login from '../pages/Login';
import NotPage from '../pages/404';

import {Public} from '../redux/hoc';

const indexRoutes = [
    {
        name: 'App',
        path: '/',
        component: Public(App),
    },
    {
        name: 'Login',
        path: '/login',
        component: Public(Login),
    },
    {
        name: '404',
        path: '*',
        component: NotPage,
    },
];

export default indexRoutes;
