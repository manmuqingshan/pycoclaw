# PycoClaw

**AI agents on a $5 chip** — [OpenClaw](https://github.com/openclaw/openclaw) for embedded.

[![Website](https://img.shields.io/badge/pycoclaw.com-live-brightgreen)](https://pycoclaw.com)
[![Install](https://img.shields.io/badge/Install-Now-blue)](https://pycoclaw.com/install)


![App Screenshot](images/pycoclaw-screenshot.png)

## What is PycoClaw?

PycoClaw turns an ESP32 into a full conversational agent that plans, remembers, and acts on the physical world — running entirely on-device. Power budget is milliwatts, not watts; hardware cost is dollars, not hundreds.

The agent core is **[PFC](https://github.com/jetpax/PFC)** — a MicroPython runtime that tracks [OpenClaw](https://github.com/openclaw/openclaw) feature-for-feature on a microcontroller.

### What you get

- 🧠 **Hybrid memory** — TF-IDF keyword search *fused* with vector embeddings, on-device
- 💬 **Multi-channel chat** — Telegram, Scripto Studio (Discord in progress)
- 🔧 **Tool loop** — file I/O, exec, web, sensors, image gen, cron, MCP client, Google Sheets, MQTT
- 🧩 **Dynamic skills** — Python ScriptOs loaded at runtime from [ScriptoHub](https://scriptohub.com)
- ⏰ **Cron + heartbeats** — proactive scheduled wake-ups via isolated agent turns
- 🧬 **Subagents** — full spawn/steer/reap lifecycle for delegated tasks
- 📡 **OTA updates** — via [Scripto Studio](https://scriptostudio.com)
- 🔋 **Battery operation** — last-gasp flash saves
- ⚡ **Real-world control** — CAN / I²C / SPI / GPIO / USB / LVGL display

## Quick Start

1. **Get hardware** — ESP32-S3 or P4 with ≥8MB flash + ≥4MB PSRAM (~$5)
2. **Install firmware** — [pycoclaw.com/install](https://pycoclaw.com/install) — one-click browser flasher
3. **Manage device** — [Scripto Studio](https://scriptostudio.com) PWA (chat panel, file editor, config)

## Architecture

```
┌──────────────────────────────────┐
│     PFC (Prefrontal Cortex)      │  Agent core — MicroPython
├──────────────────────────────────┤
│          ScriptoHub              │  Skills & extensions marketplace
├──────────────────────────────────┤
│          Scripto Studio          │  PWA IDE + device manager
├──────────────────────────────────┤
│          MicroPython             │  + native C modules
├──────────────────────────────────┤
│        ESP32 Hardware            │  WiFi · BLE · USB · PSRAM
└──────────────────────────────────┘
```

## Platforms

| Platform | Chip | Status |
|----------|------|--------|
| ESP32-S3 | Xtensa LX7 | ✅ Production |
| ESP32-P4 | RISC-V | ✅ Production |
| ESP32-C6 | RISC-V | ✅ Production |
| RP2350 | ARM Cortex-M33 | 🚧 In progress |

## How PycoClaw compares

The MCU-class agent field has three serious entries. (Linux/Docker-hosted agents are a different class.)

|  | **PycoClaw / PFC** | **[ESP-Claw](https://github.com/espressif/esp-claw)** | **[MimiClaw](https://github.com/memovai/mimiclaw)** |
|--|---------|-----------|-----------|
| **Vendor** | jetpax (independent) | Espressif (chip vendor) | memovai |
| **Language** | MicroPython + Python skills | C/ESP-IDF + Lua skills | C/ESP-IDF |
| **Runs on** | Any MCU running MicroPython ≥ 8MB/4MB PSRAM | Espressif only | ESP32-S3 only |
| **OpenClaw compat** | Full-parity port (agent loop, sessions, cron, subagents, memory, skills) | Inspired by | Inspired by |
| **Memory** | Hybrid **TF-IDF + Gemini vectors** | 5 structured types, summary-tag recall | MEMORY.md |
| **Subagents** | ✅ | ❌ | ❌ |
| **LLM-bypass triggers** | ✅ Script cron jobs (direct MicroPython at tick), system-event annotations, autostart background tasks | ✅ Lua rules via `run_script` | ⚠️ |
| **Inbound-event rules** | ✅ User-editable `router_rules.json` — 6 actions, 5 session policies, hot-reload | ✅ Equivalent | ❌ |
| **Provider compatibility** | ✅ OpenAI-spec + tolerant tool-arg coercion (GLM/Qwen/Moonshot quirks) | ✅ openai_compatible + qwen profiles | OpenAI only |
| **MCP Client** | ✅ | ✅ | ❌ |
| **MCP Server** | 🚧 In development | ✅ Device capabilities callable by external agents | ❌ |
| **Channels** | Scripto Studio, Telegram | Feishu, QQ, Telegram, WeChat | Telegram |
| **IDE** | Scripto Studio PWA with live HUD (tokens, cost, ctx, ping, CPU, temp, RSSI) | Browser flash tool + HTTP config page | Serial CLI |
| **License** | MIT | Apache 2.0 | MIT |


## Star History

<a href="https://www.star-history.com/?repos=jetpax%2Fpycoclaw&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/image?repos=jetpax/pycoclaw&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/image?repos=jetpax/pycoclaw&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/image?repos=jetpax/pycoclaw&type=date&legend=top-left" />
 </picture>
</a>

## Related Projects

- [PFC](https://github.com/jetpax/PFC) — The agent core (MicroPython)
- [OpenClaw](https://github.com/openclaw/openclaw) — Desktop/server reference implementation
- [ScriptoHub](https://scriptohub.com) — Skills & extensions marketplace
- [Scripto Studio](https://scriptostudio.com) — PWA IDE and device manager
- [WebREPL](https://github.com/jetpax/webrepl) — Protocol specifications
- [USRobotIQ](https://usrobotiq.com) — Robot, code thyself!

## License

MIT — Copyright © 2026 Jonathan Peace

## Contact

**Jonathan Peace**
Email: jep@alphabetiq.com
