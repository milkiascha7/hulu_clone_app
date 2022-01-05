import Image from "next/image"
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline"
import HeaderItem from "./HeaderItem"

const Header = () => {
    return (
        <header className="flex flex-col justify-between h-auto items-center sm:flex-row m-5">
          
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Trending" Icon={LightningBoltIcon} />
                <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
                <HeaderItem title="Collections" Icon={CollectionIcon} />
                <HeaderItem title="Search" Icon={SearchIcon} />
                <HeaderItem title="Account" Icon={UserIcon} />
            </div>
            <Image className="object-contain" src="https://links.papareact.com/ua6" width={120} height={100} alt="logo" />
          
        </header>
    )
}

export default Header
