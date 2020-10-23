@if(Auth::user()->hasRole('admin'))
    <div>Acceso como administrador</div>
@elseif(Auth::user()->hasRole('globalAdmin'))
    <div>Acceso como administrador global</div>
@else
    <div>Acceso usuario</div>
@endif
You are logged in!
