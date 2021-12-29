## Create a program in RUST to modify variables after defining

```
fn main() {
  let num1 = 12;
  let num2 = 14;
  println!("num1: {}, num2: {}\n{} is greater", num1, num2, greater(num1, num2));

  num1 = 13;
  num2 = 24;
  println!("num1: {}, num2: {}\n{} is greater", num1, num2, greater(num1, num2));
}

fn greater(x: i32, y: i32) -> i32 {
  if x > y {x} else {y}
}
```
