<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="{{route('login')}}" method="POST">
        @csrf
        <input type="text" palaceholder="Enter email" name="email">
        <input type="text" palaceholder="Enter password" name="password">
        <button>Login</button>
    </form>
</body>
</html>