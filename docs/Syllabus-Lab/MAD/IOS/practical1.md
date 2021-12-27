## Practical 1: Create a program in swift to check whether a number is prime or not

```
var num: Int = 10
if (is_prime(x: num)) {
  print("\(num) is prime")
} else {
  print("\(num) is not prime")
}

func is_prime(x: Int) -> Bool {
  if x <= 1 { return false }
  var counter = 0
  for y in Range(1...x + 1) {
    if x % y == 0 {
      counter += 1
      //print("\(x) is divisible by \(y)");
    }
  }
  if counter == 2 { return true} else { return false }
}
```
