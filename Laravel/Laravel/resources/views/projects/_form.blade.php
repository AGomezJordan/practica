<div class="form-group">
    <label for="title">Titulo del proyecto</label>
        <input class="form-control border-0 bg-light shadow-sm" id="title"
               type="text" name="title" value="{{old('title',$project->title)}}">
</div>
<div class="form-group">
    <label for="description">Descripción del proyecto</label>
        <textarea class="form-control border-0 bg-light shadow-sm" id="description"
                  type="text" name="description">{{old('title',$project->description)}}</textarea>
</div>
<div class="form-group">
    <label for="url">URL del proyecto</label>
        <input class="form-control border-0 bg-light shadow-sm" id="url"
               type="text" name="url" value="{{old('title',$project->url)}}">
</div>

    <button class="btn btn-primary btn-block">{{$btnText}}</button>
    <a class="btn btn-link btn-block"
       href="{{route('projects.index')}}">CANCELAR</a>
