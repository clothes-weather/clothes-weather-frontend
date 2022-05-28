import React, {useState} from 'react';

import s from './Header.module.scss'
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import Select from 'react-select';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface Props {
}

export const Header = (props: Props) => {
    const options = [
        {value: 'city-1', label: 'Москва'},
        {value: 'city-2', label: 'Пенза'},
        {value: 'city-3', label: 'Санкт-Петербург'}
    ]

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
    };

    const [state, setState] = useState({left: false});

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({...state, ['left']: open});
            };

    const list = () => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >

            <ListItem key={'user'} disablePadding>
                <ListItemButton onClick={() => window.location.assign("/")}>
                    <ListItemIcon>
                        <GlobalSvgSelector id='user'/>
                    </ListItemIcon>
                    <ListItemText primary={'Пользователь'}/>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <List>
                {['Погода', 'Одежда', 'Настройки системы'].map((text) => (
                    <ListItem key={text} disablePadding>
                        {
                            {
                                'Погода':
                                        <ListItemButton onClick={() => window.location.assign("/")}>
                                            <ListItemIcon>
                                                <GlobalSvgSelector id='weather'/>
                                            </ListItemIcon>
                                            <ListItemText primary={text}/>
                                        </ListItemButton>,
                                'Одежда':
                                    <ListItemButton onClick={() => window.location.assign("/")}>
                                        <ListItemIcon>
                                            <GlobalSvgSelector id='clothes'/>
                                        </ListItemIcon>
                                        <ListItemText primary={text}/>
                                    </ListItemButton>,
                                'Настройки системы':
                                    <ListItemButton onClick={() => window.location.assign("/")}>
                                        <ListItemIcon>
                                            <GlobalSvgSelector id='settings'/>
                                        </ListItemIcon>
                                        <ListItemText primary={text}/>
                                    </ListItemButton>
                            }[text]
                        }
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <React.Fragment key={'left'}>
                    <Drawer
                        anchor={'left'}
                        open={state['left']}
                        onClose={toggleDrawer(false)}
                    >
                        {list()}
                    </Drawer>
                </React.Fragment>
                <div className={s.logo} onClick={toggleDrawer(true)}>
                    <GlobalSvgSelector id='header-logo'/>
                </div>
                <div className={s.title} onClick={toggleDrawer(true)}>Clothes Weather</div>
            </div>

            {/* Отображать только в Home */}
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSvgSelector id='change-theme'/>
                </div>
                <Select defaultValue={options[0]} styles={colorStyles} options={options}/>
            </div>
        </header>
    );
};