# 🐝 Beecrowd — Solutions

My solutions to problems from [Beecrowd](https://judge.beecrowd.com/) (formerly URI Online Judge), written in **C**, **JavaScript** and **Python**.

![C](https://img.shields.io/badge/C99-00599C?logo=c&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)

A growing collection of solved problems, many of them in more than one language.

---

## 📁 Structure

```
BeeCrowd/
├── C99/          → solutions in C (C99 standard)
├── JavaScript/   → solutions in JavaScript (Node.js)
└── Python/       → solutions in Python 3
```

Each file is named after the **problem number**. To find the C solution to problem 1020, open `C99/1020.c`.

Some problems have more than one version:

| File | Difference |
|---|---|
| `C99/1178.c` and `C99/1178-v2.c` | two different approaches to the same problem |
| `C99/2312-no-struct.c` and `C99/2312-with-struct.c` | the same solution without and with a `struct` |

---

## ▶️ How to run

Beecrowd provides input through standard input, so every program reads from the terminal.

**C**
```bash
gcc C99/1020.c -o solution
./solution
```

**JavaScript** (the solutions read from `/dev/stdin`, as Beecrowd requires, so run them on Linux, macOS or WSL)
```bash
node JavaScript/1020.js < input.txt
```

**Python**
```bash
python3 Python/1020.py
```

---

## 🎯 Goal

To practice programming logic, data structures and the syntax of different languages by solving the same problem in more than one way.
