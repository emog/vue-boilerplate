import AppHome from '@/components/AppHome';
const StateManagement = () => import('@/components/StateManagement');


const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
    {
        path: '/state-management',
        name: 'StateManagement',
        component: StateManagement
    }
];

export default routes;
