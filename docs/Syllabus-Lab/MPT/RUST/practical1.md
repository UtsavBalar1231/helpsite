## Practical 1 : Create a program in RUST to check whether a number is prime or not

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

