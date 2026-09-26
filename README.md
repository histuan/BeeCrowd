# 🐝 Beecrowd — Soluções

Minhas soluções para problemas do [Beecrowd](https://judge.beecrowd.com/) (antigo URI Online Judge), escritas em **C**, **JavaScript** e **Python**.

![C](https://img.shields.io/badge/C99-132_problemas-00599C?logo=c&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-138_problemas-F7DF1E?logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-29_problemas-3776AB?logo=python&logoColor=white)

**152 problemas diferentes resolvidos** · 301 soluções no total (vários problemas foram resolvidos em mais de uma linguagem).

---

## 📁 Estrutura

```
BeeCrowd/
├── C99/          → soluções em C (padrão C99)
├── JavaScript/   → soluções em JavaScript (Node.js)
└── Python/       → soluções em Python 3
```

Cada arquivo tem o **número do problema** no nome. Para achar a solução do problema 1020 em C, abra `C99/1020.c`.

Alguns problemas têm mais de uma versão:

| Arquivo | Diferença |
|---|---|
| `C99/1178.c` e `C99/1178-v2.c` | duas abordagens diferentes para o mesmo problema |
| `C99/2312-no-struct.c` e `C99/2312-with-struct.c` | a mesma solução sem e com `struct` |

---

## ▶️ Como executar

O Beecrowd envia a entrada pela entrada padrão, então todos os programas leem do terminal.

**C**
```bash
gcc C99/1020.c -o solucao
./solucao
```

**JavaScript** (as soluções leem de `/dev/stdin`, como o Beecrowd exige, então rode no Linux, macOS ou WSL)
```bash
node JavaScript/1020.js < entrada.txt
```

**Python**
```bash
python3 Python/1020.py
```

---

## 🎯 Objetivo

Praticar lógica de programação, estruturas de dados e a sintaxe de linguagens diferentes resolvendo o mesmo problema de mais de um jeito.
