## Practical 1: Introduction to swift programming language, Xcode IDE and write swift program using function for following functionality:
- a. Check whether number is prime or not
- b. Check whether number is palindrome or not


**A. Check whether number is prime or not**
```swift
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

**B. Check whether number is palindrome or not**
```swift
var str = "1223221"

if (compare(str: str)) {
  print("\(str) is a palindrone")
} else {
  print("\(str) is not a palindrone")
}

func compare(str: String) -> Bool {
  if str == String(str.reversed()) {return true} else {return false}
}
```