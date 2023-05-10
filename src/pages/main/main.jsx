
import React from 'react';
import s from '../../style/App.module.css';
import Search from '../../components/search/search';
import Filter from '../../components/filter/filter';
import CenterblockContent from '../../components/centerblock/centerblockContent';
import Personal from '../../components/personal/personal';
import SidebarBlock from '../../components/sidebar/sidebarBlock';
// import Menu from '../../components/burgerMenu/menu';
import BarPlayer from '../../components/barPlayer/barPlayer';


export const Main = () => {
    // const [menuActive, setMenuActive] = useState(false)
    
    return (      
   
          <div className={s.main_content}>
            <div className={s.centerblock}>
              <Search/>
              <Filter/>        
              <CenterblockContent/>
            </div>
            <div className={s.sidebar}>
              <Personal/>
              <SidebarBlock/>
            </div>
            <BarPlayer/>
          </div>
         
      
       
      
    

    )
}