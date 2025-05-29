"use client";

import Logo from "./HeaderComponents/HeaderLogo";
import NavTabs from "./HeaderComponents/HeaderNavTabs";
import SearchBar from "./HeaderComponents/HeaderSearchBar";
import UserMenu from "./HeaderComponents/HeaderUserMenu";
import { useState, useEffect } from 'react'
import {USERDATA} from '@/app/Req/ApiUser'
import Link from 'next/link'
import { Plus } from 'lucide-react'

interface HeaderProps {
  disabledMenu?:boolean;
}

export default function Header({disabledMenu}:HeaderProps) {
  const [user, setUser] = useState([]);
  useEffect(()=> {
    async function fechUsers(){
      try {
        const object = await USERDATA();
        setUser(object);
        console.log("Dados do user", Object)
      } catch(error) {
        console.log("erro ao pergar: ", error)
      }
    }
    fechUsers()
  }, [])

  console.log("testando o user: ", user)
  return (
    <header className="fixed top-0 left-0 right-0 p-2 md:p-4 lg:rounded-b-[25px] shadow-md bg-white transition duration-100" style={{ zIndex: 200 }} >     
      <div className=" flex items-center justify-evenly md:justify-between  gap-3"> 
        <Logo />
        <div className="w-[400px]">
          <NavTabs />
          <SearchBar />
        </div>
        <div className="flex items-center justify-between">
          <Link
            href="/add"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF453A] hover:bg-[#e63b31] text-white font-medium rounded-md transition mr-6"
          >
            <div className="bg-white rounded-[4px] p-1">
              <Plus className="w-3 h-3 text-[#FF453A]" />
            </div>
            <span className="text-bold">Imóvel</span>
          </Link>

          <UserMenu disabledMenu={disabledMenu} />
        </div>
      </div>
    </header>
  );
}