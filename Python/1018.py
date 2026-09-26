a = int(input())
print(a)
n100 = int(a/100)
a = a%100
n50 = int(a/50)
a = a%50
n20 = int(a/20)
a = a%20
n10 = int(a/10)
a = a%10
n5 = int(a/5)
a = a%5
n2 = int(a/2)
a = a%2
n1 = int(a/1)
a = a%1
print(n100,"nota(s) de R$ 100,00")
print(n50,"nota(s) de R$ 50,00")
print(n20,"nota(s) de R$ 20,00")
print(n10,"nota(s) de R$ 10,00")
print(n5,"nota(s) de R$ 5,00")
print(n2,"nota(s) de R$ 2,00")
print(n1,"nota(s) de R$ 1,00")
