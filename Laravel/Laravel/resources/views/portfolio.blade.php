@extends('layaout')

@section('title', 'portfolio')

@section('content')

    <h1>portfolio</h1>

    <ul>
        @forelse($portfolio as $item)
                <li>{{$item['title']}}</li>
            @empty
                <li>No hay proyectos para mostrar</li>
        @endforelse
    </ul>

@endsection
