#!/usr/bin/env node
/**
 * Regenerate the included HSK 3.0 levels 1–2 Indonesian dataset.
 *
 * Sources are expected from the Ayo Mandarin site repository:
 *   HSK_SOURCE  path to data/content/hsk.json
 *   ID_DEFS     path to data/i18n/id/hsk-definitions.json
 *
 *   HSK_SOURCE=../nihaolearn/data/content/hsk.json \
 *   ID_DEFS=../nihaolearn/data/i18n/id/hsk-definitions.json \
 *   node scripts/export.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const sourceFile = process.env.HSK_SOURCE
const idFile = process.env.ID_DEFS
if (!sourceFile || !idFile) {
  console.error('Set HSK_SOURCE and ID_DEFS.')
  process.exit(1)
}

const hsk = JSON.parse(fs.readFileSync(sourceFile, 'utf8'))
const id = JSON.parse(fs.readFileSync(idFile, 'utf8'))
const words = []

for (const level of [1, 2]) {
  for (const word of hsk['3.0']?.[String(level)] ?? []) {
    if (!word.d) continue
    const indonesian = id.words?.[word.w]
    if (!indonesian) throw new Error(`Missing Indonesian definition for ${word.w} (HSK ${level})`)
    words.push({
      level,
      word: word.w,
      pinyin: word.p ?? '',
      partOfSpeech: word.pos ?? null,
      indonesian,
      englishSource: word.d,
    })
  }
}

const data = {
  meta: {
    title: 'HSK 3.0 Indonesian vocabulary (levels 1–2)',
    locale: 'id',
    standard: 'HSK 3.0 (2021)',
    levels: [1, 2],
    count: words.length,
    status: 'draft',
    reviewed: false,
    generatedAt: new Date().toISOString().slice(0, 10),
    website: 'https://ayomandarin.com/',
    wordListLicense: 'MIT (complete-hsk-vocabulary)',
    definitionLicense: 'CC BY-SA 4.0 (translation of CC-CEDICT definitions)',
    note: 'Machine-translated draft. Indonesian native review is still required.',
  },
  words,
}

fs.mkdirSync(path.join(process.cwd(), 'data'), { recursive: true })
fs.writeFileSync(
  path.join(process.cwd(), 'data/hsk-3.0-id-levels-1-2.json'),
  `${JSON.stringify(data, null, 2)}\n`,
)

const esc = (value) => {
  const text = value == null ? '' : String(value)
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text
}
const csv = [
  [
    'level',
    'word',
    'pinyin',
    'part_of_speech',
    'indonesian_definition',
    'english_source_definition',
  ],
  ...words.map((w) => [
    w.level,
    w.word,
    w.pinyin,
    w.partOfSpeech,
    w.indonesian,
    w.englishSource,
  ]),
]
  .map((row) => row.map(esc).join(','))
  .join('\n')
fs.writeFileSync(path.join(process.cwd(), 'data/hsk-3.0-id-levels-1-2.csv'), `${csv}\n`)

console.log(`Wrote ${words.length} words.`)
