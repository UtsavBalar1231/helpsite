## Create a program in swift to check is a string is palindrome or not

```
var str = "abaaba"

if (compare(str: str)) {
  print("\(str) is a palindrone")
} else {
  print("\(str) is not a palindrone")
}

func compare(str: String) -> Bool {
  if str == String(str.reversed()) {return true} else {return false}
}
```
