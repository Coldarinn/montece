import React from 'react';

const Aside = () => {
    return (
        <div className="aside">
            <div className="aside__body">
                <ul className="aside__social social">
                    <li className="social__item">
                        <a href="https://www.facebook.com/profile.php?id=100066405902358"
                           className="social__link  icon-fb"
                           target="blank">
                        <span>
                           facebook
                        </span>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://www.twitter.com/MonteceGaming" className="social__link  icon-tw"
                           target="blank">
                            <span>twitter</span>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://www.vk.com/montecegaming" className="social__link  icon-vk" target="blank">
                            <span>vk</span>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://www.discord.gg/QPsMQbHJNH" className="social__link  icon-dis" target="blank">
                            <span>discord</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Aside;