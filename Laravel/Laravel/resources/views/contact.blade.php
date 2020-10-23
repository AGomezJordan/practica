@extends('layaout')

@section('title', 'contact')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-sm-10 col-lg-6 mx-auto">

            <form method="post" action="{{route('messages.store')}}" class="bg-white shadow rounded py-3 px-3">
                @csrf
                <h1 class="text-center text-primary">{{__('Contact')}}</h1>
                <div class="form-group">
                    <input class="form-control bg-light shadow-sm @error('name') is-invalid @else border-0 @enderror"
                           name="name" placeholder="Nombre..." value="{{old('name')}}">
                    @error('name')
                    <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                    @enderror
                </div>

                <div class="form-group">
                    <input class="form-control bg-light shadow-sm @error('email') is-invalid @else border-0 @enderror"
                           name="email" placeholder="Email..." value="{{old('email')}}">
                    @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>

                <div class="form-group">
                    <input class="form-control bg-light shadow-sm @error('subject') is-invalid @else border-0 @enderror"
                           name="subject" placeholder="Asunto..." value="{{old('subject')}}">
                    @error('subject')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>

                <div class="form-group">
                 <textarea class="form-control bg-light shadow-sm @error('content') is-invalid @else border-0 @enderror"
                      name="content" placeholder="Mensaje...">{{old('content')}}</textarea>
                    @error('content')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>

                <div class="container text-center">
                    <button class="text-center btn bg-primary text-white">@lang('send')</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
