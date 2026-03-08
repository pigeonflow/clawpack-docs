# clawpack link

Register a pulled agent in your OpenClaw configuration. Sets up workspace path, auth, and runs a health check.

## Usage

```bash
clawpack link [path] [options]
```

## Options

| Flag | Description | Default |
|------|-------------|---------|
| `--name <name>` | Override agent name | From manifest |
| `--provider <name>` | Auth provider (e.g. anthropic) | — |
| `--api-key <key>` | Auth API key | — |
| `--model <model>` | Model override | — |
| `--skip-health-check` | Skip the health check | — |
| `-h, --help` | Show help | — |

## Examples

```bash
# Link current directory
clawpack link

# Link a specific path
clawpack link ./agents/my-bot

# Link with auth
clawpack link --provider anthropic --api-key sk-ant-...

# Custom name
clawpack link --name production-bot
```

## See Also

- [Link guide](/guide/link)
- [`unlink`](/cli/unlink)
- [`pull`](/cli/pull) with `--link`
