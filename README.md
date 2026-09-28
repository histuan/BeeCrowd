# Beecrowd solutions

![C99](https://img.shields.io/badge/C99-00599C?logo=c&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)

My solutions to problems from [Beecrowd](https://judge.beecrowd.com/) (formerly URI Online Judge), in C, JavaScript and Python. I keep adding new ones, and many problems are solved in more than one language.

## Structure

```
BeeCrowd/
├── C99/          # C (C99 standard)
├── JavaScript/   # JavaScript (Node.js)
└── Python/       # Python 3
```

Files are named after the problem number, so the C solution to problem 1020 is `C99/1020.c`.

A few problems have more than one version:

| File | Difference |
|---|---|
| `C99/1178.c` and `C99/1178-v2.c` | two different approaches |
| `C99/2312-no-struct.c` and `C99/2312-with-struct.c` | same solution without and with a `struct` |

## How to run

Beecrowd sends the input through standard input, so every program reads from the terminal.

C:

```bash
gcc C99/1020.c -o solution
./solution
```

JavaScript (the solutions read from `/dev/stdin`, like Beecrowd expects, so use Linux, macOS or WSL):

```bash
node JavaScript/1020.js < input.txt
```

Python:

```bash
python3 Python/1020.py
```
