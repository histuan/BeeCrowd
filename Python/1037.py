a = float(input())
if(a>= 0 and a<=25):
    b = "[0,25]"
    print("Intervalo",b)
elif(a>=25 and a<=50):
    b = "(25,50]"
    print("Intervalo",b)
elif(a>=50 and a<=75):
    b = "(50,75]"
    print("Intervalo",b)
elif(a>=75 and a<=100):
    b = "(75,100]"
    print("Intervalo",b)
else:
    print("Fora de intervalo")
