// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name:string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
   //teacher
   {
    title: 'Teacher',
    path: '/dashboard/teacher',
    icon: icon('ic_teacher'),
  },
  //student
  {
    title: 'Student',
    path: '/dashboard/student',
    icon: icon('ic_student'),
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/dashboard/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
