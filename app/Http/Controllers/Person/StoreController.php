<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StoreRequest;
use App\Http\Resources\Person\PersonResource;
use App\Models\Person;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $newPerson = $request->validated();
        $person = Person::create($newPerson);
        return new PersonResource($person);
    }
}
