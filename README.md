# Ayo Mandarin — Data kosakata HSK 3.0 bahasa Indonesia (level 1–2)

Data kosakata HSK 3.0 (2021) level 1–2 yang dipakai di situs
[Ayo Mandarin](https://ayomandarin.com/?utm_source=github&utm_medium=readme&utm_campaign=hsk_id_data).

Setiap kata memuat pinyin, kelas kata, arti dalam bahasa Indonesia, dan definisi
sumber CC-CEDICT dalam bahasa Inggris. Data dapat digunakan kembali oleh pelajar,
penulis materi, dan pengembang aplikasi di bawah lisensi CC BY-SA 4.0.

## Isi

| Berkas | Isi |
| --- | --- |
| [`data/hsk-3.0-id-levels-1-2.json`](data/hsk-3.0-id-levels-1-2.json) | 1.256 kata dalam format JSON |
| [`data/hsk-3.0-id-levels-1-2.csv`](data/hsk-3.0-id-levels-1-2.csv) | Isi yang sama dalam format CSV |

Level yang tersedia: HSK 3.0 level 1–2  
Jumlah kata: 1.256

HSK 3–7, HSK 2.0, dan halaman karakter belum termasuk. Di situs, halaman yang
terjemahannya belum lengkap diberi `noindex` dan dibuka secara bertahap.

## Format

JSON terdiri dari `meta` dan `words`. Setiap kata berbentuk:

```json
{
  "level": 1,
  "word": "的",
  "pinyin": "de",
  "partOfSpeech": "u,n",
  "indonesian": "partikel kepemilikan; penghubung kata sifat dengan kata benda; penanda penekanan",
  "englishSource": "of; ~'s (possessive particle)"
}
```

Kolom CSV:

```text
level,word,pinyin,part_of_speech,indonesian_definition,english_source_definition
```

## Belajar di situs

- [Daftar kata HSK 1](https://ayomandarin.com/hsk/1/vocabulary?utm_source=github&utm_medium=readme&utm_campaign=hsk_id_data)
- [Daftar kata HSK 2](https://ayomandarin.com/hsk/2/vocabulary?utm_source=github&utm_medium=readme&utm_campaign=hsk_id_data)
- [Tabel dan latihan pinyin](https://ayomandarin.com/pinyin?utm_source=github&utm_medium=readme&utm_campaign=hsk_id_data)
- [Bacaan bertingkat](https://ayomandarin.com/reading?utm_source=github&utm_medium=readme&utm_campaign=hsk_id_data)
- [Data dan lisensi](https://ayomandarin.com/licenses?utm_source=github&utm_medium=readme&utm_campaign=hsk_id_data)

## Sumber dan lisensi

- Daftar kata HSK: `complete-hsk-vocabulary` (MIT) dan daftar resmi HSK 3.0
- Definisi sumber: CC-CEDICT (CC BY-SA 4.0)
- Terjemahan bahasa Indonesia: adaptasi dari definisi CC-CEDICT (CC BY-SA 4.0)

Terjemahan bahasa Indonesia masih berupa **draf terjemahan mesin** dan belum
ditinjau oleh penutur asli. Jika menemukan kesalahan, kirim kata yang bermasalah,
URL halaman atau baris CSV, dan usulan perbaikan ke
[halo@ayomandarin.com](mailto:halo@ayomandarin.com).

Pencantuman sumber saat menggunakan ulang data ada di [NOTICE.md](NOTICE.md).
Teks lengkap lisensi ada di [LICENSE](LICENSE) dan [LICENSES/](LICENSES/).

## Membuat ulang data

Data dapat dibuat ulang dari repositori situs Ayo Mandarin:

```bash
HSK_SOURCE=../nihaolearn/data/content/hsk.json \
ID_DEFS=../nihaolearn/data/i18n/id/hsk-definitions.json \
node scripts/export.mjs
```

---

## English

This repository contains the Indonesian HSK 3.0 levels 1–2 dataset used by
[Ayo Mandarin](https://ayomandarin.com/?utm_source=github&utm_medium=readme&utm_campaign=hsk_id_data).

It contains 1,256 words with pinyin, part of speech, an Indonesian definition,
and the original CC-CEDICT English definition. The Indonesian text is a
machine-translated draft and has not yet completed native review.

The word list is MIT-licensed; the CC-CEDICT definitions and their Indonesian
translations are CC BY-SA 4.0. See [NOTICE.md](NOTICE.md) for attribution.
