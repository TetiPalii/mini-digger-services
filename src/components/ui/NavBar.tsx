'use client'

import React, { useEffect, useRef, useState } from 'react';
import { NavInfo } from './NavInfo';
import { BurgerMenu } from './BurgerMenu';
import { Menu } from "lucide-react";

export const NavBar = () => {
    const [mobMenu, setMobMenu] = useState(false)
    return <nav >
        {mobMenu ? <BurgerMenu setMobMenu={setMobMenu} /> :
            <div>
                <button type='button' onClick={() => setMobMenu(true)} className="md:hidden block ml-auto">
                    <Menu />
                </button>
                <NavInfo />
            </div>}
    </nav>
}