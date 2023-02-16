<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function __invoke()
    {
        $persons = [
            [
                'id' => 1,
                'name' => 'Kirill',
                'age' => 22,
                'job' => 'coder',
            ],
            [
                'id' => 2,
                'name' => 'Anna',
                'age' => 50,
                'job' => 'economic',
            ],
            [
                'id' => 3,
                'name' => 'Nastya',
                'age' => 20,
                'job' => 'guitar-teacher',
            ],
        ];

        return $persons;
    }
}
