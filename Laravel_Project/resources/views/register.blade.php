<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="{{route('register')}}" method="POST" >
        @csrf
        <input type="text" palaceholder="Enter name" name="name">
        <input type="text" palaceholder="Enter email" name="email">
        <input type="text" palaceholder="Enter password" name="password">
        <button>Register</button>
    </form>
</body>
</html>