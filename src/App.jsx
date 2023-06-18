import React, {useEffect} from 'react';
import s from './style/style.module.css';
import {AppRoutes} from './routes'
import { useGetAllTracksQuery} from './store/api/musicApi';
import {usePostTokenRefreshMutation} from './store/api/userApi'
import { useDispatch } from 'react-redux';
import { userLogin } from './store/slices/userSlice';

function App() {

  const {isLoading} = useGetAllTracksQuery();
    const dispatch = useDispatch()

    // eslint-disable-next-line no-empty-pattern
    const [postTokenRefresh, {}] = usePostTokenRefreshMutation();

    const handleTokenRefresh = () => {
        if (localStorage.getItem('token')) {
            postTokenRefresh({ refresh: localStorage.getItem('token')})
            .unwrap()
            .then((data) => {
              console.log(data)
              dispatch(userLogin({
                token: data
            }));
            })           
        }
      }
      useEffect(() => {
        setInterval(() => {
            handleTokenRefresh ()
        }, 200000)
      }, [])

      if (isLoading) return <h1>Loading</h1>
 
    return (      
    <div className={s.wrapper}>
      <div className={s.container}>
        <AppRoutes/> 
      </div> 
    </div> 
  );
}

export default App;