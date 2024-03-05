"use client";

import Link from "next/link";

export default function EndSection({colors}: {colors: string}) {

  return (
    <section className={`flex flex-col ${colors} h-[calc(100vh-88px)] transition snap-center`}>
      <div
        dir={"rtl"}
        className="flex flex-col justify-center items-center text-7xl text-bold font-primary animate-float">
            <div className="flex">
                זאת הזדמנות
            </div>
            <div className="flex text-neon">
                להתחלה חדשה :)
            </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col">
            <Link href="/join-us">
                <button 
                    dir={"rtl"}
                    className="flex bg-neon rounded-full text-darkGray border-neon font-extrabold py-3 px-28 hover:bg-orange hover:border-orange hover:text-white">
                    שאלון קצר ואתם איתנו!
                </button>
            </Link>
        <div className="flex justify-around">
            <div className="flex">
                item 1
            </div>
            <div className="flex">
                item 2
            </div>
            <div className="flex">
                item 3
            </div>
        </div>
        </div>
      </div>

    
    </section>
  );
}
