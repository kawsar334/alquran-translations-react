import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
    const [surahs, setSurahs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getQuran = async () => {
            try {
                const res = await axios.get('https://api.alquran.cloud/v1/surah');
                setSurahs(res.data.data);
            } catch (err) {
                setError('Failed to load surahs');
            }
        };

        getQuran();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="mt-6 container mx-auto">
                {error ? (
                    <div className="text-red-600 text-center">{error}</div>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {surahs.map((sura) => (
                            <li key={sura.number} className="border p-4 rounded-lg shadow-md hover:bg-gray-100">
                                <NavLink to={`/details/${sura.number}`} className="text-blue-600">
                                    <strong>{sura.number}.</strong> {sura.englishName} ({sura.name})
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Home;
