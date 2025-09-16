import BetterSqlite3 from 'better-sqlite3'

import type {Entry} from './entries.js'

export default class JournalDb {
  #client: BetterSqlite3.Database

  constructor() {
    this.#client = new BetterSqlite3('journal.db')
    this.setup()
  }

  async createEntry(entry: Entry): Promise<Entry> {
    const sql = this.#client.prepare(`
      INSERT INTO journal (message, date, confidence)
      VALUES (@message, @date, @confidence)
      `)

    const info = sql.run(entry)

    return {...entry, id: info.lastInsertRowid}
  }

  async listEntries(): Promise<Entry[]> {}

  setup(): void {
    this.#client.exec(`
      CREATE TABLE IF NOT EXISTS journal (
        id INTERGER PRIMARY KEY AUTOINCREMENT,
        message TEXT NOT NULL,
        date TEXT NOT NULL,
        confidence TEXT NOT NULL
      )
      `)
  }
}
