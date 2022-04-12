import React from 'react';

import s from './Days.module.scss';
import {Tab} from "../../../../interfaces/Tab";

interface Props {
}

export const Tabs = (props: Props) => {
    const tabs: Tab[] = [
        {
            value: 'На неделю',
            active: true,
        },
        {
            value: 'На 10 дней',
            active: false,
        },
        {
            value: 'На месяц',
            active: false
        },
    ];
    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map(tab => (
                    <div className={tab.active ? s.tab + ' ' + s.active : s.tab} key={tab.value}>
                        {tab.value}
                    </div>
                ))}
            </div>
            <div className={s.cancel}>Отменить</div>
        </div>
    );
};