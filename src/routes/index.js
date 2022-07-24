import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import TestPage from '~/pages/TestPage';
import QuestionPage from '~/pages/QuestionPage';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/test', component: TestPage },
    { path: '/question', component: QuestionPage },
];

export const privateRoutes = [];
