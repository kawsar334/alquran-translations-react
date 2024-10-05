import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
const QuranImage = "https://media.istockphoto.com/id/1466475750/photo/quran-and-rosary-the-holy-book-of-muslims-on-rahle-ramadan-and-holy-night-concept.webp?s=1024x1024&w=is&k=20&c=8ZcuLXPuoZDaT07GzcigCi_PHJRdWtd_mPr4rPhDNU0=" 

const Details = () => {
    const [surah, setSurah] = useState({});
    const [ayahs, setAyahs] = useState([]);
    const id = useLocation().pathname.split("/")[2]; // Get surah ID from URL

    useEffect(() => {
        const getQuran = async () => {
            try {
                const res = await axios.get(`https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad,bn.bengali,ur.junagarhi,hi.transliteration`);
                const surahData = res.data.data;

                setSurah(surahData[0]); // Set the first surah data (Arabic text)
                setAyahs(surahData.map(edition => edition.ayahs)); // Set ayahs for all languages
            } catch (err) {
                console.log(err);
            }
        };

        getQuran();
    }, [id]);

    return (
        <div>

            <Navbar/>
        <div className="container mx-auto p-4" style={{
            // backgroundImage: `url(${QuranImage})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
          
        }}>
            {/* Surah Header */}
            <div className="text-center my-7">
                <h1 className="text-3xl font-bold text-[white]">{surah.name}</h1>
                <h2 className="text-xl text-[#6d6b6b]">{surah.englishName} - {surah.englishNameTranslation}</h2>
            </div>


            {/* Ayahs */}
            {ayahs.length > 0 && ayahs[0].map((ayah, index) => (
                <div key={ayah.number} className="mb-4 bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="btn bg-[rgba(0,0,0,0.1)] w-max px-2 rounded font-semibold text-[gray] mb-4  cursor-pointer">Ayah: {ayah.number}</h3>

                    <p className="text-xl text-right text-yellow-900 mb-2 border-b py-2">{ayahs[0][index].text} </p> {/* Arabic text */}
                    <p className="text-lg mb-2 text-[black] font-bold" title='Bengali translation'>{ayahs[2][index].text}</p> {/* Bengali translation */}
                    <p className="text-lg text-[black] font-light mb-2" title='English translation'>{ayahs[1][index].text}</p> {/* English translation */}
                    <p className="text-lg text-gray-700 mb-2 font-semibold" title='Urdu translation'>{ayahs[3][index].text}</p> {/* Urdu translation */}
                    {/* <p className="text-lg text-gray-700" title='Hindi translation'>{ayahs[4][index].text}</p> Hindi translation */}

                    {/* Redirect to Tafsir page on Ayah click */}
                    <NavLink to={`/tafsir/${ayah.number}`} className="text-blue-500 hover:underline mt-2">
                        Read Tafsir
                    </NavLink>
                </div>
            ))}
        </div>
            </div>
    );
};

export default Details;
