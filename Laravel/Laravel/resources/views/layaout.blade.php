<!doctype html>
<html>
<head>
    <title>@yield('title', 'lalete')</title>
    <link rel="stylesheet" href="/css/app.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="/js/app.js" defer></script>
</head>
<body>
    <div id="app" class="d-flex h-screen flex-column justify-content-between">
        <header>
            @include('partials/nav')
            @include('partials.session-status')
        </header>
        <main class="py-4">
            @yield('content')
        </main>
        <footer class="bg-white text-center text-black-50 py-3 shadow">
            {{config('app.name')}} | Copyright @ {{date('Y')}}
        </footer>
    </div>
</body>
</html>
