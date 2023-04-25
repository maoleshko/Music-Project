import React from 'react';
import './sidebarBlock.css';
import playlist01 from '../../img/playlist01.png'
import playlist02 from '../../img/playlist02.png'
import playlist03 from '../../img/playlist03.png'
import SkeletonLoading from '../skeletonLoading';


function SidebarBlock() {
  return (
    <div className="sidebar__block">
        <div className="sidebar__list">
            <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                <SkeletonLoading>
                    <img className="sidebar__img" src={playlist01} alt="day's playlist"/>
                </SkeletonLoading>
                    
                </a>
            </div>
            <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                <SkeletonLoading>
                    <img className="sidebar__img" src={playlist02} alt="100 dance hit"/>
                </SkeletonLoading>
                </a>
            </div>
            <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                <SkeletonLoading>
                    <img className="sidebar__img" src={playlist03} alt="indi-energy"/>
                </SkeletonLoading>
                    
                </a>
            </div>
        </div>
    </div>

  )
}

export default SidebarBlock;