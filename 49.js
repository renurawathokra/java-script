n=145,n2=0,temp=n,rem,fact=1;
while(temp>0)
    {
        rem=temp%10;
        fact=fact*rem;
        n2=n2+fact;
        rem=rem/10;
        fact=1;
    }
    if(n2==n)
        
            console.log("strong number");
        
        else
        {
            console.log("not strong number");
        }

    