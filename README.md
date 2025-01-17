# TabbyAPI

<p align="left">
    <img src="https://img.shields.io/badge/Python-3.10%20|%203.11%20|%203.12-blue" alt="Python 3.10, 3.11, and 3.12">
    <a href="/LICENSE">
        <img src="https://img.shields.io/badge/License-AGPLv3-blue.svg" alt="License: AGPL v3"/>
    </a>
    <a href="https://discord.gg/sYQxnuD7Fj">
        <img src="https://img.shields.io/discord/545740643247456267.svg?logo=discord&color=blue" alt="Discord Server"/>
    </a>
</p>

<p align="left">
    <a href="https://theroyallab.github.io/tabbyAPI">
        <img src="https://img.shields.io/badge/Documentation-API-orange" alt="Developer facing API documentation">
    </a>
</p>

<p align="left">
    <a href="https://ko-fi.com/I2I3BDTSW">
        <img src="https://img.shields.io/badge/Support_on_Ko--fi-FF5E5B?logo=ko-fi&style=for-the-badge&logoColor=white" alt="Support on Ko-Fi">
    </a>
</p>

> [!IMPORTANT]
>  
>  This is a copy of theroyallab [TabbyAPI](https://github.com/theroyallab/tabbyAPI) Git-Readme

> [!NOTE]
> 
>  Rename the installer - x.js where x is the Graphics card you use to installer.js if unsure use NNVIDIA Cuda 12.x.js (This is the standard one)

> [!IMPORTANT]
>  
>  In addition to the README, please read the [Wiki](https://github.com/theroyallab/tabbyAPI/wiki/1.-Getting-Started) page for information about getting started!

> [!NOTE]
> 
>  Need help? Join the [Discord Server](https://discord.gg/sYQxnuD7Fj) and get the `Tabby` role. Please be nice when asking questions.

A FastAPI based application that allows for generating text using an LLM (large language model) using the [Exllamav2 backend](https://github.com/turboderp/exllamav2)

## Disclaimer

This project is marked rolling release. There may be bugs and changes down the line. Please be aware that you might need to reinstall dependencies if needed.

TabbyAPI is a hobby project solely for a small amount of users. It is not meant to run on production servers. For that, please look at other backends that support those workloads.

## Getting Started

> [!IMPORTANT]
> 
>  This README is not for getting started. Please read the Wiki.

Read the [Wiki](https://github.com/theroyallab/tabbyAPI/wiki/1.-Getting-Started) for more information. It contains user-facing documentation for installation, configuration, sampling, API usage, and so much more.

## Supported Model Types

TabbyAPI uses Exllamav2 as a powerful and fast backend for model inference, loading, etc. Therefore, the following types of models are supported:

- Exl2 (Highly recommended)

- GPTQ

- FP16 (using Exllamav2's loader)

In addition, TabbyAPI supports parallel batching using paged attention for Nvidia Ampere GPUs and higher.

#### Alternative Loaders/Backends

If you want to use a different model type or quantization method than the ones listed above, here are some alternative backends with their own APIs:

- GGUF + GGML - [KoboldCPP](https://github.com/lostruins/KoboldCPP)

- Production ready + Many other quants + batching - [Aphrodite Engine](https://github.com/PygmalionAI/Aphrodite-engine)

- Production ready + batching - [VLLM](https://github.com/vllm-project/vllm)

- [Text Generation WebUI](https://github.com/oobabooga/text-generation-webui)

## Contributing

Use the template when creating issues or pull requests, otherwise the developers may not look at your post.

If you have issues with the project:

- Describe the issue in detail

- If you have a feature request, please indicate it as such.

If you have a Pull Request

- Describe the pull request in detail, what, and why you are changing something

## Developers and Permissions

Creators/Developers:

- [kingbri](https://github.com/bdashore3)

- [Splice86](https://github.com/Splice86)

- [Turboderp](https://github.com/turboderp)
