@extends('layaout')

@section('title', 'home')

@section('content')

    <h1>HOME</h1>
    @auth
        {{auth()->user()->name}}
    @endauth
@endsection
