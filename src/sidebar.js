// eslint-disable-next-line no-unused-vars
import React from 'react';


function Sidebar() {
  return (
    <div class="main__sidebar sidebar">
    <div class="sidebar__personal">
        <p class="sidebar__personal-name">Sergey.Ivanov</p>
        <div class="sidebar__avatar">
            
        </div>
    </div>
    <div class="sidebar__block">
        <div class="sidebar__list">
            <div class="sidebar__item">
                <a class="sidebar__link" href="#">
                    {/* <img class="sidebar__img" src="img/playlist01.png" alt="day's playlist"> */}
                </a>
            </div>
            <div class="sidebar__item">
                <a class="sidebar__link" href="#">
                    {/* <img class="sidebar__img" src="img/playlist02.png" alt="day's playlist"> */}
                </a>
            </div>
            <div class="sidebar__item">
                <a class="sidebar__link" href="#">
                    {/* <img class="sidebar__img" src="img/playlist03.png" alt="day's playlist"> */}
                </a>
            </div>
        </div>
    </div>
</div>

  )
}

