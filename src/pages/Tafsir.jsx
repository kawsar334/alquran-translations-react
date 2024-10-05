import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Tafsir = () => {
    const { ayahId } = useParams(); // Get ayahId from URL
    const [tafsir, setTafsir] = useState('tafsir will  update');

    useEffect(() => {
        const getTafsir = async () => {
            try {
                const res = await axios.get(`https://api.alquran.cloud/v1/tafsir/ayah/${ayahId}
`); // Replace with your Tafsir API
                setTafsir(res.data.tafsir); // Adjust according to the API response
                
            } catch (error) {
                console.error('Error fetching Tafsir:', error);
            }
        };

        getTafsir();
    }, [ayahId]);

    return (
        <div className="container mx-auto p-4 text-white">
            <h1 className="text-2xl font-bold mb-4">Tafsir for Ayah {ayahId}</h1>
            <p>{tafsir}</p> {/* Display the Tafsir here */}

             
        </div>
    );
};

export default Tafsir;
