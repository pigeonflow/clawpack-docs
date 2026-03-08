# clawpack login

Authenticate with the ClawPack registry.

## Usage

```bash
clawpack login [options]
```

## Options

| Flag | Description | Default |
|------|-------------|---------|
| `--api-key <key>` | API key (skip prompt) | — |
| `--registry <url>` | Custom registry URL | `https://clawpack.io` |
| `-h, --help` | Show help | — |

## Getting Your API Key

1. Go to [clawpack.io](https://clawpack.io)
2. Sign in or create an account
3. Go to Dashboard → Settings
4. Copy your API key

## Examples

```bash
# Interactive (prompts for key)
clawpack login

# Non-interactive
clawpack login --api-key your-key-here
```

## Config Storage

Credentials are stored at `~/.clawpack/config.json`.

## See Also

- [`whoami`](/cli/whoami)
