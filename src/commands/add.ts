import {Args, Command, Flags} from '@oclif/core'
export default class Add extends Command {
  static override args = {
    message: Args.string({description: 'Message to add to journal', required: true}),
  }
  static override description = 'Create a new journal entry'
  static override examples = ['<%= config.bin %> <%= command.id %> "Journal note" --confidence "5"']
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

    this.log(args.message)
    this.log(`# → Entry added on ${new Date().toISOString().split('T')[0]} with confidence level ${flags.confidence}/5`)
  }
}
