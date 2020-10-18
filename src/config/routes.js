import { lazy } from 'react' 

export default { 
  Home : { 
    path : '/',
    exact : true,
    component:lazy(() => import('../pages/Home'))
  },
  Ask : { 
    path: '/ask' , 
    component: lazy(() => import('../pages/Ask'))
  },
  Answer : { 
    path: '/answer' , 
    component: lazy(() =>import('../pages/Answer'))
  },
  Profile : { 
    path : '/profile' , 
    component : lazy(() => import('../pages/Profile'))
  }, 
  Login : { 
    path : '/login' , 
    component : lazy(() => import ('../pages/Login'))
  },
  Register : { 
    path : '/register' , 
    component : lazy(() => import('../pages/Register'))
  }
  
}