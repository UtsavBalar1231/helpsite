## Create a RUST program to check greater of two variables
```
fn main() {
  let num1 = 12;
  let num2 = 14;
  println!("num1: {}, num2: {}\n{} is greater", num1, num2, greater(num1, num2));
}

fn greater(x: i32, y: i32) -> i32 {
  if x > y {x} else {y}
}
```
