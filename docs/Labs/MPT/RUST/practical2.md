## Practical 2 : Create a program in RUST to check whether a number is prime or not

```
fn main() {
  let num = 12;
  println!("{}", prime(num));
  if prime(num) {
    println!("{} is prime", num)
  } else {
    println!("{} is not prime", num)
  }
}

fn prime(num: i32) -> bool {
  if num <= 1 {return false;}
  let mut counter = 0;
  for i in 1..num+1 {
    if num % i == 0 {
      counter = counter + 1;
    }
  }
  if counter != 2 {false} else {true}
}
```

**Alterate method**
```
use std::io;

fn main() {
    println!("Enter a number: ");
    let mut num = String::new();
    io::stdin().read_line(&mut num).unwrap();
    let num: usize = num.trim().parse().unwrap();

    match is_prime(num) {
        true => println!("{} is a Prime number", num),
        false => println!("{} is not a Prime number", num)
    }
}

fn is_prime(n: usize) -> bool {
    if n <= 1 {false}
    else {
        for i in 2..n {
            if n % i == 0 {return false;}
        }
        true
    }
}
```
