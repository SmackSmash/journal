import BetterSqlite3 from 'better-sqlite3'
import path from 'node:path'

import type {Entry} from './entries.js'

export default class JournalDb {
  #client: BetterSqlite3.Database

  constructor(dbDir: string) {
    #client = new BetterSqlite3(path.join(dbDir, 'journal.db'))
  }

  async createEntry(entry: Entry): Promise<Entry> {}

  async listEntries(): Promise<Entry[]> {}
}
