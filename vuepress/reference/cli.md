# Command Line Interface

VuePress CLI is provided by [@vuepress/cli](https://www.npmjs.com/package/@vuepress/cli) package. It is a dependency of the [vuepress](https://www.npmjs.com/package/vuepress) package, and you can also install it separately.

Run `vuepress --help` to get following help messages:

```sh
Usage:
  $ vuepress <command> [options]

Commands:
  dev [sourceDir]    Start development server
  build [sourceDir]  Build to static site

For more info, run any command with the `--help` flag:
  $ vuepress dev --help
  $ vuepress build --help

Options:
  -v, --version  Display version number
  -h, --help     Display this message
```

## dev

Start a development server to develop your VuePress site locally.

```sh
Usage:
  $ vuepress dev [sourceDir]

Options:
  -c, --config <config>  Set path to config file
  -p, --port <port>      Use specified port (default: 8080)
  -t, --temp <temp>      Set the directory of the temporary files
  --host <host>          Use specified host (default: 0.0.0.0)
  --cache <cache>        Set the directory of the cache files
  --clean-cache          Clean the cache before dev
  --open                 Open browser when ready
  --debug                Enable debug mode
  --no-watch             Disable watching page and config files (default: true)
  -v, --version          Display version number
  -h, --help             Display this message
```

## build

Build your VuePress site to static files, which are ready for [deployment](../guide/deployment.md).

```sh
Usage:
  $ vuepress build [sourceDir]

Options:
  -c, --config <config>  Set path to config file
  -d, --dest <dest>      Set the directory build output (default: .vuepress/dist)
  -t, --temp <temp>      Set the directory of the temporary files
  --cache <cache>        Set the directory of the cache files
  --clean-cache          Clean the cache before build
  --debug                Enable debug mode
  -v, --version          Display version number
  -h, --help             Display this message
```
