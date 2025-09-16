import {Args, Command, Flags} from '@oclif/core'

export default class Add extends Command {
  static override args = {
    message: Args.string({description: 'Message to add to journal'}),
  }
  static override flags = {
    confidence: Flags.string({description: 'Confidence level from 1- 5'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Add)

    this.log(args.message)
    this.log(flags.confidence)
  }
}
