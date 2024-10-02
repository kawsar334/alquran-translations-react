import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

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
        <div className="container mx-auto p-4">
            {/* Surah Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">{surah.name}</h1>
                <h2 className="text-xl text-gray-600">{surah.englishName} - {surah.englishNameTranslation}</h2>
            </div>

            {/* Ayahs */}
            {ayahs.length > 0 && ayahs[0].map((ayah, index) => (
                <div key={ayah.number} className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Ayah {ayah.number}</h3>

                    <p className="text-xl text-right text-gray-900 mb-2"><strong>Arabic: </strong>{ayahs[0][index].text}</p> {/* Arabic text */}
                    <p className="text-lg mb-2 text-gray-600 font-bold" title='Bengali translation'>{ayahs[2][index].text}</p> {/* Bengali translation */}
                    <p className="text-lg text-gray-700 mb-2" title='English translation'>{ayahs[1][index].text}</p> {/* English translation */}
                    <p className="text-lg text-gray-700 mb-2 font-thin" title='Urdu translation'>{ayahs[3][index].text}</p> {/* Urdu translation */}
                    <p className="text-lg text-gray-700" title='Hindi translation'>{ayahs[4][index].text}</p> {/* Hindi translation */}

                    {/* Redirect to Tafsir page on Ayah click */}
                    <NavLink to={`/tafsir/${ayah.number}`} className="text-blue-500 hover:underline mt-2">
                        Read Tafsir
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default Details;
