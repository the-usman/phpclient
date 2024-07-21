import React from 'react'
import sidebarcss from './sidebar.module.css'
import Image from 'next/image'

const Sidebar = () => {
    return (
        <div className={sidebarcss.sidebar}>
            <div className={sidebarcss.upperSectionSide}>
                <h1 className={sidebarcss.mainHeadingSidebar}>
                    AI Website Builder
                </h1>
                <div className={sidebarcss.innerSection}>
                    <div className={`active mt-2 ${sidebarcss.elementInUpper}`}>
                        <Image src="/pause.svg" width={24} height={24} style={{ paddingRight: 0 }} alt="Pause icon" />
                        Dashboard
                    </div>
                    <div className={sidebarcss.elementInUpper}>
                        <Image src="/side.svg" width={24} height={24} style={{ paddingRight: 0 }} alt="Site icon" />
                        Site
                    </div>
                    <div className={sidebarcss.elementInUpper}>
                        <Image src="/teams.svg" width={24} height={24} style={{ paddingRight: 0 }} alt="Teams icon" />
                        Teams
                    </div>
                    <div className={sidebarcss.elementInUpper}>
                        <Image src="/upgrade.svg" width={24} height={24} style={{ paddingRight: 0 }} alt="Upgrade icon" />
                        Upgrades
                    </div>
                </div>
            </div>

            <div className="downSection w-full">
                <button className="bg-[#9612A3] w-full h-[40px] text-white rounded-xl">
                    Create new site
                </button>
                <div className={sidebarcss.innerSection}>
                    <div className={`mt-2 ${sidebarcss.elementInUpper}`}>
                        <Image src="/docs.svg" width={24} height={24} style={{ paddingRight: 0 }} alt="Pause icon" />
                        Docs
                    </div>
                    <div className={sidebarcss.elementInUpper}>
                        <Image src="/toturial.svg" width={24} height={24} style={{ paddingRight: 0 }} alt="Site icon" />
                        Tutorials
                    </div>
                    <div className={sidebarcss.elementInUpper}>
                        <Image src="/help.svg" width={24} height={24} style={{ paddingRight: 0 }} alt="Teams icon" />
                        Help & feedback
                    </div>
                    <div className={sidebarcss.elementInUpper}>
                        <Image src="/api.svg" width={24} height={24} style={{ paddingRight: 0 }} alt="Upgrade icon" />
                        API reference
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar

