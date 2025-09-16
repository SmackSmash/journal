import type {Entry} from './entries.js'

export default class JournalDb {
  async createEntry(entry: Entry): Promise<Entry> {}

  async listEntries(): Promise<Entry[]> {}
}
