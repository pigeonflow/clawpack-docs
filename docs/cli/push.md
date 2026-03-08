# clawpack push

Publish an agent bundle to the ClawPack registry.

## Usage

```bash
clawpack push [path] [options]
```

## Options

| Flag | Description | Default |
|------|-------------|---------|
| `--public` | Make bundle public | `true` |
| `--private` | Make bundle private | — |
| `--org <slug>` | Publish under an organization | — |
| `--changelog <text>` | Version changelog message | — |
| `-h, --help` | Show help | — |

## Examples

```bash
# Publish current directory
clawpack push

# Publish as private
clawpack push --private

# Publish under an org
clawpack push --org my-team

# With changelog
clawpack push --changelog "Added new skills for TypeScript"

# Publish a specific directory
clawpack push ./agents/my-bot
```

## Requirements

- Must be logged in (`clawpack login`)
- Directory must contain `manifest.json`
- Version must not already exist (bump before pushing)

## What Gets Bundled

Everything in the directory except `node_modules/`, `.git/`, and patterns from `.gitignore`.

## See Also

- [Publishing guide](/guide/publishing)
- [`login`](/cli/login)
- [`init`](/cli/init) — Create manifest
