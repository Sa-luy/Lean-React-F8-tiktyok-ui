import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Layout
import { HeaderOnly } from '~/components/Layout';

//router dung cho chưa login
export const publicRoutes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/following',
        name: 'following',
        component: Following,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
    {
        path: '/search',
        name: 'profile',
        layout: null,
        component: Search,
    },
    {
        path: '/upload',
        name: 'upload',
        layout: HeaderOnly,
        component: Upload,
    },
];
//router dung cho đã login

export const privateRoutes = [];
