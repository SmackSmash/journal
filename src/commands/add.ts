import {Args, Command, Flags} from '@oclif/core'
import fs from 'node:fs'

export default class Add extends Command {
  static override args = {
    message: Args.string({description: 'Message to add to journal', required: true}),
  }
  static override description = 'Add entries to the journal'
  static override examples = ['<%= config.bin %> <%= command.id %>']
  static override flags = {
    confidence: Flags.string({description: 'Confidence level from 1- 5', required: true}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Add)

    this.log(args.message)
    this.log(`# → Entry added on ${new Date().toISOString().split('T')[0]} with confidence level ${flags.confidence}/5`)
  }
}
