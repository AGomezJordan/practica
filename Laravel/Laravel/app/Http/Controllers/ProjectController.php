<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveProjectRequest;
use App\project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('projects.index', [
            'projects' => project::orderBy('updated_at', 'ASC')->paginate()
        ] );
    }

    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }

    public function show(Project $project){

        return view('projects.show',[
            'project' => $project
        ]);
    }

    public function create(){
        return view('projects.create', [
            'project' => new Project
        ]);
    }

    public function store(SaveProjectRequest $request){

        Project::create($request -> validated());

        return redirect()->route('projects.index')->with('status', 'El proyecto se ha creado con exito');
    }

    public function edit(Project $project){

        return view('projects.edit',[
            'project' => $project
        ]);
    }

    public function update(Project $project, SaveProjectRequest $request){

        $project->update($request->validated());

        return redirect()->route('projects.show', $project)->with('status', 'El proyecto se ha actualizado con exito');
    }

    public function destroy(Project $project){
        $project->delete();
        return redirect()->route('projects.index')->with('status', 'El proyecto se ha eliminado con exito');
    }
}

