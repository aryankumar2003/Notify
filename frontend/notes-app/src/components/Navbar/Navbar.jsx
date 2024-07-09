import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar';


const Navbar = ({userInfo}) => {
    const [searchQuery,setSearchQuery]=useState("");
    const Navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear();
        Navigate("/login");
    }
    const handleSearch=()=>{
        setSearchQuery()
    }
    const onClearSearch=()=>{
        setSearchQuery("")
    }


    return (
        <div class="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
            <h2 class="text-xl font-medium text-red py-2">
                Notes
            </h2>

            <SearchBar
            value={searchQuery}
            onChange={({target})=>{
                setSearchQuery(target.value);
            }}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
            />

            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </div>
    )
}

export default Navbar