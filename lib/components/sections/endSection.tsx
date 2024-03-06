"use client";

import Link from "next/link";

export default function EndSection({colors}: {colors: string}) {

  return (
    <section className={`flex flex-col ${colors} h-[calc(100vh-88px)] transition snap-center`}>
      <div
        dir={"rtl"}
        className="flex flex-col justify-center items-center text-7xl text-bold font-primary animate-float mt-10">
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
                    className="flex bg-neon rounded-full justify-center items-center text-darkGray border-neon font-bold text-lg py-3 px-28 hover:bg-orange hover:border-orange hover:text-white">
                    שאלון קצר ואתם איתנו!
                </button>
            </Link>
        </div>
        <div>
            <div 
                dir={"rtl"}
                className="flex justify-around text-lg pt-12 gap-36"
                >
                <div className="flex flex-col">
                    <p className="font-bold">
                        פנו אלינו בפורום לכל שאלה
                    </p>
                    <br/>
                    <Link
                        className="text-white"
                        href="https://forum.hasadna.org.il/"
                        target="_blank"
                        dir={"rtl"}>
                        https://forum.hasadna.org.il
                    </Link>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold">
                        וכמובן תמיד זמינים במייל
                    </p>
                    <br/>
                    <Link
                        className="text-white"
                        href="mailto:info@hasadna.org.il"
                        dir={"rtl"}>
                        info@hasadna.org.il
                    </Link>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold">
                        או לבקר במשרדים שלנו
                    </p>
                    <br/>
                    <p
                        className="text-white"
                        dir={"rtl"}>
                        בית העמותות, סעדיה גאון 26, <br/>
                        בתל-אביב 6713521, ת.ד. 20001

                    </p>
                </div>
            </div>
        </div>

        <div 
            dir={"rtl"}
            className="flex justify-center items-center pt-4 pb-2">
            מוזמנים.ות להציץ&nbsp;
            <Link 
                href="https://www.hasadna.org.il/"
                target="_blank"
                className="text-white hover:underline hover:decoration-orange decoration-2">
                    באתר שלנו 
            </Link>
            &nbsp;וכמובן גם&nbsp;
            <Link 
                href="https://www.facebook.com/hasadna.org.il/"
                target="_blank"
                className="text-white hover:underline hover:decoration-orange decoration-2">
                    בפייסבוק שלנו
            </Link>
              
        </div>
      </div>

    
    </section>
  );
}
