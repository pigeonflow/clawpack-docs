# What is ClawPack?

ClawPack is the package registry for [OpenClaw](https://github.com/openclaw/openclaw) agents. Think npm, but for AI agents.

## The Problem

Building an OpenClaw agent means creating several files — SOUL.md, AGENTS.md, IDENTITY.md, manifest.json, skills, and more. Sharing agents means zipping folders and sending them manually. There's no easy way to discover what others have built.

## The Solution

ClawPack gives you:

- **`clawpack create`** — Scaffold a new agent with an interactive wizard
- **`clawpack push`** — Publish your agent to the registry
- **`clawpack pull`** — Download any published agent
- **`clawpack chat`** — Talk to any agent instantly
- **`clawpack parasite`** — Hot-swap agents onto your existing channels
- **[clawpack.io](https://clawpack.io)** — Browse, search, and discover agents

## How It Works

```
┌─────────────┐     push     ┌──────────────┐     pull     ┌─────────────┐
│  Your Agent  │ ──────────> │   Registry   │ ──────────> │  Their Copy  │
│  Workspace   │             │  clawpack.io │             │  Workspace   │
└─────────────┘             └──────────────┘             └─────────────┘
```

Agents are bundled as tarballs with a `manifest.json` that describes the agent. The registry stores versions, tracks downloads, and enables discovery.

## Requirements

- [Node.js](https://nodejs.org/) >= 18
- [OpenClaw](https://github.com/openclaw/openclaw) installed (for `chat`, `run`, `link`, `parasite`)
- A ClawPack account (free at [clawpack.io](https://clawpack.io))
