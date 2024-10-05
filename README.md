
# Multilingual Al Quran


## Description
A web application to read the Al Quran with translations in multiple languages, built using **React.js**, **Tailwind CSS**, and **React Router DOM**. **axios** , The application allows users to view verses in Arabic alongside translations in various languages.

## Features
- Quranic verses displayed in Arabic
- Multiple language translations (e.g., English, Urdu, Hindi)
- Clean and responsive user interface
- Easy navigation between Surahs and Ayahs

## 🛠 uses Technology
React.js, Tilwind css, react-router-dom , react functional component, React hooks, 

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kawsar334/alquran-translations-react.git

## Running Tests

To run tests, run the following command

```
  npm start
```


   
## live demo 

 - [Multilingual/alquran](https://)
 

## Authors

- [Kawsar firoz](https://github.com/kawsar334)

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://kawsar334.github.io/kawsars_portfolio/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kawsar-firoz-a140b9237/)



### Endpoints

#### 1. Get All Surahs
- **URL:** `/surah`
- **Method:** `GET`
- **Description:** Retrieves a list of all Surahs from the Quran, including their names, English translations, and total number of Ayahs (verses).
- **Response:**
```json
{
  "code": 200,
  "status": "OK",
  "data": [
    {
      "number": 1,
      "name": "الفاتحة",
      "englishName": "Al-Faatiha",
      "englishNameTranslation": "The Opening",
      "numberOfAyahs": 7,
      "revelationType": "Meccan"
    },
    {
      "number": 2,
      "name": "البقرة",
      "englishName": "Al-Baqara",
      "englishNameTranslation": "The Cow",
      "numberOfAyahs": 286,
      "revelationType": "Medinan"
    },
    ...
  ]
}


#### 3. Get Surah with Multiple Editions (Arabic, English, Bengali, Urdu, Hindi)

- **URL:** `/surah/{id}/editions/quran-uthmani,en.asad,bn.bengali,ur.junagarhi,hi.transliteration`
- **Method:** `GET`
- **Description:** Retrieves a specific Surah by its ID along with multiple translations and editions, including:
  - Arabic (Quran Uthmani)
  - English (Muhammad Asad)
  - Bengali (Translation by Zohurul Hoque)
  - Urdu (Translation by Fateh Muhammad Jalandhry)
  - Hindi (Transliteration)
- **URL Parameters:**
    - `id` (integer) – The number of the Surah (e.g., 1 for Al-Faatiha).

- **Response Example:**
```json
{
  "code": 200,
  "status": "OK",
  "data": [
    {
      "edition": {
        "identifier": "quran-uthmani",
        "language": "ar",
        "name": "Quran Uthmani",
        "englishName": "Quran in Arabic"
      },
      "ayahs": [
        {
          "number": 1,
          "text": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
        },
        {
          "number": 2,
          "text": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"
        }
      ]
    },
    {
      "edition": {
        "identifier": "en.asad",
        "language": "en",
        "name": "Muhammad Asad",
        "englishName": "The Message of the Qur'an"
      },
      "ayahs": [
        {
          "number": 1,
          "text": "In the name of God, the Most Gracious, the Dispenser of Grace"
        },
        {
          "number": 2,
          "text": "ALL PRAISE is due to God alone, the Sustainer of all the worlds"
        }
      ]
    },
    ...
  ]
}




