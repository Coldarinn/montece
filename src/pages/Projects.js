import React from 'react';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__container container">
                <div className="projects__item item-projects">
                    <div className="item-projects__image">
                        <img src="images/projects/minecraft_launcher.jpg" alt=""></img>
                    </div>
                    <div className="item-projects__info info-project">
                        <div className="info-project__title">
                            C# | Custom Minecraft Launcher
                        </div>
                        <div className="info-project__desc">
                            Пример создания лаунчера для игры майнкрафт (<a
                            href="www.minecraft.net">www.minecraft.net</a>). Создан в ознакомительных
                            целях не для коммерческого использования.
                        </div>
                        <a href="images/news/site_open.jpg"
                           className="info-project__btn btn" download>
                            Скачать
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;