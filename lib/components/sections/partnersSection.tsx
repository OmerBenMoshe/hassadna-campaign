"use client";

import BlackBracketSVG from "@/lib/components/svg/blackBracket"; 
import Image from "next/image";
import { useState } from "react";
import ReactModal from "react-modal";
import { motion } from "framer-motion";

const yadHanadiv = '/images/yad_hanadiv.svg';
const civilRightsG = '/images/civil_rights_g.svg';
const civilRightsC = '/images/civil_rights_c.svg';
const unG = "/images/un_g.svg";
const unC = "/images/un_c.svg";
const vanLeerG = "/images/van_leer_g.svg";
const vanLeerC = "/images/van_leer_c.svg";
const nifG = "/images/nif_g.svg";
const nifC = "/images/nif_c.svg";
const migdalG = "/images/migdal_g.svg";
const migdalC = "/images/migdal_c.svg";
const matachG = "/images/matach_g.svg";
const matachC = "/images/matach_c.svg";
const googleG = "/images/google_g.svg";
const googleC = "/images/google_c.svg";


export default function PartnersSection({colors}: {colors: string}) {
    const [isCivilRightsHovered, setIsCivilRightsHovered] = useState(false);
    const [isUnHovered, setIsUnHovered] = useState(false);
    const [isVanLeerHovered, setIsVanLeerHovered] = useState(false);
    const [isNifHovered, setIsNifHovered] = useState(false);
    const [isMigdalHovered, setIsMigdalHovered] = useState(false);
    const [isMatachHovered, setIsMatachHovered] = useState(false);
    const [isGoogleHovered, setIsGoogleHovered] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [partner, setPartner] = useState('');

    const handleImageClick = (partner: string) => {
        setPartner(partner);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <section className={`flex flex-col ${colors} h-[calc(100vh-88px)] transition snap-center`}>
      <div
        dir={"rtl"}
        className="flex items-center text-7xl text-bold font-primary mx-10 -mt-3">
          <span className="leading-none transform scale-x-[-1] pt-1 pr-5">
            <BlackBracketSVG/>
          </span>
          עובדים איתנו
          <span className="leading-none transform pt-1 pr-5">
            <BlackBracketSVG/>
          </span>
      </div>

      <div className="flex flex-col mx-10">
        <div className="flex mx-20 relative justify-between pb-10">
            <Image
                src={yadHanadiv}
                alt="yad hanadiv"
                width={125} //228
                height={75} //36
                onClick={() => handleImageClick('yad hanadiv')}
            />
            <Image
                src={isCivilRightsHovered ? civilRightsC : civilRightsG}
                alt="civil rights"
                width={350} //228
                height={55} //36
                onMouseEnter={() => setIsCivilRightsHovered(true)}
                onMouseLeave={() => setIsCivilRightsHovered(false)}
                onClick={() => handleImageClick('civil rights')}
            />
            <Image
                src={isUnHovered ? unC : unG}
                alt="un"
                width={100} 
                height={100} 
                onMouseEnter={() => setIsUnHovered(true)}
                onMouseLeave={() => setIsUnHovered(false)}
            />
            <Image
                src={isVanLeerHovered ? vanLeerC : vanLeerG}
                alt="van leer"
                width={175} //228
                height={100} //36
                onMouseEnter={() => setIsVanLeerHovered(true)}
                onMouseLeave={() => setIsVanLeerHovered(false)}
            />
        </div>
        <div className="flex mx-20 relative justify-between">
            <Image
                src={isNifHovered ? nifC : nifG}
                alt="nif"
                width={250} //228
                height={100} //36
                onMouseEnter={() => setIsNifHovered(true)}
                onMouseLeave={() => setIsNifHovered(false)}
            />
            <Image
                src={isMigdalHovered ? migdalC : migdalG}
                alt="migdal"
                width={70} //228
                height={55} //36
                onMouseEnter={() => setIsMigdalHovered(true)}
                onMouseLeave={() => setIsMigdalHovered(false)}
            />
            <Image
                src={isMatachHovered ? matachC : matachG}
                alt="matach"
                width={150} 
                height={100} 
                onMouseEnter={() => setIsMatachHovered(true)}
                onMouseLeave={() => setIsMatachHovered(false)}
            />
            <Image
                src={isGoogleHovered ? googleC : googleG}
                alt="google"
                width={175} //228
                height={100} //36
                onMouseEnter={() => setIsGoogleHovered(true)}
                onMouseLeave={() => setIsGoogleHovered(false)}
            />
        </div>
      </div>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        className="bg-white rounded-lg outline-none p-6 w-4/5 md:w-1/2"
        >
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full text-l font-semibold p-2 border-0 pl-10 pr-10 m-0.5 h-[65px]"
            onClick={closeModal}
        >
            <span dir="rtl">{partner}</span>
        </motion.button>
        </ReactModal>

    </section>
  );
}
