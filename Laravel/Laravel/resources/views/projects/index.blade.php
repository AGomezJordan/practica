@extends('layaout')

@section('title', 'portfolio')

@section('content')
<div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center">
        <h1 class="mb-0">PROYECTOS</h1>
        @auth
            <a class="btn btn-primary" href="{{route('projects.create')}}">Nuevo</a>
        @endauth
    </div>

    <ul class="list-group">
        @forelse($projects as $item)
            <li class="list-group-item border-0 mb-3 shadow-sm">
                <a class="text-secondary d-flex justify-content-between align-items-center" href="{{route('projects.show', $item)}}">
                    <span class="font-weight-bold">{{$item->title}}</span>
                    <span class="text-black-50">{{$item->created_at->format('d/m/y')}}</span>
                </a></li>
        @empty
            <li  class="list-group-item border-0 mb-3 shadow-sm">No hay proyectos para mostrar</li>
        @endforelse
        {{$projects->links()}}
    </ul>
</div>

@endsection
