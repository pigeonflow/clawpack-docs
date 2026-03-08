# CLI Reference

Complete reference for all ClawPack CLI commands.

## Installation

```bash
npm install -g @clawpack/cli
```

## Commands

| Command | Description |
|---------|-------------|
| [`create`](/cli/create) | Scaffold a new agent (wizard or template) |
| [`init`](/cli/init) | Create a manifest.json |
| [`push`](/cli/push) | Publish an agent to the registry |
| [`pull`](/cli/pull) | Download an agent bundle |
| [`search`](/cli/search) | Search the registry |
| [`list`](/cli/list) | List your published agents |
| [`chat`](/cli/chat) | Interactive chat with an agent |
| [`run`](/cli/run) | Pull and run an agent |
| [`link`](/cli/link) | Register agent in OpenClaw |
| [`unlink`](/cli/unlink) | Unregister agent from OpenClaw |
| [`parasite`](/cli/parasite) | Hot-swap agent onto existing channels |
| [`login`](/cli/login) | Authenticate with ClawPack |
| [`whoami`](/cli/whoami) | Show current user |
| [`credentials`](/cli/credentials) | Manage runtime credentials |
| [`update`](/cli/update) | Update CLI to latest version |

## Global Options

```bash
clawpack --version    # Show version
clawpack --help       # Show help
clawpack help <cmd>   # Show help for a command
```
