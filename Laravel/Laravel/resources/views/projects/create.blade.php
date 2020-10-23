@extends('layaout')

@section('title', 'Crear Proyecto')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-sm-10 col-lg-6 mx-auto">
                <h1>CREAR PROYECTO</h1>

                @include('partials.validation-errors')

                <form class="bg-white py-3 px-4 shadow rounded" method="post" action="{{route('projects.store')}}">
                    @csrf
                    @include('projects._form', ['btnText' => 'GUARDAR'])
                </form>
            </div>
        </div>
    </div>
@endsection
