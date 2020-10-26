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
  Profilefill : { 
    path : '/profilefill' , 
    component : lazy(() => import('../pages/Profilefill'))
  }, 
  Login : { 
    path : '/login' , 
    component : lazy(() => import ('../pages/Login'))
  },
  Register : { 
    path : '/register' , 
    component : lazy(() => import('../pages/Register'))
  },
  Question : { 
    path : '/question' , 
    component : lazy(() => import('../pages/Question'))
  },
  TagMath : { 
    path : '/tagmath' , 
    component : lazy(() => import('../pages/TagMath'))
  },
  TagScience : { 
    path : '/tagscience' , 
    component : lazy(() => import('../pages/TagScience'))
  },
  TagSocial : { 
    path : '/tagsocial' , 
    component : lazy(() => import('../pages/TagSocial'))
  },
  TagLanguage : { 
    path : '/taglanguage' , 
    component : lazy(() => import('../pages/TagLanguage'))
  },
  TagHuman : { 
    path : '/taghuman' , 
    component : lazy(() => import('../pages/TagHuman'))
  },
  TagTechnology : { 
    path : '/tagtechnology' , 
    component : lazy(() => import('../pages/TagTechnology'))
  },
  TagPolitics : { 
    path : '/tagpolitics' , 
    component : lazy(() => import('../pages/TagPolitics'))
  },
  TagFood : { 
    path : '/tagfood' , 
    component : lazy(() => import('../pages/TagFood'))
  },
  TagTravel : { 
    path : '/tagtravel' , 
    component : lazy(() => import('../pages/TagTravel'))
  },
  PropsTest : { 
    path : '/propstest' , 
    component : lazy(() => import('../pages/PropsTest'))
  }
}