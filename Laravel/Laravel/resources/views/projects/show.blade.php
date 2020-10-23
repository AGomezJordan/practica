@extends('layaout')

@section('title', 'Portafolio | '.$project->title)

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-sm-10 col-lg-6 mx-auto">
            <div class="bg-white p-5 shadow rounded">
                <h1>{{$project->title}}</h1>

                <p class="text-secondary">{{$project->description}}</p>
                <p class="text-black-50">{{$project->created_at->diffForHumans()}}</p>

                <div class="btn-group">
                    <a class="btn btn-primary"
                       href="{{route('projects.index')}}">VOLVER</a>
                    @auth
                        <a class="btn btn-primary"
                           href="{{route('projects.edit', $project)}}">EDITAR</a>
                        <a class="btn btn-danger"
                           href="#" onclick="document.getElementById('delete-project'.submit())">
                            ELIMINAR
                        </a>
                    @endauth
                </div>
                    <form id="delete-project" method="post" action="{{route('projects.destroy', $project)}}">
                        @csrf @method('DELETE')
                    </form>
            </div>
        </div>
    </div>
</div>

@endsection
