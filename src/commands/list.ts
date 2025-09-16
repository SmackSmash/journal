import {Command} from '@oclif/core'
export default class List extends Command {
  static override description = 'List all journal entries'
  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    this.log('Here you can see all your journal entries...')
  }
}
