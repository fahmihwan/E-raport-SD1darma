<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .form-control{
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>demo akun admin</h1>
    <div>
        <form action="/admin/akun" method="POST">
            @csrf
            <div class="form-control">
                <input type="text" placeholder="nama" name="nama"> <br>
            </div>
            <div class="form-control">
                <input type="text" placeholder="username" name="username"> <br>
            </div>
            <div class="form-control">
             <input type="text" name="password" placeholder="password"><br>
            </div>
            <button>Submit</button>
        </form>
    </div>

</body>
</html>