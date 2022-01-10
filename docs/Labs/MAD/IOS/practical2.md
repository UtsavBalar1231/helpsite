## Write a program to create parent class Person and derive two classes from it namely Student and Employee. Classes shall have following attributes and methods:

1.  Person -> name, age, gender, city, set()
2.  Student -> id, sem, div, sublmarks, sub2marks, sub3marks, result()
3.  Employee -> id, designation, salary, gross_saraly()
4.  for gross_salary() consider following value:
- If salary < 10000 then HRA=10%, DA=5%, PF=200
- If salary > 10000 then HRA=15%, DA=7%, PF=10%

```swift
class Person {
    var name: String
    var age: Int
    var gender: String
    var city: String
    
    init(name: String, age: Int, gender: String, city: String) {
        self.name = name
        self.age = age
        self.gender = gender
        self.city = city
    }

    func set() {
        print(
            "Name: \(name)\nAge: \(age)\nGender: \(gender)\ncity: \(city)"
        )
    }
}

class Student: Person {
    var id: String
    var sem: String
    var div: Character
    var sub1marks: Int
    var sub2marks: Int
    var sub3marks: Int
    
    init(id: String, sem: String, div: Character,
        sub1marks: Int, sub2marks: Int, sub3marks: Int) {
        self.id = id
        self.sem = sem
        self.div = div
        self.sub1marks = sub1marks
        self.sub2marks = sub2marks
        self.sub3marks = sub3marks
        super.init(name: "Utsav Balar", age: 22, gender: "Male", city: "Surat")
    }
    
    func result() {
        print(
            "sub1marks: \(sub1marks)\nsub2marks: \(sub2marks)\nsub3marks: \(sub3marks)\nresult: \(sub1marks+sub2marks+sub3marks)\n"
        )
    }
}

class Employee: Person {
    var id: String
    var designation: String
    var salary: Int
    
    init(id: String, designation: String, salary: Int) {
        self.id = id
        self.designation = designation
        self.salary = salary
        super.init(name: "Utsav Balar", age: 22, gender: "Male", city: "Surat")
    }
    
    func gross_salary() -> Double {
        var HRA: Double
        var DA: Double
        var PF: Double
        let salary  = Double(self.salary)
        if salary < 10000 {
            HRA = 0.1 * salary
            DA = 0.05 * salary
            PF = 200
        } else {
            HRA = 0.15 * salary
            DA = 0.07 * salary
            PF = 0.1 * salary
        }
        return salary + HRA + DA - PF
    }
}

var p1 = Person(
    name: "Utsav Balar",
    age: 22,
    gender: "Male",
    city: "Surat"
)

p1.set()

var s1 = Student(
    id: "201903103510391",
    sem: "SEM-6",
    div: "C",
    sub1marks: 90,
    sub2marks: 95,
    sub3marks: 100
)

s1.result()

var emp1 = Employee(
    id: "201903103510391",
    designation: "SDE",
    salary: 100000
)

print("Gross salary: \(emp1.gross_salary())")

```
