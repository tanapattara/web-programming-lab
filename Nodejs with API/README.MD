# Student API

- [Get all Students](#Get-all-Students)
- [Get student](#Get-student-with-id)
- [Update student](#Update-student)
- [Create new Student](#New-Student)
- [Delete Student](#Delete-Student)

# Get all Students

### URL

```http
GET /api/students
```

### Parametter

```json

```

### Responses

```json
[
  {
    "_id": "5f5e3be8d870f55114c980bd",
    "studentid": "000000001-0",
    "name": "Micky Mouse",
    "gpa": 4,
    "createdAt": "2020-09-13T15:34:00.219Z",
    "updatedAt": "2020-09-13T15:34:00.219Z",
    "__v": 0
  },
  {
    "_id": "5f5f15799c354d56c85c5e7a",
    "studentid": "000000002-1",
    "name": "Minnie Mouse",
    "gpa": 4,
    "createdAt": "2020-09-14T07:02:17.211Z",
    "updatedAt": "2020-09-14T07:02:17.211Z",
    "__v": 0
  }
]
```

# Get student with id

### URL

```http
GET /api/students/id
```

### Parametter

```json

```

### Responses

```json
{
  "_id": "5f5e3be8d870f55114c980bd",
  "studentid": "000000001-0",
  "name": "Micky Mouse",
  "gpa": 4,
  "createdAt": "2020-09-13T15:34:00.219Z",
  "updatedAt": "2020-09-13T15:34:00.219Z",
  "__v": 0
}
```

# Update student

### URL

```http
PUT /api/students/id
```

### Parametter

```json
{
  "gpa": 4.0
}
```

### Responses

```json
{
  "message": "Student was updated successfully."
}
```

# New Student

### URL

```http
POST /api/students
```

### Parametter

```json
{
  "studentid": "000000001-0",
  "name": "Micky Mouse",
  "gpa": 4.0,
  "alunni": false
}
```

### Responses

```json
{
  "_id": "5f5e3be8d870f55114c980bd",
  "studentid": "000000001-0",
  "name": "Micky Mouse",
  "gpa": 4,
  "createdAt": "2020-09-13T15:34:00.219Z",
  "updatedAt": "2020-09-13T15:34:00.219Z",
  "__v": 0
}
```

# Delete Student

### URL

```http
DELETE /api/students/id
```

### Parametter

```json

```

### Responses

```json
{
  "message": "Student was deleted successfully!"
}
```
