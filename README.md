journal
=================

 A learning journal, letting you record, reflect on, and revisit what you’re learning.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/journal.svg)](https://npmjs.org/package/journal)
[![Downloads/week](https://img.shields.io/npm/dw/journal.svg)](https://npmjs.org/package/journal)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g journal
$ journal COMMAND
running command...
$ journal (--version)
journal/0.0.0 linux-x64 node-v22.19.0
$ journal --help [COMMAND]
USAGE
  $ journal COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`journal hello PERSON`](#journal-hello-person)
* [`journal hello world`](#journal-hello-world)
* [`journal help [COMMAND]`](#journal-help-command)
* [`journal plugins`](#journal-plugins)
* [`journal plugins add PLUGIN`](#journal-plugins-add-plugin)
* [`journal plugins:inspect PLUGIN...`](#journal-pluginsinspect-plugin)
* [`journal plugins install PLUGIN`](#journal-plugins-install-plugin)
* [`journal plugins link PATH`](#journal-plugins-link-path)
* [`journal plugins remove [PLUGIN]`](#journal-plugins-remove-plugin)
* [`journal plugins reset`](#journal-plugins-reset)
* [`journal plugins uninstall [PLUGIN]`](#journal-plugins-uninstall-plugin)
* [`journal plugins unlink [PLUGIN]`](#journal-plugins-unlink-plugin)
* [`journal plugins update`](#journal-plugins-update)

## `journal hello PERSON`

Say hello

```
USAGE
  $ journal hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ journal hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/SmackSmash/journal/blob/v0.0.0/src/commands/hello/index.ts)_

## `journal hello world`

Say hello world

```
USAGE
  $ journal hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ journal hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/SmackSmash/journal/blob/v0.0.0/src/commands/hello/world.ts)_

## `journal help [COMMAND]`

Display help for journal.

```
USAGE
  $ journal help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for journal.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.33/src/commands/help.ts)_

## `journal plugins`

List installed plugins.

```
USAGE
  $ journal plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ journal plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/index.ts)_

## `journal plugins add PLUGIN`

Installs a plugin into journal.

```
USAGE
  $ journal plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into journal.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the JOURNAL_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the JOURNAL_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ journal plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ journal plugins add myplugin

  Install a plugin from a github url.

    $ journal plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ journal plugins add someuser/someplugin
```

## `journal plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ journal plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ journal plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/inspect.ts)_

## `journal plugins install PLUGIN`

Installs a plugin into journal.

```
USAGE
  $ journal plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into journal.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the JOURNAL_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the JOURNAL_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ journal plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ journal plugins install myplugin

  Install a plugin from a github url.

    $ journal plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ journal plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/install.ts)_

## `journal plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ journal plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ journal plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/link.ts)_

## `journal plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ journal plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ journal plugins unlink
  $ journal plugins remove

EXAMPLES
  $ journal plugins remove myplugin
```

## `journal plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ journal plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/reset.ts)_

## `journal plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ journal plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ journal plugins unlink
  $ journal plugins remove

EXAMPLES
  $ journal plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/uninstall.ts)_

## `journal plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ journal plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ journal plugins unlink
  $ journal plugins remove

EXAMPLES
  $ journal plugins unlink myplugin
```

## `journal plugins update`

Update installed plugins.

```
USAGE
  $ journal plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/update.ts)_
<!-- commandsstop -->
