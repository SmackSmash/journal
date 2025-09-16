import {Args, Command, Flags} from '@oclif/core'

import JournalDb from '../../lib/db.js'
export default class Add extends Command {
  static override args = {
    message: Args.string({description: 'Message to add to journal', required: true}),
  }
  static override description = 'Create a new journal entry'
  static override examples = [
    '<%= config.bin %> <%= command.id %> "Journal entry" --confidence 5',
    '<%= config.bin %> <%= command.id %> "Another journal entry" -c 2',
  ]
  static override flags = {
    confidence: Flags.string({
      char: 'c',
      description: 'Confidence level from 1- 5',
      options: ['1', '2', '3', '4', '5'],
      required: true,
    }),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Add)
    const date = new Date().toISOString().split('T')[0]

    const db = new JournalDb()

    await db.createEntry({confidence: flags.confidence, date, message: args.message})

    this.log(args.message)
    this.log(`# → Entry added on ${date} with confidence level ${flags.confidence}/5`)
  }
}
