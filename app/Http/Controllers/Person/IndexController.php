<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Models\Person;

class IndexController extends Controller
{
    public function __invoke()
    {
//        $people = Person::skip(0)->take(5)->get();
        $people = Person::get();

        return $people;
    }
}
